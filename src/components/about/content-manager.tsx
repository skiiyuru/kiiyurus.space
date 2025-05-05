import { AboutContext } from '@/store/about-context'
import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { use } from 'react'
import Content from './content'

export default function ContentManager() {
  const { height: h } = useThree(state => state.viewport)
  const offset = h * 0.34

  const { sections, tools } = use(AboutContext)

  return (
    <Scroll>
      {sections.map((section, idx) => (
        <Content
          key={section.data.title}
          content={section.data}
          position={[0, (-h * idx) + offset, 0]}
          tools={tools}
        />
      ))}
    </Scroll>
  )
}
