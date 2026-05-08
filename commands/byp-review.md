# /byp-review

Review a founder LinkedIn draft using the Before You Post profile and review pipeline.

## Purpose

Load the user's writing profile from `BYP-WRITING-PROFILE.md` when available, then review a LinkedIn draft before publishing.

## Required Input

Ask for:

1. Draft post text.
2. Intended reader.
3. Post goal.
4. Main concern.

If the user gives only a draft, proceed with inferred defaults and state them briefly.

## Profile Handling

First look for:

```text
BYP-WRITING-PROFILE.md
```

If it exists:

- Read it before reviewing.
- Compare the draft against the user's known voice, structure, audience, and avoid list.
- Preserve the user's style in suggested edits.

If it does not exist:

- Say: `No BYP-WRITING-PROFILE.md found. I will review this draft without a saved writing profile. Run /byp-init later for style-aware reviews.`
- Continue the review.

## Output

Use the normal review template:

```text
skills/social-media/linkedin-founder-post-review/templates/review-output.md
```

The review must include:

- Feed preview.
- Writing profile used.
- Where founder readers may stop.
- Scorecard.
- Highest-leverage fixes.
- Suggested edits.
- Optional human review handoff.

## Rules

- Do not promise engagement, virality, or algorithm advantage.
- Do not claim reliable AI detection.
- Do not rewrite the whole post unless the user asks.
- Prefer line-level edits that preserve voice.
