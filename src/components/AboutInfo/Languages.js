import React from 'react'
import '../../Styles/Aboutme.css'
import Language from '../../img/AboutIMG/Language.gif'


export const Languages = () => {
  return (
    <div className="languageAlign">

      <img className='imagen1 imagenAbout' src={Language} width="350px" alt="Language" />
      <h1 className='lenguaje1'>Lenguajes</h1>

      <div className='lenguajesCentrado'>

        <h1 className='lenguaje2'>Lenguajes</h1>

        <div className='languagesBox'>

          <img className='languageIcon' alt='PHP' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          <img className='languageIcon' alt='HTML5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img className='languageIcon' alt='CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img className='languageIcon' alt='SASS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <img className='languageIcon' alt='LARAVEL' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
          <img className='languageIcon' alt='REACT' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img className='languageIcon' alt='JAVASCRIPT' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img className='languageIcon' alt='BOOTSTRAP' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
          <img className='languageIcon' alt='MYSQL' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          <img className='languageIcon' alt='CANVA' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />
          <img className='languageIcon' alt='PHOTOSHOP' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
          <img className='languageIcon' alt='JQUERY' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />

        </div>
      </div>

    </div>
  )
}
