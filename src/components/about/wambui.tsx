import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const url = './model/wambui-animated.glb'

export default function Wambui() {
  const ref = useRef<THREE.Group>(null!)
  const lastScrollOffset = useRef(0)
  const scroll = useScroll()

  const [{ width }, { width: pixelWidth }] = useThree(state => [state.viewport, state.size])

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
      if (!actions.spin) {
        console.warn('Wambui GLB missing spin animation')
        return
      }

      const spin_action = actions.spin
      spin_action
        .reset()
        .setLoop(THREE.LoopOnce, 1)
        .fadeIn(0.5)
        .play()

      spin_action.clampWhenFinished = true
    }

    lastScrollOffset.current = scrollOffset
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      rotation-y={-Math.PI * 0.12}
      position={[pixelWidth > 1000 ? 0.7 : 0.25, -1.6, 0]}
      scale={Math.max(0.9, width * 0.4)}
    />
  )
}

useGLTF.preload(url)
