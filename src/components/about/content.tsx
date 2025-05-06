import type { AboutSection } from '@/lib/types'
import useFireworks from '@/hooks/use-fireworks'
import { Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import Wambui from './wambui'

interface Props {
  content: AboutSection
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

export default function Content({ content, position }: Props) {
  const createRandomFirework = useFireworks()
  const scroll = useScroll()
  const [{ width }, { width: pixelWidth }] = useThree(state => [state.viewport, state.size])

  const lastScrollOffset = useRef(0)
  const scale = Math.min(1, width / 16)
  const descriptionSize = Math.max(scale * 0.3, 0.033)
  const titleSize = scale * 2

  const largeScreen = pixelWidth > 1000
  const SCROLL_THRESHOLD = 0.5
  const isSkillsSection = content.slug === 'skills'
  const isFamilySection = content.slug === 'family'
  let spacing = -0.27
  if (!largeScreen) {
    if (isSkillsSection) {
      spacing = -0.15
    }
    else {
      spacing = -0.18
    }
  }

  useFrame(() => {
    const scrollOffset = scroll.offset
    if (isSkillsSection && scrollOffset < SCROLL_THRESHOLD && lastScrollOffset.current >= SCROLL_THRESHOLD) {
      createRandomFirework()
    }
    else if (isFamilySection && scrollOffset >= SCROLL_THRESHOLD && lastScrollOffset.current < SCROLL_THRESHOLD) {
      createRandomFirework()
    }

    lastScrollOffset.current = scrollOffset
  })

  return (
    <group position={position}>
      <group position={[0, largeScreen ? 0.1 : 0.2, 0]}>
        <Text {...titleProps} fontSize={titleSize}>{content.title}</Text>
        <group position-y={spacing}>
          <Text {...descriptionProps} fontSize={descriptionSize} maxWidth={largeScreen ? width * 0.5 : width * 0.75} textAlign="center">{content.description}</Text>
        </group>
      </group>
      {isFamilySection && <Wambui />}
    </group>
  )
}
