import { experience } from '../data'
import { useLocale } from '../i18n/LocaleContext'

export function Experience() {
  const { lang, copy, pick } = useLocale()

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="section-head">
        <h2 id="experience-title">{copy.experience.title}</h2>
        <p>{copy.experience.subtitle}</p>
      </div>

      <ol className="timeline">
        {experience.map((job, index) => {
          const highlights = lang === 'zh' ? job.highlights_zh : job.highlights_en
          return (
            <li key={job.id} className="timeline__item">
              <div className="timeline__rail" aria-hidden>
                <span className="timeline__dot" />
                {index < experience.length - 1 && <span className="timeline__line" />}
              </div>
              <div className="timeline__body">
                <div className="timeline__head">
                  <h3>{pick(job, 'company_zh', 'company_en')}</h3>
                  <time dateTime={job.period}>{job.period}</time>
                </div>
                <p className="timeline__role">{pick(job, 'role_zh', 'role_en')}</p>
                <ul className="timeline__highlights">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
