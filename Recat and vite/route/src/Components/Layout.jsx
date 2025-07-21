import { Outlet,Link } from "react-router-dom"

function Layout(){
    return(
        <>

        <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">Wondercars.Com</div>
                   <ul className="flex space-x-6">
                     <li><Link to='/' className="hover:text-gray-200 transition">Home</Link></li>
                     <li><Link to='/about'  className="hover:text-gray-200 transition" >About</Link></li>
                     <li><Link to='/cart'  className="hover:text-gray-200 transition ">Cart</Link></li>
                   </ul>
            </div>
        </nav>

        <Outlet/>

         <footer className="bg-gray-800 text-white py-6">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm"> 2025 Wondercars.Com. All rights reserved.</p>
                    <ul className="flex space-x-6 mt-4 md:mt-0">
                       <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
                       <li><Link to="/about" className="hover:text-gray-200 transition">About</Link></li>
                       <li><Link to="/services" className="hover:text-gray-200 transition">Services</Link></li>
                       <li><Link to="/contact" className="hover:text-gray-200 transition">Contact</Link></li>
                    </ul>
                </div>
         </footer>

        </>
    )
}
export default Layout