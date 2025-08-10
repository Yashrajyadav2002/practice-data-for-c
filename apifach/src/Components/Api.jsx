import axios from "axios"
import { useEffect, useState } from "react"
const Api=()=>{
    let [apidata,setApidata]=useState([])
    let [showfrm,setShowfrm]=useState([])
    let [editdata,setEditdata]=useState({})

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata').then((res)=>console.log(setApidata(res.data)))
    },[])

    function handledelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(()=>alert("Deleted..!!!"))
    }

    function handleedit(e){
        const{name,value}=e.target
        setEditdata({...editdata,[name]:value})
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata').then((res)=>setApidata(res.data))
    },[handledelete])
    return(
        <>
        <h1>Api file</h1>
        <table border='2'>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>age</th>
                <th>contact</th>
                <th>address</th>
                <th>Password</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {
                apidata.map((e)=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.address}</td>
                        <td>{e.Password}</td>
                        <td><button onClick={()=>handledelete(e.id)}>delete</button></td>
                        <td><button onClick={()=>(setShowfrm(true),setEditdata(e))}>edit</button></td>
                    </tr>
                )
            }

        </table>

        <hr />
        {showfrm && <form action ="">
            <label htmlFor="">id</label>
            <input type="text" value={editdata.id} onChange={handleedit} /><br /><br />

            <label htmlFor="">name</label>
            <input type="text" value={editdata.name} onChange={handleedit} /><br /><br />

            <label htmlFor="">age</label>
            <input type="text" value={editdata.age} onChange={handleedit} /><br /><br />

            <label htmlFor="">contact</label>
            <input type="text" value={editdata.contact} onChange={handleedit} /><br /><br />

            <label htmlFor=""><address></address></label>
            <input type="text" value={editdata.address} onChange={handleedit} /><br /><br />

            <input type="submit" />
            </form>}

        </>
    )

}
export default Api