import { Routes, Route } from 'react-router-dom';
import Recetas from "./Content/Recetas"; 
import Contactos from "./Content/Contactos"; 
import Main from './Main';

export default function ContentWrap(){
    return(
        <main>

       
           <Routes> 
              <Route path="/recetas" element={<Recetas/>}/>  
              <Route path="/contactos" element={<Contactos/>}/> 
              <Route path='/' element={<Main/>}/> 
           </Routes> 
            

        

        </main>
        
    )
}