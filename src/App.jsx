import { useState } from 'react'
import Container from './components/Container'
import Section from './components/Section'
import Layout from './components/Layout'
import Button from './components/Button'
import Hero from './sections/Hero'
import { experiences } from './components/experience/experiences'
import Experiences from './sections/Experiences'

function App() {
  return (
    <Layout>
      {/* <Section>
        <Container>
          <h1 className="text-5xl font-bold text-brand-orange text-center">
          La Bratche
          </h1>

          <p className='mt-4 text-text-secondary text-center'>
            Experiêcia gastronomica na brasa.
          </p>
        <div className="mt-8 flex gap-4">
          <Button>
            Solicitar orçamento
          </Button>

          <Button variant='secondary'>
            Conheça nossa história
          </Button>
        </div>
        </Container>
      </Section> */}
      <Hero/>
      <Experiences/>

    </Layout>


  )
}

export default App
