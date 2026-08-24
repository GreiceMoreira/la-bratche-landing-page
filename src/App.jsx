import { useState } from 'react'
import Container from './components/Container'
import Section from './components/Section'
import Layout from './components/Layout'
import Button from './components/Button'
import Hero from './sections/Hero'
import { experiences } from './data/experiences'
import Experiences from './sections/Experiences'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <Layout>
      <Hero/>
      <Experiences/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </Layout>

  )
}

export default App
