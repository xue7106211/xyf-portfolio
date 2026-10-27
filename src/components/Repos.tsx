import { repos } from '../data'
import { useLocale } from '../i18n/LocaleContext'

function formatDate(iso: string, lang: 'zh' | 'en') {
  try {
    return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso.slice(0, 10)
  }
}

export function Repos() {
  const { lang, copy } = useLocale()

  return (
    <section id="repos" className="repos" aria-labelledby="repos-title">
      <div className="section-head">
        <h2 id="repos-title">{copy.repos.title}</h2>
        <p>{copy.repos.subtitle}</p>
      </div>
      <ul className="repos__grid">
        {repos.map((repo) => (
          <li key={repo.name}>
            <a className="repo-card" href={repo.url} target="_blank" rel="noreferrer">
              <div className="repo-card__top">
                <h3>{repo.name}</h3>
                {repo.language ? <span className="repo-card__lang">{repo.language}</span> : null}
              </div>
              {repo.description ? <p>{repo.description}</p> : null}
              <p className="repo-card__updated">
                {copy.repos.updated} {formatDate(repo.updated, lang)}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
