import axios from "axios"
import { useEffect, useState } from "react"
const Api=()=>{
    let [apidata,setapidata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata').then((res)=>setapidata(res.data))
    },[])
    return(
        <>
        <h1>Api file</h1>
        <table border='2'>
            <tr>
                <th>ID</th>
                <th></th>
                <th>age</th>
                <th>contact</th>
                <th>address</th>
            </tr>
            {
                apidata.map((e)=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.address}</td>
                    </tr>
                )
            }

        </table>

        </>
    )

}
export default Api