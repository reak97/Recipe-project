import plato1 from '../assets/img/Plato1.png'; 
import plato2 from '../assets/img/Plato2.webp'; 
import plato3 from '../assets/img/Plato3.webp';
import plato4 from '../assets/img/Plato4.webp';  

export default  function Main (){ 
    return(
    <main className='img-home-flex'> 
        <section className='box'>
            <div>
                <img src={plato1} alt="Plato1" className='img-home'/>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={plato2} alt="Plato2" className='img-home'/>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={plato3} alt="Plato1" className='img-home'/>
            </div>
        </section>
        <section className='box'>
            <div>
                <img src={plato4} alt="Plato1" className='img-home'/>
            </div>
        </section>
    </main>
    )
    
};