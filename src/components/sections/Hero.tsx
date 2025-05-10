"use client"

import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <meshStandardMaterial
        color="#4B0082"
        wireframe
        transparent
        opacity={0.5}
      />
    </Sphere>
  )
}

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 2,
        text: "Hi, I'm a Web Developer",
        ease: "power2.out",
      })
    }

    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
      
      <div ref={containerRef} className="relative z-10 text-center px-4">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, I'm a Web Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Crafting modern web experiences with cutting-edge technologies
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          View My Work
        </button>
      </div>
    </section>
  )
} 