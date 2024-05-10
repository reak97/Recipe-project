import { Routes, Route } from 'react-router-dom';
import Recetas from "./Content/Recetas";

export default function ContentWrap(){
    return(
        <main>

       
           <Routes> 
              <Route path="/recetas" element={<Recetas/>}/> 
              <Route path="/*" element={<p>404 - página no encontrada</p>}/> 
            </Routes> 
        

        </main>
        
    )
}