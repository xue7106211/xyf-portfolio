# 薛一飞设计工程作品集

**状态：** 实验 · 未部署

正式站 [https://xyf.design](https://xyf.design) 在 Framer 上维护；本仓库是用代码重做的版本，用来展示设计工程能力。

Allen Xue（薛一飞）的个人作品集站点：面向招聘方与设计工程同行，展示 design systems / design engineering 相关作品与经历。

**定位：** 能写代码的设计师 — tokens、组件库、Figma 插件、design-to-code、以及 AI agent 工作流。

## 是什么 / 不是什么

| 是 | 不是 |
|----|------|
| 个人作品集（中英双语） | 设计系统或组件库产品本身 |
| 静态前端站点（Vite SPA） | 后端服务、CMS、或内容管理后台 |
| 公开可部署的展示页 | 内部工具、私有文档站 |
|  | 线上 xyf.design 的源码 |

事实与可发布范围以 `content/` 与 `src/data/` 为准，勿臆造履历或内部细节。

## 本地运行

需要 Node.js 20+。

```bash
npm install
npm run dev
```

浏览器打开 Vite 打印的地址（默认 `http://localhost:5173`）。

```bash
npm run build    # 类型检查 + 生产构建 → dist/
npm run preview  # 本地预览生产构建
npm run lint     # oxlint
```

## 技术栈

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- [affectUI](https://www.affectui.com/components) 免费组件（MIT，经 shadcn registry 安装）
- React Router（SPA）

## 内容与发布规则

源数据（勿编造事实）：

- `content/content.json` — 由 Notion + GitHub 汇总
- `content/NOTES.md` — 来源、不确定项、保密标记

站点可编辑数据（由源数据派生，并套用发布规则）：

- `src/data/profile.json`
- `src/data/experience.json`（已去掉绩效评级）
- `src/data/projects.json`
- `src/data/skills.json`
- `src/data/repos.json`（仅 `portfolio_worthy`）
- `src/data/metrics.json`
- `src/data/companies.json`

发布规则摘要：

- 当前角色：小米 HyperOS 设计系统 / 设计工程（`2025–`）
- 不展示绩效评级（M+、SpotBonus、快手 A 等）
- 快手周期：`2022–2023`
- 保密：实习 / 小米内部工具仅高阶描述；无内部飞书链接或 OS5 映射

## 部署（Cloudflare Pages）

| 项 | 值 |
|----|-----|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node | 20+ |

SPA 回退见 `public/_redirects`（会复制进 `dist`）：

```
/*    /index.html   200
```

## 链接

- 正式站（Framer）：https://xyf.design
- GitHub：https://github.com/xue7106211
