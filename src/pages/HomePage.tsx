import { AiWorkflow } from '../components/AiWorkflow'
import { Companies } from '../components/Companies'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { MetricsStrip } from '../components/MetricsStrip'
import { Projects } from '../components/Projects'
import { Repos } from '../components/Repos'
import { Skills } from '../components/Skills'
import { profile } from '../data'
import { useLocale } from '../i18n/LocaleContext'

function AboutStrip() {
  const { pick } = useLocale()
  return (
    <section className="about-strip" aria-label="About">
      <p>{pick(profile, 'bio_zh', 'bio_en')}</p>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="page-stack">
        <AboutStrip />
        <MetricsStrip />
        <Companies />
        <Projects />
        <AiWorkflow />
        <Experience />
        <Skills />
        <Repos />
        <Contact />
      </div>
    </>
  )
}
