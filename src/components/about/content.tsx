import type { AboutSection, Tools } from '@/lib/types'
import useFireworks from '@/hooks/use-fireworks'
import { Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Box, Flex } from '@react-three/flex'
import { useRef } from 'react'
import Wambui from './wambui'

interface Props {
  content: AboutSection
  tools: Tools
  position: [number, number, number]
}

const descriptionProps = {
  font: '/fonts/ibm-plex-mono-400.woff',
  color: 0xFFFCE1,
}
const titleProps = {
  font: '/fonts/fusion-pixel.woff',
  color: 0xFFFCE1,
}

export default function Content({ content, position, tools }: Props) {
  const createRandomFirework = useFireworks()
  const scroll = useScroll()
  const [{ width }, { width: pixelWidth }] = useThree(state => [state.viewport, state.size])

  const lastScrollOffset = useRef(0)
  const scale = Math.min(1, width / 16)
  const descriptionSize = Math.max(scale * 0.3, 0.027)
  const titleSize = scale * 2

  useFrame(() => {
    const scrollOffset = scroll.offset
    if (content.slug === 'skills' && scrollOffset < 0.5 && lastScrollOffset.current >= 0.5) {
      createRandomFirework()
    }
    else if (content.slug === 'family' && scrollOffset >= 0.5 && lastScrollOffset.current < 0.5) {
      createRandomFirework()
    }

    lastScrollOffset.current = scrollOffset
  })

  return (
    <group position={position}>
      <group>
        <Flex dir="column" position={[0, pixelWidth > 1000 ? 0.1 : 0.2, 0]}>
          <Box>
            <Text {...titleProps} fontSize={titleSize}>{content.title}</Text>
          </Box>
          <Box marginTop={pixelWidth > 1000 ? -0.05 : 0.02}>
            <Text {...descriptionProps} fontSize={descriptionSize} maxWidth={pixelWidth > 1000 ? width * 0.5 : width * 0.75} textAlign="center">{content.description}</Text>
          </Box>
        </Flex>
        <Flex
          dir="row"
          position={[0.01, pixelWidth > 1000 ? -0.25 : -0.1, 0]}
          size={[width / 2, width / 2, 0]}
          flexWrap="wrap"
        >
          {content.slug === 'skills' && tools.filter(tool => tool.data.isFilter).map(tool => (
            <Box key={tool.id} marginRight={0.1} marginTop={0.1} centerAnchor>
              <Text outlineOpacity={0} {...descriptionProps} fontSize={descriptionSize}>{tool.data.title}</Text>
            </Box>
          ))}
        </Flex>
        {content.slug === 'family' && <Wambui />}
      </group>
    </group>
  )
}
