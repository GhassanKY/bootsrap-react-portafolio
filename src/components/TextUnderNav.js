import React from 'react'
import '../Styles/TextUnderNav.css'
import { Moon } from './ThreeJS/Moon'

export const TextUnderNav = () => {
    return (
        <div className="boxText">

            <div >
                <h2>Hola, Soy <font color="red">Ghassan</font> El Khoury</h2>
                <h3>Full Stack Developer</h3>


                <span className="boxIcon">

                    <div><a href='https://github.com/GhassanKY'><i className="fa-brands fa-github fa-2x iconMove iconBox1"></i></a></div>

                    <div><a href='https://www.linkedin.com/in/ghassanelkhoury'><i className="fa-brands fa-linkedin-in fa-2x iconMove iconBox2"></i></a></div>

                </span>

            </div>

            <Moon />




        </div>
    )
}
