import { Outlet,Link } from "react-router-dom"

function Layout(){
    return(
        <>

        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </nav>

        <Outlet/>

        <footer>
            <h1>This is footer</h1>
            <h1>This is datails</h1>
            <h1>This is information</h1>
        </footer>
        
        </>
    )
}
export default Layout