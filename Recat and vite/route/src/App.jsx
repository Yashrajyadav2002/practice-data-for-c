import { Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Cart from "./Components/Cart"
import Service from "./Components/Service"
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
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/service" element={<Service/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App