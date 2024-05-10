import logo from '../assets/img/Recipe.PNG'; 
import Navbar from './Navbar';
import "./Web.css";
export default function Header() {
    return (
      <header> 
        <Navbar/>
        <figure>
          <div className='logo'>
            <img src={logo} alt="Logo Recipe Book	" className='w-50'/>
          </div>
        </figure>
      </header>
    );
  }