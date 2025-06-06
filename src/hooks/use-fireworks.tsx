import fragment_shader from '@/shaders/firework/fragment.glsl'
import vertex_shader from '@/shaders/firework/vertex.glsl'
import { useLoader, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import * as THREE from 'three'

export type CreateFireWork = (
  count: number,
  position: THREE.Vector3,
  size: number,
  texture: THREE.Texture,
  radius: number,
  color: THREE.Color
) => void

export default function useFireworks() {
  // Get the size of the canvas so that we can resize the points
  const {
    scene,
    size: { width, height },
  } = useThree()

  // Load the particle textures
  const textures = useLoader(THREE.TextureLoader, [
    '/textures/particles/1.png',
    '/textures/particles/2.png',
    '/textures/particles/3.png',
    '/textures/particles/4.png',
    '/textures/particles/5.png',
    '/textures/particles/6.png',
  ])

  const createFirework: CreateFireWork = (
    count,
    position,
    size,
    texture,
    radius,
    color,
  ) => {
    const vertex_positions = new Float32Array(count * 3)
    const vertex_sizes = new Float32Array(count)
    const time_multipliers = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Index for every 3rd position in the array
      const i3 = i * 3

      // Create a position that references a sphere shape
      const spherical_position = new THREE.Spherical(
        radius * (0.75 + Math.random() * 0.25),
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
      )

      const position = new THREE.Vector3()
      position.setFromSpherical(spherical_position)

      vertex_positions[i3] = position.x
      vertex_positions[i3 + 1] = position.y
      vertex_positions[i3 + 2] = position.z

      vertex_sizes[i] = Math.random() + 0.2 // made them slightly larger
      time_multipliers[i] = 1 + Math.random()
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertex_positions, 3),
    )
    geometry.setAttribute('a_size', new THREE.BufferAttribute(vertex_sizes, 1))
    geometry.setAttribute(
      'a_time_multiplier',
      new THREE.BufferAttribute(time_multipliers, 1),
    )

    // ThreeJS by default flips textures upside down, disable this
    texture.flipY = false

    const material = new THREE.ShaderMaterial({
      vertexShader: vertex_shader,
      fragmentShader: fragment_shader,
      uniforms: {
        u_size: new THREE.Uniform(size),
        u_resolution: new THREE.Uniform(new THREE.Vector2(width, height)),
        u_texture: new THREE.Uniform(texture),
        u_color: new THREE.Uniform(color),
        u_progress: new THREE.Uniform(0),
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    // Create firework object
    const firework = new THREE.Points(geometry, material)
    firework.position.copy(position)
    scene.add(firework)

    // Destroy firework helper
    function destroy() {
      scene.remove(firework)
      geometry.dispose()
      material.dispose()
    }

    // Animate
    gsap.to(material.uniforms.u_progress, {
      value: 1,
      duration: 3,
      ease: 'linear',
      onComplete: destroy,
    })
  }

  const createRandomFirework = () => {
    const count = 400 + Math.floor(Math.random() * 1000)
    // const position = new THREE.Vector3(
    //   (Math.random() - 0.5) * 2,
    //   Math.random(),
    //   (Math.random() - 0.5) * 2,
    // )
    const position = new THREE.Vector3(0, 0, 0)
    // const size = 0.1 + Math.random() * 0.1
    const size = 0.1 + 0.5 * 0.1
    const texture = textures[Math.floor(Math.random() * textures.length)]
    // const radius = 0.5 + Math.random()
    const radius = 1.4
    const color = new THREE.Color()
    color.setHSL(Math.random(), 1, 0.7)

    createFirework(count, position, size, texture, radius, color)
  }

  return createRandomFirework
}
