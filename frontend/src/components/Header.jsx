import logo from '../assets/img/Recipe.PNG'; 
import Navbar from './Navbar';
import "./Web.css";
import { IoIosLogIn } from "react-icons/io";
import SearchBar from './SearchBar'

export default function Header() {
    return (
      <header> 
        
        <figure>
          
          <div className='logo'> 
          <a  href="/"><img src={logo} alt="Logo Recipe Book	" className='w-100' /></a>
          <SearchBar/> 
          <a href="/login">Login</a>
          <a href="/register">Register</a>
            
          </div>

          <Navbar/> 
        </figure>
      </header>
    );
  }