import { useState } from "react"

function Form (){
    let [value,setValue] = useState("")
    let [age,setage] = useState("")
    let [contact,setcontact] = useState("")
    let [email,setemail] = useState("")
    let [pass,setpass] = useState("")
    let [address,setaddress] = useState("")
    function handleinput(e){
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return(
        <>
        <h1>this is form page</h1>
        <form action="" align="center">
            <label htmlFor="">Name</label>
            <input type="text" onChange={handleinput} /> <br /> <br />

            <label htmlFor="">Age</label>
            <input type="number" onChange={(e)=>setage(e.target.value)} /> <br /> <br />

            <label htmlFor="">Contact</label>
            <input type="number" onChange={(e)=>setcontact(e.target.value)} /> <br /> <br />

            <label htmlFor="">Email</label>
            <input type="email" onChange={(e)=>setemail(e.target.value)} /> <br /> <br />

            <label htmlFor="">pass</label>
            <input type="number" onChange={(e)=>setpass(e.target.value)} /> <br /> <br />

            <label htmlFor="">Address</label>
            <input type="text" onChange={(e)=>setaddress(e.target.value)} /> <br />

            <input type="submit" />
        </form>
        <h1>{value}</h1>
        <h1>{age}</h1>
        <h1>{contact}</h1>
        <h1>{email}</h1>
        <h1>{pass}</h1>
        <h1>{address}</h1>
        
        </>
    )
}
export default Form