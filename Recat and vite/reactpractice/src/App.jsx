import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import { useState } from "react"

function App (){
  let user={
    name:"yash",
    city:"bhopal",
    age:23
  }
  let [name,changename] = useState("yadavji")
  let [number,changenum] = useState(123456789)
  return(
    <>
    <h1>This is App page</h1>
    <Home name="yash" city="bhopal" age={23}/>
    <About/>
    <Contact/>
    <h1>{name}</h1>
    <button onClick={()=>changename("jadam")}>change</button>
    <h2>{number}</h2>
    <button onClick={()=>changenum(98746513)}>change num</button>
    
    </>
  )
}
export default App