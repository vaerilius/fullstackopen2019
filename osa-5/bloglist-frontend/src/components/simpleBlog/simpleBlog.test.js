import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './simple-blog'
import { prettyDOM } from '@testing-library/dom'

afterEach(cleanup)

test('renders content ', () => {
  const blog = {
    title: 'this is title',
    author: 'facebook jest',
    likes: 1
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )
 

  expect(component.container).toHaveTextContent(
    'this is title facebook jest'
  )
  expect(component.container).toHaveTextContent(
    'blog has 1 likes'
  )


  console.log(prettyDOM)

})



