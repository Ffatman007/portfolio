import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import NumbersBanner from './components/NumbersBanner'
import SuccessStories from './components/SuccessStories'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <NumbersBanner />
        <SuccessStories />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
