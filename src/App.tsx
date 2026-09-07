import Header from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { About } from './components/About'
import { Process } from './components/Process'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative">
      {/* Fixed grain overlay */}
      <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
           }}
      />

      <Header />

      <main>
        <Hero />
        <Features />
        <Process />
        <Services />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App