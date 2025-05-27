"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: '🌐'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Online stores with secure payment processing and inventory management.',
    icon: '🛍️'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: '🎨'
  }
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Three.js',
  'GSAP',
  'MongoDB',
  'Express.js',
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          // markers: true ,
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm Hasan Abbas a passionate web developer with expertise in creating modern, 
                responsive, and user-friendly websites. With a strong foundation in 
                both frontend and backend development, with smooth Ui and Animations and 3D animations, I bring ideas to life through 
                clean code and innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white/70 dark:bg-gray-800/70 rounded-lg p-3"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-purple-600 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}