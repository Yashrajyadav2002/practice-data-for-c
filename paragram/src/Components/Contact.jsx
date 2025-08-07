import { useParams } from "react-router-dom"
import React from "react"
function Contact () {
    let {id,name    } = useParams()
    return(
        <>
        <h1>this is Conatact --{id} and {name}</h1>
        
        </>
    )
}
export default Contact