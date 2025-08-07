import { useParams } from "react-router-dom"
import React from "react"
function Home () {
    let {id,name} = useParams()
    return(
        <>
        <h1>this is Home --{id} and {name} </h1>
        
        </>
    )
}
export default Home