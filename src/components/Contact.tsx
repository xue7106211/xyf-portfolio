import { profile } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { Button } from './ui/button'

export function Contact() {
  const { copy } = useLocale()

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="section-head">
        <h2 id="contact-title">{copy.contact.title}</h2>
        <p>{copy.contact.subtitle}</p>
      </div>
      <ul className="contact__links">
        {profile.links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                {link.label}
              </Button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
