import { FaBitcoin, FaChess } from "react-icons/fa";
const Child1 = (props)=>{
    return(
        <>
        <h1>Welcome</h1><FaBitcoin color="gold" fontSize={150} />
        <FaChess color="blue"  fontSize={100} />
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h3>{props.city}</h3>
        
        </>
    )
}
export default Child1