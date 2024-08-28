import React from 'react'
import Layout from '../dashboard/Layout'
import Freelancer from './Freelancer'
import Client from './Client'

const Home = () => {

  const userGroup = "client"
  return (
    <div>
      <Layout>
        {userGroup === "freelancer" && (
          <Freelancer />
        )}

        {userGroup !== "freelancer" && (
          <Client />
        ) }
      </Layout>
    </div>
  )
}

export default Home
