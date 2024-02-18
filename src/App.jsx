import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Portfolio from "./pages/portfolio/Protfolio"
import About from "./pages/about/About"


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
