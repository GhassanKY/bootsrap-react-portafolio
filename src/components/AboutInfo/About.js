import React from 'react'
import '../../Styles/Aboutme.css'
import Imagen from '../../img/AboutIMG/About.gif'

export const About = () => {
  return (
    <div className="aboutBox">
      <hr />

      <img className='imagenAbout' src={Imagen} width="350px" alt="Tecnologia" />

      <div className="textBox">
        <h1>Soy un joven apasionado por las nuevas tecnologias</h1>
        <p className='aboutText'>Me gusta todo aquello que tiene que ver con crear, programar, ponerme nuevos
          retos para saber hasta donde soy capaz, lo que me ha hecho aprender muchas cosas,
          diseño, fotografia, programacion, entre otras muchas
        </p>
      </div>

    </div>
  )
}
