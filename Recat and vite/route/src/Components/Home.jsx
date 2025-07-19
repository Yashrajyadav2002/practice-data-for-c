import {Link} from "react-router-dom"

function Home(){
    return(
        <>
        <h1>This is Home page</h1>
        <ul>
            <li> <Link to="/About">About </Link></li>
        </ul>
        
        
        </>
    )
}
export default Home