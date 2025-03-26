import { Environment, Loader, ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import Avatar from './Avatar'

export default function Scene() {
  return (
    <>
      {/* <Perf /> */}
      {/* <OrbitControls
        minDistance={2}
        maxDistance={2.5}
        enablePan={false}
        enableDamping
        makeDefault
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <Suspense fallback={null}>
        <ScrollControls damping={0.1} maxSpeed={0.5} pages={2}>
          <Avatar />
        </ScrollControls>
      </Suspense>

      <Environment
        preset="studio"
        environmentIntensity={0.6}
        environmentRotation={[0, -Math.PI * 0.1, 0]}
      />

      <Loader />
    </>
  )
}
