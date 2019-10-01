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
    bookCount: () => Book.collection.find({}),
    authorCount: () => Author.collection.find({}),
    allBooks: async (root, args) => {
      let books
      if (args.genre) {
        books = await Book.find({ genres: { $in: [args.genre] } })
      } else {
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
    author:  (root) => Author.findById(root.author)

  },
  Mutation: {
    addBook: async (root, args) => {
      let findedAuthor = await Author.findOne({ name: args.author })
      if (findedAuthor) {
        findedAuthor.bookCount += 1
      const book = new Book({ ...args , author: findedAuthor})
       return await book.save()
      }

      const newAuthor = new Author({ name: args.author, bookCount: 0 })

      const createdAuthor = await newAuthor.save()
      const book = new Book({ ...args , author: createdAuthor})

      const createdBook = await book.save()

      return createdBook
    },
    editAuthor: (root, args) => {
      const authorToUpdate = authors.find(author => author.name === args.name)
      if (authorToUpdate === null) {
        return null
      }

      const editedAuthor = { ...authorToUpdate, born: args.setBornTo }
      authors = authors.map(author => author.name === args.name ? editedAuthor : author)
      return editedAuthor
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