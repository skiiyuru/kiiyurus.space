import { Decal } from '@react-three/drei'
import { useControls } from 'leva'

export default function Sticker({ url, ...props }) {
  const { debug } = useControls({ debug: false })
  // const tool = useTexture(url)

  return (
    <Decal debug={debug} {...props}>
      <meshPhysicalMaterial
        transparent
        polygonOffset
        polygonOffsetFactor={-10}
        // map={tool}
        map-flipY={false}
        map-anisotropy={16}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
        roughness={1}
        clearcoat={0.5}
        metalness={0.75}
        toneMapped={false}
      />
    </Decal>
  )
}
