const blogs = [
  {
    author: 'matti luukkainen',
    id: '5d7a3de058f5091e849274e4',
    likes: 14,
    title: 'HTML is easy',
    url: 'mooc.fi',
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    author: 'Timo Tamminen',
    id: '5a451e21e0b8b04a45638211',
    likes: 1,
    title: 'Browser can execute only javascript',
    url: 'timo.fi',
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    author: 'sinikka niskanen',
    id: '5a451e30b5ffd44a58fa79ab',
    likes: 14,
    title: 'The most important methods of HTTP are GET and POST',
    url: 'sinikka.fi',
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  }

]
const getAll = () => {
  return Promise.resolve(blogs)
}
const setToken = newToken => {
  let token = `bearer ${newToken}`
}

export default { getAll, setToken }

