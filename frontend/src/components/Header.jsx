import logo from '../assets/img/Recipe.PNG'; 
import Navbar from './Navbar';
import "./Web.css";
export default function Header() {
    return (
      <header> 
        
        <figure>
          
          <div className='logo'> 
          <a  href="/"><img src={logo} alt="Logo Recipe Book	" className='w-100' /></a>
            
          </div>

          <Navbar/>
        </figure>
      </header>
    );
  }