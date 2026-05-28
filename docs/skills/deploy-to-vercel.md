# Deploy a Next.js app to Vercel (production)

> **Standing rule:** always deploy directly to production (`vercel --prod`). Skip preview unless explicitly asked otherwise. This is the in-repo mirror of the Claude Code skill `deploy-to-vercel`. Codex reads this file when asked to deploy.

---

## 0. Preflight — verify state, don't assume

Run these BEFORE touching anything:

```powershell
vercel --version          # installed?
vercel whoami             # logged in?
```

Decision tree:
- **`vercel: command not found`** → `npm i -g vercel`, then retry.
- **`Error: The specified token is not valid`** → ask the user to run `vercel login` in their OWN terminal. The OAuth flow opens a browser — the agent cannot complete this. Wait for the user to confirm sign-in, then re-run `vercel whoami` to verify.
- **`<username>`** printed → proceed.

Token can also expire **mid-session**. If a `vercel` command suddenly returns "token not valid" after working earlier, repeat the login step.

---

## 1. Locate the Next.js project root

The Next.js app may NOT be at the repo root — in this repo it is at `web/`. Every `vercel` command in this runbook runs from the Next.js project root, not the git repo root.

```powershell
cd web
```

---

## 2. Known gotchas — check BEFORE first deploy

### Gotcha A: `outputFileTracingRoot` doubled-path failure

Read `next.config.ts` / `next.config.js`. If it contains:

```ts
outputFileTracingRoot: path.join(__dirname, "..")
```

…and the project will be deployed via Vercel CLI from a subfolder, **remove that line** unless there's a real monorepo with multiple lockfiles. On Vercel's build runner this resolves to `/vercel/path0/..` and the artifact step then looks for files at `/vercel/path0/path0/.next/routes-manifest.json` — which does not exist. Build succeeds, deploy fails with:

```
ENOENT: no such file or directory, lstat '/vercel/path0/path0/.next/routes-manifest.json'
```

Fix:
```ts
const nextConfig: NextConfig = {};
```

This bug bit us on the first deploy of intellibid.app (2026-05-28).

### Gotcha B: env vars require a local source

Check for `web/.env.local`. If it's missing, the deploy will still succeed but every server feature reading env vars will return 500 at runtime. Tell the user honestly — don't silently deploy a half-working site.

---

## 3. Link the project

From `web/`:

```powershell
vercel link --yes --project intellibid
```

Project is already linked (see `web/.vercel/project.json`), so this step is normally skipped on subsequent deploys.

---

## 4. Push environment variables

If `web/.env.local` exists and has real values, push each as a production env var:

```powershell
Get-Content .env.local | ForEach-Object {
  if ($_ -match '^([^=#][^=]*)=(.*)$') {
    $name = $matches[1].Trim()
    $value = $matches[2].Trim().Trim('"').Trim("'")
    if ($value) {
      Write-Output $value | vercel env add $name production
    }
  }
}
```

Or one at a time:
```powershell
vercel env add GEMINI_API_KEY production
```

Required env vars for intellibid (see `web/.env.example`):
- `GEMINI_API_KEY`, `GEMINI_MODEL_FAST`, `GEMINI_MODEL_REASONING`, `GEMINI_MODEL_PREVIEW`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `FIRECRAWL_API_KEY`

---

## 5. Deploy to production

```powershell
vercel --prod --yes
```

Two URLs come out:
- **Per-deployment immutable URL**: `intellibid-<hash>-saurav-gangulys-projects-21f7c4b1.vercel.app`
- **Production alias**: `intellibid.vercel.app`

---

## 6. Verify

```powershell
curl -sI https://intellibid.vercel.app
```

- **`HTTP/1.1 200 OK`** → live and public.
- **`HTTP/1.1 401 Unauthorized`** + `_vercel_sso_nonce` cookie → Deployment Protection is on.

### Fixing the 401

Agent cannot disable via CLI. Direct user to:

```
https://vercel.com/saurav-gangulys-projects-21f7c4b1/intellibid/settings/deployment-protection
```

Set **Vercel Authentication** dropdown to **Disabled** → click **Save**. Check team-level security too (`/teams/saurav-gangulys-projects-21f7c4b1/settings/security`) — team-level overrides project-level.

After user confirms saved, re-curl to verify `200 OK`.

---

## 7. Custom domain

```powershell
vercel domains add intellibid.app
```

Vercel prints DNS records:
- **Apex** `intellibid.app` → A record `76.76.21.21`
- **www** → CNAME `cname.vercel-dns.com`

Set at registrar (ask which one for UI-specific guidance).

---

## 8. Sync fixes back to GitHub

If any source file was modified (most commonly `next.config.ts` for Gotcha A), commit and push:

```powershell
git add <files>
git commit -m "fix(web): <one-line reason>"
git push
```

---

## What the agent should NOT try to do

- `vercel login` — interactive browser OAuth, user-driven
- Toggle Deployment Protection — dashboard only
- Set DNS records — registrar-specific, user-driven
- Push env vars the user hasn't provided — flag honestly

---

## Live state

- **Production:** https://intellibid.vercel.app
- **Custom domain (planned):** https://intellibid.app
- **Vercel project:** `saurav-gangulys-projects-21f7c4b1/intellibid`
- **GitHub repo:** https://github.com/Saurav-Ganguly/intellibid.app

---

## Origin

Captured from the first deploy of intellibid.app (2026-05-28). Mirror of `~/.claude/skills/deploy-to-vercel/SKILL.md` for Codex visibility.
