import * as React from "react"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import '../assets/index.scss'


export default function App() {
  return (
    <div className="App">
      <Header />
      <span className="anchor" id="Home"></span>
      <main>
        <Home />
        <span className="anchor" id="About"></span>
        <About />
        <span className="anchor" id="Skills"></span>
        <Skills />
        <span className="anchor" id="Projects"></span>
        <Projects />
        <span className="anchor" id="Contact"></span>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
