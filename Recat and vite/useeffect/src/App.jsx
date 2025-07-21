import { useEffect, useState } from "react"

const App = () => {
  let [count , setcount] = useState(0)
  let [name , setName] = useState("samsung")
  // without dependecy

  useEffect(()=>console.log("working"))

  // with empty dependecy

  useEffect(()=>console.log("working"),[])

  // with dependecy

  useEffect(()=>console.log("working"),[name])

  

  return(
    <>
    <h1>this is the app page </h1>
    <h1>{count}</h1>

    <button onClick={()=>setcount(count+1)}>increse</button>
    <h1>{name}</h1>

    <button onClick={()=>setName("i phone 20")}>change</button>
    
    
    </>
  )
}
export default App 