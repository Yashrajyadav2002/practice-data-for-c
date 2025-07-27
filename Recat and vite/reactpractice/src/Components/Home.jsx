import { useState } from "react"
function Home (props){
  
  return(
    <>
    <h1>This is home page</h1>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    
    
    </>
  )
}
export default Home