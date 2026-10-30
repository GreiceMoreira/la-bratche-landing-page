
import Layout from './components/Layout'
import Hero from './sections/Hero'
import Experiences from './sections/Experiences'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hamburguer from './sections/Hamburguer'
import Churrasco from './sections/Churrasco'

function App() {
  return (
    <Layout>
      <Hero/>
      <Churrasco/>
      <Hamburguer />
      {/* <Experiences/> */}
      <Gallery/>
      <Contact/>
      <Footer/>

    </Layout>

  )
}

export default App
