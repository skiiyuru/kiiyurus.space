import type { AboutSection } from '@/lib/types'
import useFireworks from '@/hooks/use-fireworks'
import { Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Box, Flex } from '@react-three/flex'
import { useRef } from 'react'
import * as THREE from 'three'
import Wambui from './wambui'

interface Props {
  content: AboutSection
  position: [number, number, number]
}

const descriptionProps = {
  font: '/fonts/ibm-plex-mono-400.woff',
  fontSize: 0.045,
}
const titleProps = {
  font: '/fonts/fusion-pixel.woff',
  fontSize: 0.3,
}

export default function Content({ content, position }: Props) {
  const visible = useRef(false)
  const createRandomFirework = useFireworks()
  const scroll = useScroll()
  const lastScrollOffset = useRef(0)

  const ref = useRef(null!)
  const [viewport] = useThree(state => [state.viewport])

  useFrame((_, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -viewport.height / 2 + 1,
      4,
      delta,
    )

    // Get current scroll progress (0 to 1)
    const scrollOffset = scroll.offset

    // Detect when crossing the threshold between pages
    if (content.slug === 'skills' && scrollOffset < 0.5 && lastScrollOffset.current >= 0.5) {
      createRandomFirework()
    }
    else if (content.slug === 'family' && scrollOffset >= 0.5 && lastScrollOffset.current < 0.5) {
      createRandomFirework()
    }

    lastScrollOffset.current = scrollOffset
  })

  return (
    <group
      position={position}
      // rotation={[-0.25, -0.25, 0]}
    >
      <group ref={ref}>
        <Flex dir="column">
          <Box>
            <Text {...titleProps}>{content.title}</Text>
          </Box>
          <Box marginTop={-0.05}>
            <Text {...descriptionProps} maxWidth={1.5} textAlign="center">{content.description}</Text>
          </Box>
        </Flex>
        <Flex
          dir="row"
          position={[0.1, -0.3, 0]}
          size={[1.1, 1.5, 0]}
          flexWrap="wrap"
        >
          {content.tools && content.tools.map(tool => (
            <Box key={tool} marginRight={0.1} marginTop={0.1} centerAnchor>
              <Text outlineOpacity={0} {...descriptionProps}>{tool}</Text>
            </Box>
          ))}
          {content.slug === 'family' && <Wambui />}
        </Flex>
      </group>
    </group>
  )
}
