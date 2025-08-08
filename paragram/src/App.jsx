import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from './Components/Services'
import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <><h1>this is App</h1>

    <Link to='/home/1/yash'>user 1</Link>
    <Link to='/about/2/vijay'>user 2</Link>
    <Link to='/contact/3/rohit'>user 3</Link>
    <Link to='/services/4/sunman'>user 4</Link>

    <Routes>
      <Route path='/home/:id/:name' element={<Home/>} />
      <Route path='/about/:id/:name' element={<About/>} />
      <Route path='/contact/:id/:name' element={<Contact/>} />
      <Route path='/services/:id/:name' element={<Services/>} />
    </Routes>


    </>
  )
}
export default App