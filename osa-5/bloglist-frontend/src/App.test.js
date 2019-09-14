import React from 'react'
import { render,  waitForElement } from '@testing-library/react'

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
  test('if user is logged in, blogs are rendered', async () => {
    const user = {
      username: 'mluukkai',
      token: '1231231214',
      name: 'Matti Luukkainen'
    }
    localStorage.setItem('user', JSON.stringify(user))
    


    const component = render(
      <App />
    )
    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.blog')
    )
    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(3) 


    const loggedUser = `${user.name} logged in`
    expect(loggedUser).toBeDefined()

    expect(component.container).toHaveTextContent(
      'HTML is easy'
    )
    expect(component.container).toHaveTextContent(
      'Browser can execute only javascript'
    )
    expect(component.container).toHaveTextContent(
      'The most important methods of HTTP are GET and POST'
    )
    
    // component.debug()
  })
  
})