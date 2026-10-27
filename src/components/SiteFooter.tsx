import { useLocale } from '../i18n/LocaleContext'

export function SiteFooter() {
  const { copy } = useLocale()
  return (
    <footer className="site-footer">
      <p>{copy.footer.built}</p>
      <p>{copy.footer.affectui}</p>
      <p className="site-footer__credit">© {new Date().getFullYear()} 薛一飞 / Allen Xue</p>
    </footer>
  )
}
