import React from 'react'
import RepoList from '../components/RepoList/RepoList'
import { Outlet } from "react-router-dom";


const AllRepos = () => {
  return (
    <div>
      <Outlet />
      <RepoList />
    </div>
  )
}

export default AllRepos