export type Lang = 'zh' | 'en'

export type Profile = {
  name_zh: string
  name_en: string
  alias: string[]
  tagline_zh: string
  tagline_en: string
  bio_zh: string
  bio_en: string
  positioning_zh: string
  positioning_en: string
  links: { label: string; url: string }[]
  current_role_zh: string
  current_role_en: string
  current_period: string
}

export type Experience = {
  id: string
  company_zh: string
  company_en: string
  role_zh: string
  role_en: string
  period: string
  highlights_zh: string[]
  highlights_en: string[]
}

export type Project = {
  slug: string
  title_zh: string
  title_en: string
  summary_zh: string
  summary_en: string
  role: string
  tags: string[]
  metrics: string[]
  links: { label: string; url: string }[]
  status: 'shipped' | 'idea'
  confidentiality: string | null
}

export type Repo = {
  name: string
  description: string
  language: string
  url: string
  updated: string
}

export type Metric = {
  value: number
  suffix: string
  label_zh: string
  label_en: string
  source: string
  decimals?: number
}

export type Company = { name: string }
