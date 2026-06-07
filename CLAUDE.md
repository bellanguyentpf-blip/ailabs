# AILABS — project guidance

## Content & copy style (STRICT)

**Never use dash punctuation in user-facing copy.** It reads as AI-generated.

- ❌ No em dash `—` and no en dash `–` anywhere in content (headings, body, taglines, blog posts, metadata titles, aria-labels).
- ❌ No "stylized" arrows `→` in sentences. Write "to" (e.g. `blog to social to email`, `0 to 18k`).
- ✅ Instead of a dash, use a comma, period, colon, or rewrite the sentence.
- ✅ Number ranges use a plain hyphen or "to": `2-4 weeks` or `2 to 4 weeks` (never `2–4`).
- ✅ Plain hyphens inside compound words are fine: `conversion-first`, `AI-native`, `on-brand`.
- For joining a title and tagline/section in metadata, use a middot `·` or a colon, not a dash.

This applies to both `en` and `vi` dictionaries in `lib/dictionaries/`. When adding or editing copy, scan the diff for `—`, `–`, and `→` before finishing.

## Admin area

- `/admin` is a separate root layout (outside `[lang]`, not localized). `proxy.ts` excludes `/admin` and `/api` from the locale redirect.
- Auth is a simple cookie gate in `lib/admin-auth.ts` (creds + session secret read from `.env.local`: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`). Login/logout are server actions in `app/admin/actions.ts`. `/admin` redirects to `/admin/login` when the `ailabs_admin` cookie is missing/invalid.
- Audit popup and Book-a-call forms POST to `/api/submissions`, persisted to `.data/submissions.json` via `lib/store.ts` (file store, gitignored). The admin dashboard reads this and shows two sections: Meeting requests (sorted by requested date) and Free website audit requests.
- Note: the file store is fine locally but not on serverless/Vercel (ephemeral FS). Swap `lib/store.ts` for a real DB before deploying.

## Other notes

- Bilingual site: all copy lives in `lib/dictionaries/{en,vi}.ts`. Keep both locales in sync (same keys; `vi` must match the `Dictionary` shape from `en.ts`).
- Theme is forced light (gold `#D6B25E` + white + black branding). Do not reintroduce a dark toggle unless asked.
- No decorative "eyebrow" kicker tags above titles (removed intentionally as they look AI-generated).
- No decorative background patterns (grids, stripes, noise). Keep surfaces clean.

## Surface & card system

- Page background is soft off-white (`--background`); cards are pure white (`--card`). Depth comes from shadow, not color.
- `.card-elevated` = bordered white card with a soft static shadow. `.card-interactive` adds a hover lift — apply it ONLY to clickable cards (links/buttons), never to static info cards or forms.
- Gold `#D6B25E` is an accent only (it is low-contrast); never use it for body text or large surfaces. Primary buttons/text stay black; backgrounds white/off-white.
- Trust matters: keep the homepage "Trusted by" client strip and named testimonials; prefer concrete metrics over vanity claims.
