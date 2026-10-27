import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang } from '../data/types'
import { t, type Copy } from './copy'

type LocaleContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  copy: Copy
  pick: <T extends Record<string, unknown>>(obj: T, keyZh: keyof T, keyEn: keyof T) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'xyf-portfolio-lang'

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh' || saved === 'en') return saved
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('zh')

  useEffect(() => {
    setLangState(readInitialLang())
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const value = useMemo<LocaleContextValue>(
    () => ({
      lang,
      setLang,
      copy: t(lang),
      pick: (obj, keyZh, keyEn) => String(lang === 'zh' ? obj[keyZh] : obj[keyEn] ?? ''),
    }),
    [lang, setLang],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
