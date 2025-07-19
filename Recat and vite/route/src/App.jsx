import { Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
function App(){
  return(
    <>
    <h1>This is App page</h1>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  )
}
export default App