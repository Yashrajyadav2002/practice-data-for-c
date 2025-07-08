import Child1 from "./Components/Child1";
import { Child2 } from "./Components/Child2";

function App (){
  return(

    <>
    <h1>This is the app </h1>
    <Child1 name="Data" age={23} city="jaipur"/>
    <Child2 Contact={12345} City="indore"/>
    </>
  )
}
export default App