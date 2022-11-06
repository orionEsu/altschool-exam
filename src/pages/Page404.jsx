import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='page404 padding'>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default Page404