import companiesJson from './companies.json'
import experienceJson from './experience.json'
import metricsJson from './metrics.json'
import profileJson from './profile.json'
import projectsJson from './projects.json'
import reposJson from './repos.json'
import skillsJson from './skills.json'
import type { Company, Experience, Metric, Profile, Project, Repo } from './types'

export const profile = profileJson as Profile
export const experience = experienceJson as Experience[]
export const projects = projectsJson as Project[]
export const skills = skillsJson as string[]
export const repos = reposJson as Repo[]
export const metrics = metricsJson as Metric[]
export const companies = companiesJson as Company[]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Tag buckets used by the project filter — derived only from project tags. */
export function projectFilterOptions(lang: 'zh' | 'en') {
  const counts = new Map<string, number>()
  for (const p of projects) {
    for (const tag of p.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  const allLabel = lang === 'zh' ? '全部' : 'All'
  return [
    { value: 'all', label: allLabel, count: projects.length },
    ...[...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ value: tag, label: tag, count })),
  ]
}
