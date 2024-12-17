import { Link, Outlet } from "react-router-dom"
function Navbar()

{
    return(
        
        <>
        <header>
            <nav>
                <h1>Logo</h1>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/About">About</Link></li>
            <li><Link to = "/Service">Service</Link></li>
            <li><Link to = "/Contact">Contact</Link></li>
        </ul>
        </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
        <div>
            <h1>Quick Links</h1>
             <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              color: "black",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
          </ul>

        </div>

        </footer>
        </>
    )
}
export default Navbar