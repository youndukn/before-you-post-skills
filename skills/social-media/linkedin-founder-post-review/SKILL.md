---
name: linkedin-founder-post-review
description: Review founder LinkedIn drafts before publishing: feed preview, hook, audience fit, skimmability, specificity, credibility, human voice, reader drop-off, minimal edits, and human-review handoff.
---

# LinkedIn Founder Post Review

Use this skill when a founder wants to review a LinkedIn draft before publishing. Also use it when a founder wants to initialize a reusable writing profile from prior LinkedIn posts and personal style examples.

The purpose is not to maximize engagement or produce generic social content. The purpose is to judge whether founder readers would keep reading, where they may stop, what feels generic, what feels credible, and what should be clarified before posting.

## Command Workflow

Preferred command names:

- `/byp-init` — initialize the user's writing profile.
- `/byp-review` — review a draft using the saved writing profile.

`/byp-init` should create or update:

```text
BYP-WRITING-PROFILE.md
```

`/byp-review` should read `BYP-WRITING-PROFILE.md` when it exists before reviewing the draft.

## Inputs

Ask only for missing context that materially improves the review:

- Draft post text.
- Intended reader.
- Post goal.
- Desired tone.
- Main concern.
- Existing writing profile, if available.
- Past LinkedIn posts or writing examples, if the user wants style-aware review.

If the user provides only a draft, proceed with reasonable assumptions and state them briefly.

## Stage Zero: Writing Profile Initialization

If the user says they want to initialize, personalize, remember their style, use previous posts, build their profile, or make the review match their voice, run profile initialization before review.

Ask for 2-5 prior posts or writing examples when possible.

Extract:

- Core audience.
- Topics they repeatedly write about.
- Typical post structure.
- Hook patterns.
- Paragraph rhythm.
- Evidence style: stories, metrics, lessons, opinions, product updates.
- Voice traits.
- Phrases or tones to avoid.
- Credibility anchors: founder journey, product domain, customer type, expertise.
- Preferred CTA style.

Return a compact profile using `templates/writing-profile.md`.

Save it as:

```text
BYP-WRITING-PROFILE.md
```

When reviewing future drafts, compare suggestions against this profile. Do not rewrite the founder into a generic "LinkedIn thought leader" voice.

## Core Pipeline

Run these stages in order:

1. **Writing Profile Check** — use the founder's initialized profile when available; otherwise infer temporary assumptions.
2. **Feed Preview** — estimate words, reading time, first visible lines, mobile readability, and wall-of-text risk.
3. **Hook Review** — judge whether the first 1-2 lines create concrete tension or reader relevance.
4. **Audience Fit** — check whether the draft is written for the intended reader instead of a vague general audience.
5. **Skimmability** — check paragraph length, line breaks, list structure, and visual rhythm.
6. **Specificity And Evidence** — flag generic claims and identify missing scenes, numbers, examples, constraints, customer moments, or founder decisions.
7. **Credibility** — judge whether the claim feels earned, grounded, and appropriately scoped.
8. **Human Voice** — flag over-polished, generic, model-like, or borrowed-wisdom phrasing without claiming AI detection; compare against the user's own writing profile when available.
9. **Reader Drop-Off** — identify the exact line or section where a founder reader may stop and why.
10. **Minimal Edits** — suggest the smallest changes that preserve the founder's voice.
11. **Human Review Handoff** — optionally package the draft and AI notes for a human founder-reader.

Detailed instructions live in `references/review-pipeline.md`.

## Output

Use `templates/review-output.md` for the normal review.

Use `templates/writing-profile.md` when initializing a founder's writing profile.

Use `templates/human-review-brief.md` when the user asks for human review handoff.

## Guardrails

- Do not promise engagement, virality, algorithm advantage, or guaranteed growth.
- Do not claim reliable AI detection.
- Do not optimize for clickbait.
- Do not erase the founder's voice.
- Do not overwrite the user's initialized writing profile unless they ask to update it.
- Do not ghostwrite a completely different post unless explicitly requested.
- Keep feedback direct, specific, and practical.
