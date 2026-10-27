import type { Lang } from '../data/types'

export const copy = {
  zh: {
    nav: {
      projects: '作品',
      experience: '经历',
      skills: '技能',
      repos: '开源',
      contact: '联系',
      home: '首页',
    },
    hero: {
      available: '现任',
      ctaProjects: '查看作品',
      ctaGithub: 'GitHub',
      ctaSite: 'xyf.design',
    },
    metrics: {
      title: '公开指标',
      note: '仅展示可公开追溯的数字',
    },
    companies: {
      title: '曾效力于',
    },
    projects: {
      title: '精选作品',
      subtitle: '设计系统、设计工程与 AI 工作流',
      all: '全部',
      filter: '筛选',
      view: '查看详情',
      role: '角色',
      metrics: '指标',
      links: '链接',
      back: '返回作品',
      empty: '该分类暂无作品',
      tags: '标签',
    },
    experience: {
      title: '经历',
      subtitle: '从实习到设计系统与设计工程',
    },
    skills: {
      title: '技能',
      subtitle: '设计系统 · 工程化 · AI 辅助交付',
    },
    repos: {
      title: 'GitHub 精选',
      subtitle: 'portfolio_worthy 公开仓库',
      updated: '更新于',
    },
    contact: {
      title: '联系',
      subtitle: '欢迎招聘经理与设计系统同行交流',
    },
    footer: {
      built: '内容源自 Notion / GitHub 公开材料，不虚构事实。',
      affectui: 'UI 组件基于 affectUI 免费开源组件。',
    },
    aiWorkflow: {
      title: 'AI 工作流示意',
      subtitle: '用 Agent 工具调用风格呈现设计工程流水线（示意，非内部实现）',
    },
  },
  en: {
    nav: {
      projects: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      repos: 'Open Source',
      contact: 'Contact',
      home: 'Home',
    },
    hero: {
      available: 'Currently',
      ctaProjects: 'Selected work',
      ctaGithub: 'GitHub',
      ctaSite: 'xyf.design',
    },
    metrics: {
      title: 'Public metrics',
      note: 'Only numbers traced to public sources',
    },
    companies: {
      title: 'Where I’ve worked',
    },
    projects: {
      title: 'Selected work',
      subtitle: 'Design systems, design engineering, AI workflows',
      all: 'All',
      filter: 'Filter',
      view: 'View project',
      role: 'Role',
      metrics: 'Metrics',
      links: 'Links',
      back: 'Back to work',
      empty: 'No projects in this category',
      tags: 'Tags',
    },
    experience: {
      title: 'Experience',
      subtitle: 'From internships to design systems & engineering',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Design systems · Engineering · AI-assisted delivery',
    },
    repos: {
      title: 'Selected GitHub repos',
      subtitle: 'Public repos flagged portfolio_worthy',
      updated: 'Updated',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Hiring managers and design-system peers welcome',
    },
    footer: {
      built: 'Facts traced to Notion / public GitHub — nothing invented.',
      affectui: 'UI built with free affectUI open-source components.',
    },
    aiWorkflow: {
      title: 'AI workflow sketch',
      subtitle: 'Design-engineering pipeline in a tool-call style (illustrative, not internal systems)',
    },
  },
} as const

export type Copy = (typeof copy)[Lang]

export function t(lang: Lang): Copy {
  return copy[lang]
}
