import "./Web.css";
import { GiChickenLeg } from "react-icons/gi";
export default function App() {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Buscar..." 
                className="search-bar-inside"
            />
            <button className="search-bar-button"><GiChickenLeg /></button>
        </div>
    );
  }
