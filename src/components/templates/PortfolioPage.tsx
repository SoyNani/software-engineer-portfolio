import HudFrame from '@/components/organisms/HudFrame'
import HeroSection from '@/components/organisms/HeroSection'
import MissionSection from '@/components/organisms/MissionSection'
import ExperienceSection from '@/components/organisms/ExperienceSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import CertificatesSection from '@/components/organisms/CertificatesSection'
import ContactSection from '@/components/organisms/ContactSection'
import Footer from '@/components/organisms/Footer'
import PageDivider from '@/components/molecules/PageDivider'

export default function PortfolioPage() {
  return (
    <>
      <HudFrame />

      <div className="content-scroll">
        <div className="page-shell">
          <HeroSection />
          <PageDivider />
          <MissionSection />
          <PageDivider />
          <ExperienceSection />
          <PageDivider />
          <ProjectsSection />
          <PageDivider />
          <CertificatesSection />
          <PageDivider />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  )
}
