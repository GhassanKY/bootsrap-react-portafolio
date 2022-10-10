import React, { useState } from 'react'
import '../Styles/Portfolio.css'
import { Proyects } from '../components/Portafolio/Proyects'
import { ThreeDProyect } from '../components/Portafolio/ThreeDProyect'


export const Portfolio = () => {

    const [state, setstate] = useState(0)


    return (

        <div>

            {state === 1 ?

            <div>
                <i onClick={() => setstate(0)} className="fa-solid fa-arrow-left fa-2x atras"></i>
               <Proyects />  
            </div>
             

             : state === 2 ?
             <div>
                <i onClick={() => setstate(0)} className="fa-solid fa-arrow-left fa-2x atras"></i>
                <ThreeDProyect />
            </div>
               :

                <div className='ProjectBox'>

                    <div className='Project'>
                        <div>
                            <h2>Proyectos</h2>
                            <button onClick={() => setstate(1)}>Ver trabajos</button>
                        </div>
                    </div>

                    <div className='ThreeDProject'>
                        <div>
                            <h2>Proyectos 3D</h2>
                            <button onClick={() => setstate(2)}>Ver trabajos</button>
                        </div>

                    </div>

                </div>

            }






        </div>
    )
}
