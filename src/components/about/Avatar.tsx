import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

const url = './model/avatar-3.glb'

export default function Avatar() {
  const ref = useRef(null!)

  const scroll = useScroll()

  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, scene)

  useFrame(() => {
    ref.current.rotation.y = 0.5 + Math.PI * scroll.offset
  })

  useEffect(() => {
    let action
    if (ref.current) {
      action = actions.idle
      action.reset().fadeIn(0.1).play()
    }

    return () => {
      action.fadeOut(0.5)
    }
  }, [actions.idle])

  return (
    <primitive
      ref={ref}
      object={scene}
      rotation-y={Math.PI}
      position-y={-1.3}
    />
  )
}

useGLTF.preload(url)
