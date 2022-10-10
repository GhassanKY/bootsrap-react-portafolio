import React from 'react'
import '../../Styles/Aboutme.css'
import skillsLogo from '../../img/AboutIMG/Skills.gif'

export const Skills = () => {
  return (
    <div className="skillsAlign">


      <img className='imagenAbout' src={skillsLogo} width="350px" alt="Habilidades" />
      <h1 className='none'>Habilidades</h1>

      <div>
        <h1 className='habilidadesAlign'>Habilidades</h1>
        <div className='skillsBox'>
          <div className="skillsProgress">
            <h1>75%</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped width"
                role="progressbar"
                aria-label="Default striped example"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="textProgress">Habilidad de Comunicacion</p>
          </div>

          <div className="skillsProgress">
            <h1>85%</h1>
            <div class="progress">
              <div class="progress-bar progress-bar-striped bg-success width2"
                role="progressbar"
                aria-label="Success striped example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="textProgress">Habilidad Analitica</p>
          </div>

          <div className="skillsProgress">
            <h1>60%</h1>
            <div class="progress">
              <div class="progress-bar progress-bar-striped bg-info width3"
                role="progressbar"
                aria-label="Info striped example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="textProgress">Resolucion de problemas</p>
          </div>

          <div className="skillsProgress">
            <h1>80%</h1>
            <div class="progress">
              <div class="progress-bar progress-bar-striped bg-warning width4"
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p className="textProgress">Creatividad</p>
          </div>

        </div>
      </div>
    </div>
  )
}
