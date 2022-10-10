import React from 'react'
import '../../Styles/Portfolio.css'
import ThreeDP from './ThreeDProyect.json'

export const ThreeDProyect = () => {

   const Proyect = ThreeDP.map((JSON) =>

  <div className='divInfo' key={JSON.id}>

        <img className='imgProyect' width="300px" src={JSON.imagen} alt="imagen" />

        <a href={JSON.links}>
          <h1 className='pInfo'> {JSON.titulo} </h1>
          <p className='pInfo'> {JSON.about} </p>
        </a>

      </div>

); 

  return (
    <div className='alignResponsive'>

      {Proyect}

    </div>
  )
}
