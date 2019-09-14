import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './simple-blog'
import { prettyDOM, fireEvent } from '@testing-library/dom'

afterEach(cleanup)



test('renders content ', () => {
  const blog = {
    title: 'this is title',
    author: 'facebook jest',
    likes: 1
  }

  const component = render(
    <SimpleBlog blog={ blog } />
  )
 

  expect(component.container).toHaveTextContent(
    'this is title facebook jest'
  )
  expect(component.container).toHaveTextContent(
    'blog has 1 likes'
  )
  console.log(prettyDOM)

})
test('clicking the button calls event handler two times', () => {

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



