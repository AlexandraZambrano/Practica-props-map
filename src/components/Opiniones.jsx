import React from 'react'
import './opiniones.css'
import Opinion from '../json/data.json'

export function Opiniones(props) {
return (
<div className='contenedor-opiniones'>

  <img className='imagen-opiniones' src={require(`../images/opinion-${props.imagen}.png`)} alt='Foto de Emma' />

  <div className='contenedor-texto-opiniones'>
    <p className='nombre-pais-opiniones'><strong>{props.nombre}</strong> en {props.pais}</p>
    <p className='cargo-opiniones'>{props.cargo} en <strong>{props.empresa}</strong></p>
    <p className='texto-opiniones'>"{props.opiniones}"</p>
  </div>

</div>
)
}

export function Opiniones2() {
  return (
  <>

    {
      Opinion.map(int =>{
        return(
      <div className='contenedor-opiniones' key={int.nombre}>

        <img className='imagen-opiniones' src={require(`../images/opinion-${int.img}.png`)} alt='Foto de Emma' />
      
        <div className='contenedor-texto-opiniones'>
          <p className='nombre-pais-opiniones'><strong>{int.nombre}</strong> en {int.pais}</p>
          <p className='cargo-opiniones'>{int.cargo} en <strong>{int.empresa}</strong></p>
          <p className='texto-opiniones'>"{int.opiniones}"</p>
        </div>

      </div>

        )

      })
  
    }

  </>
  )
  }