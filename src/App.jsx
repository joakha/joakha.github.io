import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import ScrollButton from "./components/ScrollButton"

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-chocolate-white'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
