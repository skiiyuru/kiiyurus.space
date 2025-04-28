import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const url = './model/wambui-animated.glb'

export default function Wambui() {
  const ref = useRef<THREE.Group>(null!)
  const lastScrollOffset = useRef(0)

  const scroll = useScroll()

  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, ref)

  // useEffect(() => void (actions.spin.reset().play().paused = true), [actions.spin])
  // useFrame(() => {
  //   actions.spin.time = actions.spin.getClip().duration * scroll.offset
  // },
  // )

  useFrame(() => {
    const scrollOffset = scroll.offset

    if (scrollOffset >= 0.5 && lastScrollOffset.current < 0.5) {
      const action = actions.spin
      if (action) {
        action
          .reset()
          .setLoop(THREE.LoopOnce, 1)
          .fadeIn(0.5)
          .play()

        action.clampWhenFinished = true
      }
    }

    lastScrollOffset.current = scrollOffset
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      rotation-y={-Math.PI * 0.12}
      position={[0.7, -1.35, 0]}
    />
  )
}

useGLTF.preload(url)
