import React from 'react'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Places from './components/Places'
import Home from './components/Home';
import More from './components/More'
import Contact from './components/Contact';
import PlaceDetails from './components/PlaceDetails';

const App = () => {
  return (
    <div className='flex flex-col  bg-gradient-to-r from-rose-100 to-teal-100'>
    <Router>
          <Routes>
                    <Route    path="/"  element={<Home/>} />
                    <Route    path="/about" element={<About/>} />
                    <Route    path="/more" element={<More/>} />
                    <Route    path='/contact' element={<Contact/>} />
                    <Route    path='/places' element={<Places/>}/>
                    <Route    path="/place/:placeId" element={<PlaceDetails/>} />
            </Routes>
    </Router>
    </div>
  )
}

export default App
