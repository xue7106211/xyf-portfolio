import { companies } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { LogoMarquee } from './logo-marquee'

function WordMark({ name }: { name: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '1.05rem',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  )
}

export function Companies() {
  const { copy } = useLocale()

  return (
    <section className="companies" aria-labelledby="companies-title">
      <div className="section-head section-head--row">
        <h2 id="companies-title">{copy.companies.title}</h2>
      </div>
      <LogoMarquee
        label={copy.companies.title}
        labels="beside"
        grayscale={false}
        speed={28}
        gap={48}
        logos={companies.map((c) => ({
          name: c.name,
          svg: <WordMark name={c.name} />,
        }))}
      />
    </section>
  )
}
