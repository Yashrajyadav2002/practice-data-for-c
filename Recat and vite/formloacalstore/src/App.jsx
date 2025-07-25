import { Routes ,Route} from "react-router-dom"
import { Localfrm } from "./Components/Localfrm2"
import Localshow from "./Components/Localshow"

// import { Localfrm } from "./Components/Localform"
function App (){
  return(
    <>
    {/* <Localfrm/> */}
    <Routes>
      <Route index element={<Localfrm />}/>
      <Route path='/localshow' element={<Localshow/>}/> 
    </Routes>
    </>
  ) 
}
export default App