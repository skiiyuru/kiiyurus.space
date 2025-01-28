import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { type DirectionalLight, DirectionalLightHelper } from "three"
import { OrbitControls, useHelper } from "@react-three/drei"
import { Perf } from "r3f-perf"

export default function Experience() {
  return (
    <div
      className="experience bg-zinc-900 w-full h-96
      sm:h-full sm:grid-rows-subgrid sm:grid-cols-subgrid sm:col-span-1 sm:row-span-3
      md:row-start-4 md:row-span-2 md:h-full
      lg:row-start-1 lg:col-span-4 lg:row-span-7"
    >
      <Canvas
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 10],
        }}
        shadows
      >
        <Perf />

        <OrbitControls />

        <ambientLight intensity={1.5} />

        <directionalLight intensity={2.5} position={[2, 3, 5]} />

        <mesh>
          <torusKnotGeometry />
          <meshPhongMaterial flatShading />
        </mesh>
      </Canvas>
    </div>
  )
}
