import React from 'react'
import { render,  waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)
    await waitForElement(
      () => component.getByText('Login')
    )

    const blogs =  component.container.querySelectorAll('Blog')
    expect(blogs.length).toBe(0)

    const inputs =  component.container.querySelectorAll('input')

    expect(inputs[0]).toHaveTextContent('')  
    expect(inputs[1]).toHaveTextContent('')  


  })
})