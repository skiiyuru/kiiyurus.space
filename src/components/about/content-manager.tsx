import { about_sections } from '@/data/siteData'
import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import Content from './content'

export default function ContentManager() {
  const { height: h } = useThree(state => state.viewport)
  const offset = h * 0.34

  return (
    <Scroll>
      {about_sections.map((section, idx) => (
        <Content
          key={section.slug}
          content={section}
          position={[0, (-h * idx) + offset, 0]}
        />
      ))}
    </Scroll>
  )
}
