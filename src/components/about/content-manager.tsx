import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import Content from './content'

export default function ContentManager() {
  const { height: h } = useThree(state => state.viewport)
  const offset = h * 0.25

  return (
    <Scroll>
      <Content content="Frontend" position={[0, 0 + offset, 0]} />
      <Content content="Backend" position={[0, -h + offset, 0]} />
    </Scroll>
  )
}
