import { useState } from "react";

 export function Localfrm(){
    let[frmdata,setFrmdata] = useState({
        username:"" , email:"",password:""
    })
    let {showdata,setshowdata}= useState({})

    function takeinput(e){
        let {name,value}=e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        let show = JSON.parse(localStorage.getItem('userdata'))
        setshowdata(show)
    }
    return(
        <>
        <h1>This is sign up from</h1>

        <form  onSubmit={handlesubmit}>
            <label htmlFor="">username</label>
            <input type="text" name="username" onChange={takeinput} /> <br /> <br />

            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={takeinput} /> <br /> <br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={takeinput} /> <br /> <br />

            <input type="submit" />
        </form>

        <h1>username - {showdata.username}</h1>
        <h1>email - {showdata.email}</h1>
        <h1>password - {showdata.password}</h1>
        
        </>

        
    )
}