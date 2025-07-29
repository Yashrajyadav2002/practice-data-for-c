import { Child3 } from "./Components/Child3";
import Child1 from "./Components/Child1";
import { Child2 } from "./Components/Child2";
import { Child4 } from "./Components/Child4";

function App (){
  let info = {
    name:"yash",
    city:"bhopal",
    contact:12345,
    address:"banglore city",
    password:35154755

  }
  return(

    <>
    <h1>This is the app </h1>
    <Child1 name="Data" age={23} city="jaipur"/>
    <Child2 Contact={12345} City="indore"/>
    <Child3 userinfo ={info} />
    <Child4 userinfo1 = {{...info}} />
    </>
  )
}
export default App