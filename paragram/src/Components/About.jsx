import { useParams } from "react-router-dom"
import React from "react"
function About () {
    let {id,name} = useParams()
    return(
        <>
        <h1>this is Abut --{id} and {name}</h1>
        
        </>
    )
}
export default About