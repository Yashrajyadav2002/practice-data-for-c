import { useState } from "react"
function Clickfile (){
     let [flag,setFlag]=useState(true)
    return (
        <>
        <h1>This is click file</h1>
        <h1 style={{display:flag?"block":"none"}}>Hello</h1>
            <button onClick={()=>setFlag(!flag)}>{flag?"Hide":"Show"}</button>
        
        </>
    )
}
export default Clickfile