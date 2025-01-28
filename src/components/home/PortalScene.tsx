import {
  Center,
  OrbitControls,
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei"
import portalVS from "@/shaders/portal/vertex.glsl"
import portalFS from "@/shaders/portal/fragment.glsl"
import * as THREE from "three"
import { extend, useFrame, type Object3DNode } from "@react-three/fiber"
import { useRef } from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      portalMaterial: Object3DNode<THREE.ShaderMaterial, typeof PortalMaterial>
    }
  }
}

const BG_COLOUR = "#18181b"
const PORTAL_COLOUR = "#A8DBEE"

// custom portal shader
const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color(BG_COLOUR),
    uColorEnd: new THREE.Color(PORTAL_COLOUR),
  },
  portalVS,
  portalFS
)

// make our custom shader available as a tag in r3f
extend({ PortalMaterial })

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb")
  const bakedTexture = useTexture("./model/baked.jpg")
  bakedTexture.flipY = false

  const portalRef = useRef(null!)

  useFrame((state, delta) => {
    portalRef.current.uTime += delta
  })

  return (
    <>
      {/* Background color */}
      <color args={[BG_COLOUR]} attach={"background"} />

      <OrbitControls
        makeDefault
        enablePan={false}
        // minDistance={5}
        maxDistance={4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.4}
      />

      <Center>
        <mesh geometry={(nodes.baked as THREE.Mesh).geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={(nodes.poleLightA as THREE.Mesh).geometry}
          position={nodes.poleLightA.position}
          scale={[1.3, 1, 1]}
        >
          <meshBasicMaterial color={"#E5582A"} />
        </mesh>

        <mesh
          geometry={(nodes.poleLightB as THREE.Mesh).geometry}
          position={nodes.poleLightB.position}
          scale={[1.3, 1, 1]}
        >
          <meshBasicMaterial color={"#E5582A"} />
        </mesh>

        <mesh
          geometry={(nodes.portalLight as THREE.Mesh).geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <portalMaterial ref={portalRef} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
          noise={[0.5, 0, 0.5]}
        />
      </Center>
    </>
  )
}
