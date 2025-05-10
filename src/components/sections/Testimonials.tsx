"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Store Owner',
    content: 'Working with this developer was an absolute pleasure. They delivered a beautiful, functional e-commerce site that has significantly increased our online sales.',
    avatar: '/avatars/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    content: 'The attention to detail and technical expertise shown in our project was outstanding. The website not only looks great but performs exceptionally well.',
    avatar: '/avatars/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Our new website has transformed our online presence. The developer understood our needs perfectly and delivered beyond our expectations.',
    avatar: '/avatars/emily.jpg'
  }
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

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
          toggleActions: "play none none reverse"
        }
      })
    }

    if (carouselRef.current) {
      const cards = carouselRef.current.children
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: carouselRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => `+=${carouselRef.current?.offsetWidth || 0}`,
        }
      })
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-8"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mr-4">
                        {/* Add actual avatar images later */}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors"
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 