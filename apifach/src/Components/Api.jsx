import axios from "axios"
import { useEffect, useState } from "react"
const Api=()=>{
    let [apidata,setapidata]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>setapidata(res.data))
    },[])
    return(
        <>
        <h1>Api file</h1>
        <table border='2'>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>URL</th>
            </tr>
            {
                apidata.map((e)=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.url}</td>
                    </tr>
                )
            }

        </table>

        </>
    )

}
export default Api