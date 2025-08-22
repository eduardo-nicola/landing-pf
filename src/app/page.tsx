import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { DemoSection } from '@/components/sections/DemoSection'
import { InstallationSection } from '@/components/sections/InstallationSection'
import { OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <InstallationSection />
        <OpenSourceSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
