import { useState } from "react"

function State(){
    let [sting,setsting] = useState("cold water")
    let [person,setperson] = useState({
        name:"yash" ,age:23
    })

    return(
        <>
        <h1> what is the water type =  {sting}</h1>
        <h1> person name is =  {person.name}</h1>
        <h2>yash age is  =  {person.age}</h2>
        
        </>
    )
}
export default State