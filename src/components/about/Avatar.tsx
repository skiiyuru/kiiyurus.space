import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Fireworks from './Fireworks'

const url = './model/avatar-magic.glb'

export default function Avatar() {
  const ref = useRef(null!)

  const scroll = useScroll()

  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => void (actions.swing.reset().play().paused = true), [actions.swing])
  useFrame(() => (actions.swing.time = actions.swing.getClip().duration * scroll.offset))

  return (
    <>
      <primitive
        ref={ref}
        object={scene}
        rotation-y={Math.PI * 0.19}
        position={[-0.5, -1, 0]}
      />

      {ref.current && <Fireworks />}
    </>
  )
}

useGLTF.preload(url)
