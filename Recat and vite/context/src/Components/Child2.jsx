import { useContext } from "react"
import { store } from "../App"
 const Child2 = ()=>{
    // let name = useContext(store)

    let user = useContext(store)
    return(
        <>
        {/* <h1>This is child2 = {name}</h1> */}
        {/* <store.Consumer>
         {

            (data)=><h1>{data}</h1>

         }
        </store.Consumer> */}


        <h1> this is dashboard = {user.name}</h1>
        
        </>
    )
}
export default Child2