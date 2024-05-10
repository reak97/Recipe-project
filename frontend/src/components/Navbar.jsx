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
                    Contactos
                </li>
                <li>
                    VideosXXX
                </li>
            </ul>
           
        </section>
    </nav>
        );
}