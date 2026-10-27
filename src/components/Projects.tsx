import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectFilterOptions, projects } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { TiltCard } from './TiltCard'
import { SegmentedControl } from './ui/segmented-control'

export function Projects() {
  const { lang, copy, pick } = useLocale()
  const [filter, setFilter] = useState('all')

  const options = useMemo(() => {
    const all = projectFilterOptions(lang)
    // Keep filter bar readable: all + top tags
    const top = all.filter((o) => o.value === 'all' || (o.count ?? 0) >= 2).slice(0, 7)
    return top.map((o) => ({
      value: o.value,
      label: o.label,
      count: o.count,
    }))
  }, [lang])

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title">{copy.projects.title}</h2>
        <p>{copy.projects.subtitle}</p>
      </div>

      <div className="projects__filters">
        <SegmentedControl
          aria-label={copy.projects.filter}
          size="sm"
          value={options.some((o) => o.value === filter) ? filter : 'all'}
          onChange={setFilter}
          options={options}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="projects__empty">{copy.projects.empty}</p>
      ) : (
        <ul className="projects__grid">
          {filtered.map((p) => (
            <li key={p.slug}>
              <TiltCard className="project-card">
                <div className="project-card__meta">
                  <span className="project-card__role">{p.role}</span>
                  <ul className="project-card__tags" aria-label={copy.projects.tags}>
                    {p.tags.slice(0, 3).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <h3 className="project-card__title">
                  <Link to={`/project/${p.slug}`}>{pick(p, 'title_zh', 'title_en')}</Link>
                </h3>
                <p className="project-card__summary">{pick(p, 'summary_zh', 'summary_en')}</p>
                {p.metrics.length > 0 && (
                  <ul className="project-card__metrics">
                    {p.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                )}
                <Link className="project-card__cta" to={`/project/${p.slug}`}>
                  {copy.projects.view} →
                </Link>
              </TiltCard>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
