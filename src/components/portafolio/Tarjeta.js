import React from 'react';
import './Tarjeta.css'



function Tarjeta(){
    return(
  <div className='tarjeta-container'>
    <div className='card'>
    <div  id='card1'>
    <img  className='front' src='../img/perrunos.png' alt="foto"/>
    <div className="inner">
          <h>Pagina Perrunos</h>
          <label for="card1" className="button" aria-hidden="true">
            Código
          </label>
          <label for="card1" className="button" aria-hidden="true">
            web
        </label>
        </div>
      </div>
    </div>
    <div className='card'>
    <div  id='card2'>
    <img  className='front' src='../img/foto3.jpeg' alt="foto"/>
    <div className="inner">
          <h>Cozy apartment</h>
          <label for="card2" class="button" aria-hidden="true">
            Código
          </label>
          <label for="card2" className="button" aria-hidden="true">
            Web
        </label>
        </div>
      </div>
    </div>
    <div className='card'>
    <div  id='card3'>
    <img  className='front' src='../img/foto3.jpeg' alt="foto"/>
    <div className="inner">
          <h>Cozy apartment</h>
          <label for="card3" className="button" aria-hidden="true">
            Código
          </label>
          <label for="card3" className="button" aria-hidden="true">
            Web
        </label>
        </div>
      </div>
    </div>
    <div className='card'>
    <div  id='card4'>
    <img className='front' src='../img/foto3.jpeg' alt="foto"/>
    <div className="inner">
          <h>Cozy apartment</h>
          <label for="card4" className="button" aria-hidden="true">
            Código
          </label>
          <label for="card4" className="button" aria-hidden="true">
            Web
        </label>
        </div>
      </div>
    </div>
    </div>
  
);
}

export default Tarjeta;