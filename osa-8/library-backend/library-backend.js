const config = require('./utils/config')
const { ApolloServer, UserInputError, gql } = require('apollo-server')
const Author = require('./models/author')
const Book = require('./models/book')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const typeDefs = gql`
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String ): [Book!]!
    allAuthors: [Author]!
  }
  type Mutation {
    addBook(
      title: String!
      published: Int!
      author: String!
      genres: [String]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
  }  
  type Book {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
  }
`

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      let books
      if (args.genre) {
        books = await Book.find({ genres: { $in: [args.genre] } })
      } else if (args.author) {
        books = await Book.find({ "author.name":  { $in: [args.author] }  })
      }
       else {
        books = await Book.find({})
      }
      return books
    },
    allAuthors: () => Author.find({}),
  },
  Author: {
    bookCount: async (root) => {
      const books = await Book.find({}).populate('author')
      const booksSum = books.reduce((sum, book) => book.author.name === root.name
        ? sum + 1
        : sum, 0)

      return booksSum
    }
  },
  Book: {
    author: (root) => Author.findById(root.author)

  },
  Mutation: {
    addBook: async (root, args) => {
      let book = new Book({ ...args })
      try {
        let findedAuthor = await Author.findOne({ name: args.author })

        if (findedAuthor) {
          findedAuthor.bookCount += 1
          book.author = findedAuthor
          return await book.save()
        }

      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args
        })
      }
      try {
        const newAuthor = new Author({ name: args.author, bookCount: 0 })

        const createdAuthor = await newAuthor.save()
        book.author = createdAuthor

        return await book.save()

      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args
        })
      }
    },
    editAuthor: async (root, args) => {
      await Author
        .updateOne({ name: { $in: [args.name] } },
          { $set: { born: args.setBornTo } }
        )
      return Author.findOne({ name: args.name })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})