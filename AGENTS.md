# AGENTS.md — code workspace

Codex and Claude Code both read this file. The Next.js application lives under [`web/`](web/) and has its own `AGENTS.md` for runtime-specific notes.

## Skills

When asked to deploy this app to Vercel — or to troubleshoot a failed Vercel deploy — follow the runbook at [`docs/skills/deploy-to-vercel.md`](docs/skills/deploy-to-vercel.md). It is the in-repo mirror of the Claude Code skill `deploy-to-vercel` (at `~/.claude/skills/deploy-to-vercel/SKILL.md`). Standing rule: **always deploy to production** (`vercel --prod`), never preview, unless the user explicitly says otherwise.

## Live state

- Production: https://intellibid.vercel.app
- Custom domain (planned): https://intellibid.app
- Vercel project: `saurav-gangulys-projects-21f7c4b1/intellibid`
- GitHub repo: https://github.com/Saurav-Ganguly/intellibid.app
