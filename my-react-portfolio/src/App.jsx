import { React } from 'react'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'


function App() {

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Contact />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
