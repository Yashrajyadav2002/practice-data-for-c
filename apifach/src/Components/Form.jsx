import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Form(){
    let [frmdata,setfrmdata]=useState({})
    let nav = useNavigate()

    function handleinput(e){
        setfrmdata({...frmdata,[e.target.name]:e.target.value})
    }
    function finalsubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then(()=>alert("inserted..."))
        .catch((err)=>alert(err))

        nav("/apidata")
    }
    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handleinput} /> <br /><br />

            <label htmlFor="">age</label>
            <input type="text" name="age" onChange={handleinput} /> <br /><br />

            <label htmlFor="">contact</label>
            <input type="text" name="contact" onChange={handleinput} /> <br /><br />

            <label htmlFor="">address</label>
            <input type="text" name="address" onChange={handleinput} /> <br /><br />

            <input type="submit" />

            
        </form>

        
        </>
    )
}
export default Form