import useFireworks from '@/hooks/use-fireworks'
import { Text3D, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface Props {
  content: string
  position: [number, number, number]
}

export default function Content({ content, position }: Props) {
  const visible = useRef(false)
  const createRandomFirework = useFireworks()
  const scroll = useScroll()
  const lastScrollOffset = useRef(0)

  useFrame(() => {
    // Get current scroll progress (0 to 1)
    const scrollOffset = scroll.offset

    // Detect when crossing the threshold between pages
    if (content === 'Frontend' && scrollOffset < 0.5 && lastScrollOffset.current >= 0.5) {
      createRandomFirework()
    }
    else if (content === 'Backend' && scrollOffset >= 0.5 && lastScrollOffset.current < 0.5) {
      createRandomFirework()
    }

    lastScrollOffset.current = scrollOffset
  })

  const ref = useRef(null!)
  const { height } = useThree(state => state.viewport)

  useFrame((_, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta,
    )
  })

  return (
    <group
      position={position}
      rotation={[-0.25, -0.25, 0]}
    >
      {/* <Float> */}
      <Text3D
        ref={ref}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.012}
        bevelThickness={0.02}
        // lineHeight
        // letterSpacing
        height={0.025}
        size={0.15}
        font="/fonts/inter-bold.json"
      >
        {content}
        <meshNormalMaterial />
      </Text3D>
      {/* </Float> */}
    </group>
  )
}
