import { Link, NavLink } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'
import { SegmentedControl } from './ui/segmented-control'
import type { Lang } from '../data/types'

export function SiteHeader() {
  const { lang, setLang, copy } = useLocale()

  const nav = [
    { to: '/#projects', label: copy.nav.projects },
    { to: '/#experience', label: copy.nav.experience },
    { to: '/#skills', label: copy.nav.skills },
    { to: '/#repos', label: copy.nav.repos },
    { to: '/#contact', label: copy.nav.contact },
  ]

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={copy.nav.home}>
          <span className="site-header__mark">XYF</span>
          <span className="site-header__name">{lang === 'zh' ? '薛一飞' : 'Allen Xue'}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className="site-header__link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__lang">
          <SegmentedControl<Lang>
            aria-label={lang === 'zh' ? '语言' : 'Language'}
            size="sm"
            value={lang}
            onChange={setLang}
            options={[
              { value: 'zh', label: '中文' },
              { value: 'en', label: 'EN' },
            ]}
          />
        </div>
      </div>
    </header>
  )
}
