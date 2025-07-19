import { Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
// import Contact from "./Components/Contact"
// import Cart from "./Components/Cart"
import Layout from "./Components/Layout"
function App(){
  return(
    <>
{/* 
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes> */}

    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App