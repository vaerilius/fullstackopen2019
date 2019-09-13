import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './simple-blog'
import { prettyDOM, fireEvent } from '@testing-library/dom'
import { async } from 'q'

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
test('clicking the button calls event handler two times', async () => {

  const blog = {
    title: 'this is title',
    author: 'facebook jest',
    likes: 1
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)


  expect(mockHandler.mock.calls.length).toBe(2)

})



