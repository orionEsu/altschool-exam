import React from 'react'
import "./repolist.scss"
import { useEffect, useState } from 'react'
import RepoCard from "../RepoCard/RepoCard"

// get all repositories of github user
const getRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const data = await response.json()
  console.log(data)
  return data
}

const colors = [
  "rgb(252, 186, 40)",
  "rgb(11, 161, 91)",
  "rgb(123, 94, 167)",
  "rgb(18, 181, 229)",
  "rgb(252, 116, 40)",
  "rgb(253, 139, 163)",
]

const RepoList = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos("orion-esu").then((repos) => {
      setRepos(repos)
    })
  }, [])

  return (
    <div className='RepoList padding'>
      <h1>RepoList :</h1>

      <div className='repo__items'>
        {/* get random colors to list items */}
        {repos.map((repo, index) => (
          <RepoCard
            repo={repo}
            key={repo.id}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  )
}

export default RepoList