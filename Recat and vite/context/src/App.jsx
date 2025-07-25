import { createContext } from "react"
import Child1 from "./Components/Child1"


  let store = createContext()
  // let name = "From App Page"
  let user = {
    name:"yash",
    email:"yyash9631@gmail.com",
    password:123456789

  }
  
function App (){

  
  return(
    <>
    <h1>This is App</h1>
    {/* <store.Provider value = {name}>
      <Child1/>
    </store.Provider> */}
    <store.Provider value={user}>
      <Child1/>
    </store.Provider>
    
    </>
  )
}
export default App
export{store}