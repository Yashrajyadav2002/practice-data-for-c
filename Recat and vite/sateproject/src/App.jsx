import { useState } from "react"
function App (){

  let [name,setName] = useState("yashraj")
  let [age,setAge] = useState(23)
  let [contact,setContact] = useState(1234)
  function fun (){
    setName("yadav")
  }
  function fun2(){
    setAge(22)
  }
  return(
    <>
    <h1>this is app funcation =  {name}- {age}</h1>
    <button onClick={fun}>Tap name</button>
    <button onClick={fun2}>Tap age</button>
    
    <h1>{contact}</h1> <br />
    <button onClick={()=>setContact(897)}>change contact</button>
    </>
  )
}
export default App
