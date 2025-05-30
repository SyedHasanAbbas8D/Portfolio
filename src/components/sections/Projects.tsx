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
    image: '/Screenshot(15).jpg',
    technologies: ['Next.js', 'Gsap', 'Three.js', 'HeroUI'],
    link: 'https://hasanabbasdemo.netlify.app'
  },
  {
    title: 'Grading Calculator',
    description: 'A grade calculator app.',
    image: '/Screenshot(16).jpg',
    technologies: ['React', 'Tailwind CSS'],
    link: 'https://hasanabbas8d.github.io/Grading-app/'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer p-6"
                style={{ minHeight: 420 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 bg-gray-200 dark:bg-gray-600 overflow-hidden mb-4 rounded-xl flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-base transition-colors duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800"
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
                <div className="relative h-64 bg-gray-200 dark:bg-gray-600 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
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