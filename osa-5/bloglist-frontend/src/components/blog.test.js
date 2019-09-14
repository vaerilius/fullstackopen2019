import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './blog'
import { prettyDOM } from '@testing-library/dom'

afterEach(cleanup)

describe('<Blog />', () => {
  let component

  const blog = {
    title: 'I like Testing with jest',
    author: 'Timo Tamminen',
    url: 'vaerilius.fi',
    likes: 1,
    user: {
      name: 'timi'
    }
  }

  beforeEach(() => {

    component = render(
      <Blog blog={blog} />
    )
  })

  test('at start the blog are not active', () => {
    const div =  component.container.querySelectorAll('div')

    expect(div[1]).toHaveStyle('display: none')     
  })
  test('at start the blog show only title and author', () => {
    const div =  component.container.querySelectorAll('div')

    expect(div[0]).toHaveStyle('display: block')    
    expect(div[0]).toHaveTextContent(
      'I like Testing with jest Timo Tamminen'
    )

    console.log(prettyDOM)
  })
  test('on click the content are shown', () => {
    const li = component.container.querySelector('li')
    fireEvent.click(li)
    const div =  component.container.querySelectorAll('div')

    expect(div[0]).toHaveStyle('display: none')
    expect(div[1]).toHaveStyle('display: block')
    expect(div[1]).toHaveTextContent(
      'I like Testing with jest Timo Tamminenvaerilius.fi 1 likes likeAdded by timiremove'
  )  
    
  })

  console.log(prettyDOM)
  })