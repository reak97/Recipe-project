import plato1 from '../assets/img/Plato1.png'; 
import plato2 from '../assets/img/Plato2.webp'; 
import sopa from '../assets/img/sopa.jpeg';
import panes from '../assets/img/Panes.jpg';  

export default  function Main (){ 
    return(
    <main className='img-home-flex'> 
        <section className='box'>
            <div>
                <img src={plato1} alt="Plato1" className='img-home'/>
                <p>Proteínas</p>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={plato2} alt="Plato2" className='img-home'/>
                <p>Vegetales</p>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={sopa} alt="Plato1" className='img-home'/>
                <p>Sopas</p>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={panes} alt="Plato1" className='img-home'/>
                <p>Panes</p>
            </div>
        </section>
    </main>
    )
    
};