import React from 'react'
import "./repodetails.scss"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const getRepos = async (repoName) => {
  const response = await fetch(`https://api.github.com/repos/orion-esu/${repoName}`)
  const data = await response.json()
  console.log(data)
  return data
}

const RepoDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log("the id is", id)

  const [repoDetails, setRepoDetails] = useState([])

  useEffect(() => {
    console.log("first render")
    getRepos(id).then((data) => {
      console.log("data" + data)
      setRepoDetails(data)
    })
    window.scrollTo(0, 0);

  }, [id, params])

  return (
    <div className='repo-details'>
      <h1>Repo Details</h1>

      <div className='repo-details__items'>
        <p>Repo Name: {repoDetails.name}</p>
        <p>Forks: {repoDetails.forks}</p>
        <p>Description: {repoDetails.description}</p>
        <p>Last Updated: {repoDetails.updated_at}</p>
        {/* <p>Repo Description: {repoDetails.}</p> */}
        <p>Link to Repo: <a target="_blank" href={repoDetails.url}>Visit</a></p>
      </div>
    </div>
  )
}

export default RepoDetails