import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import InstagramCTA from '@/components/sections/InstagramCTA'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      {/* <Testimonials /> */}
      {/* <InstagramCTA /> */}
      <Contact />
    </main>
  )
}
