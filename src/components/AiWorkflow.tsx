import { useLocale } from '../i18n/LocaleContext'
import { ToolCallCard, ToolCallGroup } from './ui/tool-call-card'

/**
 * Illustrative tool-call cards for AI-workflow projects (allen-skills / Figma MCP).
 * Content is high-level only — no internal Xiaomi endpoints or Feishu links.
 */
export function AiWorkflow() {
  const { lang, copy } = useLocale()
  const zh = lang === 'zh'

  return (
    <section className="ai-workflow" aria-labelledby="ai-workflow-title">
      <div className="section-head">
        <h2 id="ai-workflow-title">{copy.aiWorkflow.title}</h2>
        <p>{copy.aiWorkflow.subtitle}</p>
      </div>

      <div className="ai-workflow__panel">
        <ToolCallGroup
          label={zh ? '已使用 3 个工具' : 'Used 3 tools'}
          runningLabel={zh ? '正在调用工具…' : 'Calling tools…'}
          duration={4200}
          defaultOpen
        >
          <ToolCallCard
            name="figma_mcp.read_variables"
            summary={
              zh
                ? '读取 Figma 变量与组件规格（公开叙事级）'
                : 'Read Figma variables & component specs (public narrative level)'
            }
            status="success"
            duration={1100}
            args={{ file: 'HyperOS components', focus: ['variables', 'components'] }}
            result={{ tokens_sampled: 'OS4 public set', note: 'demo only' }}
          />
          <ToolCallCard
            name="agent.adapt_layout"
            summary={
              zh
                ? '手机稿适配 Fold / Pad（allen-skills 多端 Skill）'
                : 'Adapt phone mock to Fold / Pad (allen-skills multi-device skill)'
            }
            status="success"
            duration={1800}
            args={{ from: 'phone', to: ['fold', 'pad'] }}
            result={{ mapping: 'component map + layout QA', status: 'accepted' }}
          />
          <ToolCallCard
            name="docs.compile_markdown"
            summary={
              zh
                ? '组件规格编译为 Markdown（ds-to-md / 自动化理解）'
                : 'Compile component specs to Markdown (ds-to-md / automation)'
            }
            status="success"
            duration={1300}
            args={{ source: 'Figma components', target: 'markdown specs' }}
            result={{ artifacts: ['spec.md'], confidentiality: 'high-level only' }}
          />
        </ToolCallGroup>
      </div>
    </section>
  )
}
