import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from './components/navbar/Navbar';
//import { Example } from './components/MouseImageTrail'
import './App.css'

import About from './pages/about';
import Home from './pages/Home/index'
import Contact from './pages/contact/index'
import Products from './pages/products/index'
function App() {
  

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />

        </Routes>
        
      </Router>
    
 


    </>
  )
}

export default App
