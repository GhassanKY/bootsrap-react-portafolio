import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three'
import imagen from '../../../img/texturaLuna.jpg'


export const Luna = () => {

    const colorMap = useLoader(TextureLoader, imagen)

  return (
    <mesh rotation={[90, 0, 20]}>
        <sphereBufferGeometry attach="geometry" args={[3]} />
        <meshStandardMaterial map={colorMap} />    
    </mesh>
  )
}
