import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { Button } from '../components/ui/button'

export function ProjectPage() {
  const { slug } = useParams()
  const { copy, pick } = useLocale()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/" replace />

  return (
    <article className="project-detail">
      <Link to="/#projects" className="project-detail__back">
        ← {copy.projects.back}
      </Link>

      <p className="project-detail__role">{project.role}</p>
      <h1>{pick(project, 'title_zh', 'title_en')}</h1>
      <p className="project-detail__summary">{pick(project, 'summary_zh', 'summary_en')}</p>

      <ul className="project-detail__tags" aria-label={copy.projects.tags}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.metrics.length > 0 && (
        <section aria-labelledby="project-metrics">
          <h2 id="project-metrics">{copy.projects.metrics}</h2>
          <ul className="project-detail__metrics">
            {project.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>
      )}

      {project.links.length > 0 && (
        <section aria-labelledby="project-links">
          <h2 id="project-links">{copy.projects.links}</h2>
          <ul className="project-detail__links">
            {project.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <Button variant="secondary">{link.label}</Button>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
