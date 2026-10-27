import { metrics } from '../data'
import { useLocale } from '../i18n/LocaleContext'
import { NumberTicker } from './ui/number-ticker'

export function MetricsStrip() {
  const { lang, copy } = useLocale()

  return (
    <section className="metrics" aria-labelledby="metrics-title">
      <div className="section-head">
        <h2 id="metrics-title">{copy.metrics.title}</h2>
        <p>{copy.metrics.note}</p>
      </div>
      <ul className="metrics__grid">
        {metrics.map((m) => (
          <li key={m.label_en} className="metrics__item">
            <div className="metrics__value">
              <NumberTicker
                value={m.value}
                format={
                  m.decimals != null
                    ? { minimumFractionDigits: m.decimals, maximumFractionDigits: m.decimals }
                    : { maximumFractionDigits: 0 }
                }
                locale={lang === 'zh' ? 'zh-CN' : 'en-US'}
              />
              <span className="metrics__suffix">{m.suffix}</span>
            </div>
            <p className="metrics__label">{lang === 'zh' ? m.label_zh : m.label_en}</p>
            <p className="metrics__source">{m.source}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
