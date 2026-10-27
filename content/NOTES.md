# Portfolio content assembly notes

Assembled: 2026-10-27 (Asia/Shanghai)  
Policy: every fact traced to a source; Chinese prefers source wording; English is faithful translation; empty / flagged rather than invented.

## Deliverables

| File | Path |
|------|------|
| Structured content | `/workspace/portfolio-content/content.json` |
| These notes | `/workspace/portfolio-content/NOTES.md` |

Counts in `content.json`:

- `profile`: 1
- `experience`: 6 employers/roles
- `projects`: 17
- `skills`: 9 (high-level list)
- `github_repos`: 88 public (of which 25 marked `portfolio_worthy`)
- `awards`: 1 (iF 2019, lightly sourced)

---

## Sources used

### Notion (namespace `user-Notion`, read-only)

Hub and career narrative:

| Page | URL |
|------|-----|
| 职业 | https://app.notion.com/p/3f655e17a9b4817e86f4ec2a6b5c8eed |
| 职业叙事 | https://app.notion.com/p/3b255e17a9b480a6b4b4d471fa1365be |
| 履历 | https://app.notion.com/p/3f655e17a9b481fda4cbe2d556d2068a |
| 作品与复盘 (DB) | https://app.notion.com/p/559b5ac0ab1441cd98585208ad5af453 |
| 个人说明书 | https://app.notion.com/p/d50a21dea67a4e668d5e0e992c253b8f |
| 叙事认同 | https://app.notion.com/p/40355e17a9b4811ebab6e589766e489d |
| 自我介绍 | https://app.notion.com/p/6926c236b4e74443b09158f3b004dba7 |
| 设计系统工程化分享 | https://app.notion.com/p/21955e17a9b48079bea7cd1b911526ff |

Employer / project pages:

| Page | URL |
|------|-----|
| Xiaomi hub | https://app.notion.com/p/3bb55e17a9b480b88c71d548099f76c7 |
| ByteDance hub | https://app.notion.com/p/1369713fbc29405184809d4580be6cd5 |
| Kuaishou Design (hub under 履历) | Found via Notion search under 履历; primary metrics from child page below |
| Kuaishou Design System* | https://app.notion.com/p/1c025fe11b604e22805d34ad1bad4bef |
| DesignOps | https://app.notion.com/p/09cbad9d… (DesignOps under Kuaishou) |
| Universe Design System | https://app.notion.com/p/cd63df6aa8ce4a5781d68d30cf2c89f5 |
| UD 官网相关 | https://app.notion.com/p/58ab7aed847b4ad2a23800f9accec340 |
| 飞书任务 | https://app.notion.com/p/7d05778f5e2a42da836fabb12e64683c |
| 飞书 5.0 / IG | https://app.notion.com/p/2be9ac10d5b94fb2a6a9930c0357f57d |
| Design Thinking Workshop | https://app.notion.com/p/0bf5639cf0af4acd9aee90798b0379c0 |
| 飞书 Design for iPadOS | https://app.notion.com/p/c7417559276449d09991b03b31c03bf8 |
| Lotus Service Design | https://app.notion.com/p/99a6bce8e4ed4f418a9929770d0235de |
| IBM Internship | https://app.notion.com/p/c6a16b11d86c48098a96336a93594281 |
| Microsoft Internship | https://app.notion.com/p/1ba7a33b32404033b77a437b2c5fa2af |
| ChatGPT Intelligent UI (idea) | https://app.notion.com/p/3f455e17a9b4814d8395c0142230fcfb |

### Public web

| Source | URL | Use |
|--------|-----|-----|
| Personal site (Framer) | https://xyf.design | Bio, Baidu/Kuaishou/ByteDance timeline, role blurbs |
| MSR Text-to-Viz | https://www.microsoft.com/en-us/research/project/text-to-viz/ | Related public research link only |
| HyperOS Token live | https://hyperostoken.netlify.app/ | Linked from 职业叙事 |
| HyperOS Popover live | https://hyperos-popover.netlify.app/ | Linked from 职业叙事 |

### GitHub (`cursor-github`)

- User: https://github.com/xue7106211  
- Listing: `search_repositories` user:xue7106211 → 88 public repos (dump under `/workspace/agent-tools/ee3eb2f4-941b-47cb-9f7e-3e321e8fdc81.txt`)  
- Recent activity sampled via `list_commits` on `allen-skills` (latest 2026-10-27 vendor interface-bts) and commit search.

