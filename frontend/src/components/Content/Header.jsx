import logo from '../../assets/img/Recipe.PNG'; 
import "./Web.css";
export default function Menu() {
    return (
      <header>
        <figure>
          <div className='logo'>
            <img src={logo} alt="Logo Recipe Book	" className='w-50'/>
          </div>
        </figure>
      </header>
    );
  }