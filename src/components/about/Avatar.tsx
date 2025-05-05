import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

const url = './model/avatar-magic.glb'

export default function Avatar() {
  const ref = useRef(null!)

  const scroll = useScroll()
  const [{ width }, { width: pixelWidth }] = useThree(state => [state.viewport, state.size])

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
        position={[pixelWidth > 1000 ? -0.7 : -0.25, -1, 0]}
        scale={Math.max(0.9, width * 0.4)}
      />

    </>
  )
}

useGLTF.preload(url)
