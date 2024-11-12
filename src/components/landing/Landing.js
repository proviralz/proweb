import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Features from './Features'
import FAQ from './FAQ'
import Footer from '../footer/Footer'
import ForFreelancers from './ForFreelancers'
import ForClients from './ForClients'

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <FAQ />
      <ForFreelancers />
      <ForClients />
      <Footer />
    </div>
  )
}

export default Landing
