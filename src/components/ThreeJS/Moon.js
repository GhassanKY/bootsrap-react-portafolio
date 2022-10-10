import React from 'react'
import './texture/Moon.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { Luna } from './texture/Luna'
import { Model } from './texture/Donut'

export const Moon = () => {


  return (
    <div>

      <Canvas className='Luna'>
            <OrbitControls enableZoom={false} />
            <Luna/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={5} />
        </Canvas> 

        <Canvas className='Donut'>
            <OrbitControls enableZoom={false} />
            <Model/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 1, 2]} intensity={2} />
        </Canvas>

    </div>
  )
}
