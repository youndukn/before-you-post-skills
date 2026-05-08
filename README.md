# Before You Post Skills

![Before You Post Skills](assets/social-preview.png)

Open skills for reviewing founder LinkedIn drafts before publishing.

These skills help agents answer one narrow question:

```text
Will founder readers keep reading this draft, trust it, and understand why it matters?
```

## Mission

Help founders publish clearer, more credible LinkedIn posts by giving agents reusable review workflows for hook clarity, audience fit, specificity, credibility, human voice, skimmability, reader drop-off, and human-review handoff.

## Pipeline

![Pipeline](assets/pipeline-diagram.png)

The core skill starts by initializing or loading the founder's writing profile when available:

- Past LinkedIn posts.
- Writing style examples.
- Target audience.
- Product/founder context.
- Voice preferences.
- Phrases to avoid.
- Topics they want to own.

Then it runs this review pipeline:

1. Load or initialize writing profile.
2. Preview the draft as a LinkedIn feed post.
3. Review the hook and first visible lines.
4. Check audience fit.
5. Check skimmability and formatting.
6. Find clarity, specificity, and evidence gaps.
7. Judge credibility and human voice against the user's own style.
8. Predict where founder readers may stop.
9. Suggest minimal edits that preserve voice.
10. Package a human-review handoff when requested.

## Included Skills

```text
skills/social-media/linkedin-founder-post-review/
```

This repo intentionally starts with one strong skill instead of many weak ones.

## Not Included In Core

These are common in social media tools but excluded from the first core skill because they dilute the founder-reader review wedge:

- Engagement prediction.
- Virality scoring.
- Hashtag generation.
- Scheduling.
- Content calendar planning.
- Generic quote generation.
- Generic motivational rewrite.
- Broad cross-platform repurposing.
- AI detection claims.

## Install

Copy the skill folder into an agent-compatible skills directory.

Claude-style:

```text
.claude/skills/linkedin-founder-post-review/
```

Codex-style:

```text
.codex/skills/linkedin-founder-post-review/
```

Hermes-style:

```text
skills/social-media/linkedin-founder-post-review/
```

## Usage

```text
Use the linkedin-founder-post-review skill.

My writing profile:
- Past posts: [paste 2-5 examples or links]
- Voice: direct, tactical, personal
- Avoid: hype, generic founder advice

Reader: first-time solo founders raising a seed round.
Goal: build credibility.
Concern: sounds generic.

[paste LinkedIn draft]
```

## Boundary

This repo does not promise engagement, virality, algorithm advantage, or reliable AI detection.

It helps founders make drafts easier for the right readers to finish.
