import { Link } from 'react-router-dom'
import { profile } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { Button } from './ui/button'
import { GridBackground } from './ui/grid-background'
import { TextReveal } from './ui/text-reveal'
import { GradientText } from './GradientText'

export function Hero() {
  const { lang, copy, pick } = useLocale()
  const name = pick(profile, 'name_zh', 'name_en')
  const positioning = pick(profile, 'positioning_zh', 'positioning_en')
  const role = pick(profile, 'current_role_zh', 'current_role_en')

  return (
    <section className="hero" aria-labelledby="hero-name">
      <GridBackground className="hero__grid" size={40} speed={8} fade={78} color="rgba(18,20,26,0.06)">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__dot" aria-hidden />
            {copy.hero.available} · {role} · {profile.current_period}
          </p>

          <h1 id="hero-name" className="hero__name">
            <GradientText as="span">{name}</GradientText>
          </h1>

          <TextReveal
            as="p"
            className="hero__positioning"
            text={positioning}
            by="word"
            stagger={28}
            duration={650}
          />

          <div className="hero__actions">
            <Link to="/#projects">
              <Button variant="primary" size="lg">
                {copy.hero.ctaProjects}
              </Button>
            </Link>
            <a href="https://github.com/xue7106211" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                {copy.hero.ctaGithub}
              </Button>
            </a>
            <a href="https://xyf.design" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="lg">
                {copy.hero.ctaSite}
              </Button>
            </a>
          </div>

          <p className="hero__bio">{pick(profile, 'bio_zh', 'bio_en')}</p>
          <p className="hero__aka sr-only">
            {lang === 'zh' ? '又名' : 'Also known as'} {profile.alias.join(' / ')}
          </p>
        </div>
      </GridBackground>
    </section>
  )
}
