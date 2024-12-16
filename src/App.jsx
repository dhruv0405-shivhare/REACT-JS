import Home from "./Home"
import About from "./About"
import {Routes , Route} from "react-router-dom"
import Service from "./service"
import Contact from "./Contact"
import Navbar from "./Navbar"

function App()
{
    return(
        <>
        
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/service" element={<Service/>}/>
            <Route path = "/contact" element={<Contact/>}/>

        </Routes>
        <Navbar/>
        </>
    )
}
export default App