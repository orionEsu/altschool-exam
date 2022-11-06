import React from 'react'
import "./navbar.scss"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Orion-Esu</Link>
      </h1>

      <div>
        <a href="https://github.com/orion-esu">
          <AiFillGithub />
        </a>
      </div>


    </nav>
  )
}

export default Navbar