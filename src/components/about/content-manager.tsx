import { AboutContext } from '@/store/about-context'
import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { use } from 'react'
import Content from './content'

export default function ContentManager() {
  const [{ height: h }, { height: pixelHeight, width: pixelWidth }] = useThree(state => [state.viewport, state.size])

  // Position content ~1/3 from the top of the viewport for optimal viewing
  const offset = h * 0.34

  const { sections, tools } = use(AboutContext)

  return (
    <>
      <Scroll>
        {sections.map((section, idx) => (
          <Content
            key={section.data.title}
            content={section.data}
            position={[0, (-h * idx) + offset, 0]}
          />
        ))}
      </Scroll>
      <Scroll html>
        <section
          className="grid grid-cols-2"
          style={{
            width: `${pixelWidth}px`,
            height: `${pixelHeight}px`,
          }}
        >
          <div className={`
            col-start-2 m-auto  
            sm:grid sm:grid-cols-2 sm:gap-x-10 gap-y-2 sm:text-xl
            md:my-auto
            lg:grid-cols-3 lg:text-2xl
            `}
          >
            {tools.filter(tool => tool.data.isFilter).map(tool => <p key={tool.id}>{tool.data.title}</p>)}
          </div>
        </section>
      </Scroll>
    </>
  )
}