Portfolio-worthy repos (flagged in JSON): allen-skills, design-token-viewer, figma-token-organizer, hyperos-design-system, hyperos-visual, hyperos-design-guidline, hyperos-requirement-priority, hyperos-breakpoint, hyperos-popover, HyperBox, HyperDev, Hyper-Dev, FrameInfo, Figma-MCP-Test, Mi-Plugin, figma-remote-rename, ds-to-md-compiler, figma-to-guides, sync-repo-docs, design-clone, de-tools, auto_design_agent, design_token, designtoken, station-zero.

### Memory (context only; verified against Notion where possible)

Career path visual communication → interaction design; IBM/Microsoft internships; ByteDance Feishu; Kuaishou KID; Baidu MEUX; Xiaomi HyperOS design engineering. Used only as navigation hints; dates and metrics taken from Notion / xyf.design / GitHub.

---

## Uncertainties (do not invent)

1. **Current employer conflict**  
   - `xyf.design` and Notion「叙事认同」(edited ~2026-10-24) still say **currently at Baidu MEUX**.  
   - Notion「履历」「职业叙事」and GitHub HyperOS repos document **Xiaomi HyperOS design system & design engineering (2025–2026)**.  
   - `content.json` lists Xiaomi as most recent with period `2025–` and Baidu as `2023.06–` with end open. **Confirm with Allen before publishing “current role.”**

2. **Xiaomi start date**  
   Exact month/day not in Notion career pages. Only「设计系统&工程化（2025–2026）」. Period left as `2025–`.

3. **Kuaishou join year**  
   - 设计系统工程化分享 + xyf.design: **2022**.  
   - Kuaishou Design System* page: **「2021年秋天加入」**.  
   - Period in JSON: `2022–2023` with note. Prefer share/xyf unless Allen corrects.

4. **ByteDance end / Kuaishou start**  
   xyf.design: ByteDance 2019–2021; Kuaishou 2022–2023. If Kuaishou was 2021秋, ByteDance end shifts. Left as written per primary sources.

5. **Microsoft internship month**  
   Page DATE property: 2019年09月1日; body also says「2019年初」. Period stored as `2019`.

6. **个人说明书 outdated**  
   Still framed as Kuaishou-era. Not used as current-employer evidence.

7. **iF award ↔ Lotus**  
   自我介绍 mentions 2019 iF 服务设计奖; Lotus page does not claim the award. JSON awards entry notes this; project summary flags uncertainty.

8. **ChatGPT Intelligent UI**  
   Status in Notion: 想法 / 待启动. Included as personal idea project only—not shipped work.

9. **Email / contact**  
   Not put in profile links (GitHub emails appear in commits; not treated as public contact). Douban from 个人说明书.

10. **Kuaishou Design hub URL**  
    Fetched via search/title; if exact hub URL drifts, use child page `1c025fe1…` as primary.

---

## Confidentiality flags (excluded or high-level only)

| Item | Why | Action taken |
|------|-----|--------------|
| **OS5 Design Token 方案** page (Notion id prefix `3ff55e17…`, under Xiaomi hub) | Internal Xiaomi OS5 token mapping, mi.feishu.cn links, internal metrics/tables | **Not used in project body.** Only public OS4 “600+ tokens” + public Netlify URLs from 职业叙事. |
| HyperOSDesign bot / Mify / internal Feishu | Internal tooling names | Mentioned at narrative level only; no workflows, endpoints, or doc IDs. |
| Microsoft internship product details | Explicitly confidential / unpublished papers | High-level only + public Text-to-Viz link. |
| IBM internship product | Explicit NDA | High-level only. |
| Internal Xiaomi metrics beyond “600+ OS4 Token” | Not on public career narrative | Omitted. |
| mi.feishu.cn / internal design-system URLs | Corporate intranet | Omitted from `links`. |
| Performance ratings (M+, SpotBonus, 快手两次 A) | Personal HR-ish but already on 自我介绍 | Included as he wrote them; **confirm before public site**. |

If a field looked internal and was **not** on 职业叙事 / 履历 / public demos, it was left out.

---

## Translation notes

- Role titles keep Chinese terms where they are the source of truth (e.g. 主 R) and add English gloss.  
- Metrics kept as written (0.56%, 38+, 600+, MVP dates).  
- Company names: 飞书/Feishu/Lark both appear in sources; projects use Feishu with Lark when the page used Lark.

---

## Optional follow-ups (not blocking)

- Thin-fetch remaining 作品与复盘 cases (Widget、个人网站、更多飞书子页) if richer case studies are needed.  
- Ask Allen to sync xyf.design “current employer” with Xiaomi narrative.  
- Confirm whether performance ratings and iF award should appear on the public portfolio.
