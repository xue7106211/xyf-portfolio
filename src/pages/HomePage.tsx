import { AiWorkflow } from '../components/AiWorkflow'
import { Companies } from '../components/Companies'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { MetricsStrip } from '../components/MetricsStrip'
import { Projects } from '../components/Projects'
import { Repos } from '../components/Repos'
import { Skills } from '../components/Skills'

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="page-stack">
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
