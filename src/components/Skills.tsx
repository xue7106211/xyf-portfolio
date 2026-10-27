import { skills } from '../data'
import { useLocale } from '../i18n/LocaleContext'

export function Skills() {
  const { copy } = useLocale()

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="section-head">
        <h2 id="skills-title">{copy.skills.title}</h2>
        <p>{copy.skills.subtitle}</p>
      </div>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
