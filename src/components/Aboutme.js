import React, {useState} from 'react'
import {About} from '../components/AboutInfo/About'
import {Languages} from '../components/AboutInfo/Languages'
import {Skills} from '../components/AboutInfo/Skills'
import '../Styles/Aboutme.css'


export const Aboutme = () => {

    const [estado, setestado] = useState(1)
   
    return (
        <div className="about">
            <h1>Acerca de mi</h1>


            <nav className="nav">

                

                <p className="nav-link active onClick"
                 aria-current="page"   
                  onClick={()=>setestado(1)}
                  >
                    Acerca de mi
                   </p>
                
                <p className="nav-link onClick"
                 onClick={()=>setestado(2)}>
                    Habilidades
                    </p>
                
                <p className="nav-link onClick"
                 onClick={()=>setestado(3)}>
                    Lenguajes
                    </p>
            </nav>

            <div id='info'>

                {estado === 1 ? <About/>
                 : estado === 2 ? <Skills/>
                  : <Languages/> }

            </div>

        </div>
    )
}
