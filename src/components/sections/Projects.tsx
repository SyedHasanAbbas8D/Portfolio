"use client"

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as Dialog from '@radix-ui/react-dialog'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'E-commerce Demo',
    description: 'A demo ecommerce website homepage.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Gsap', 'Three.js', 'HeroUI'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with 3D animations and interactive elements.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Three.js', 'GSAP'],
    link: '#'
  },
  {
    title: 'Grading Calculator',
    description: 'A grade calculator app.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Tailwind CSS'],
    link: '#'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
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
          // markers: true,
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  {/* Add actual project images later */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 transition-colors group-hover:text-purple-500 duration-300">
                    Project Image
                  </div>
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm transition-colors duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog.Root open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4">
            {selectedProject && (
              <>
                <Dialog.Title className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </Dialog.Title>
                <div className="relative h-64 bg-gray-200 dark:bg-gray-600 rounded-lg mb-6">
                  {/* Add actual project images later */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}