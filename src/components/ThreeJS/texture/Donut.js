import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/donut.gltf')
  return (
    <group scale={25} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.04, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.donut} />
          </group>
          <group position={[0, 0.04, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.icing} />
          </group>
          <group position={[0.08, 0.08, 0.01]} rotation={[1.45, 0.07, 3.01]} scale={0.14}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.sprinkles_bake} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/donut.gltf')
