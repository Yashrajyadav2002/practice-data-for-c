import { useContext } from "react";
import { store } from "../App";


 function Child3 (){

    let user = useContext(store)
    return(
        <>
        <h1>this is setting file = {user.email}</h1>
        <h1>this setting file = {user.password}</h1>
        
        </>
    )
 }
 export default Child3