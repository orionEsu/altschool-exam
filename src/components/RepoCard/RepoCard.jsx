import React from 'react'
import "./repocard.scss"
import { FaRegStar } from 'react-icons/fa'
import { IoMdGitNetwork } from 'react-icons/io'
import { Link } from 'react-router-dom'

const RepoCard = ({ repo, color }) => {
  return (
    <div className={`RepoCard`} style={{ backgroundColor: color }}>
      <Link to={`${repo.name}`} className="RepoCard__link">
        <h1>{repo.name}</h1>
        <p>Language: {repo.language}</p>
        <br />
        {/* convert time from  */}
        <p>
          This repo was created on: <br /> {new Date(repo.created_at).toLocaleDateString()}
        </p>

        <div className='repo__extra'>
          <div className='extra__details'>
            <p><FaRegStar /> {repo.stargazers_count}</p>
          </div>

          <div className='extra__details'>
            <p><IoMdGitNetwork /> {repo.forks_count}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RepoCard