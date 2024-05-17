import { Link } from "react-router-dom";
export default function Navbar() {
    return (
    <nav> 
        <section className="nav-bar">
            <ul className="ul">
                <li>
                  <Link to= "/recetas"> 
                    Recetas
                  </Link>
                </li>
                <li> 
                  <Link to= "/contactos">
                    Contactos 
                  </Link>
                </li>
              
            </ul>
           
        </section>
    </nav>
        );
}