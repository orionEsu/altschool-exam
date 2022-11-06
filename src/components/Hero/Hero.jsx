import React from 'react'
import "./hero.scss"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const getRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  console.log(data)
  return data
}

const Hero = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos("orion-esu").then((repos) => {
      setRepos(repos)
    })
  }, [])

  return (
    <div className='hero padding'>
      <div className='hero__image'>
        <img src={repos.avatar_url} alt="" />
      </div>

      <div className='hero__header'>
        <h1>Welcome to My repository</h1>
        <p>Here you can find all my projects</p>
      </div>

      <div className="hero__details">
        <div className="hero__details__item">
          <p className='count'>{repos.public_repos}</p>
          <p>Repos</p>
        </div>
        <div className="hero__details__item">
          <p className='count'>{repos.followers}</p>
          <p>Followers</p>
        </div>
      </div>

      <div className='hero__button'>
        <Link to="/all-repos" className="hero__button">View Repos</Link>
      </div>
    </div>
  )
}

export default Hero