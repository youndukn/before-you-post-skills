# LinkedIn Founder Post Review

A single high-signal skill for reviewing founder LinkedIn drafts before publishing.

## Profile First

The strongest version starts by initializing the founder's writing profile from prior LinkedIn posts.

This lets the skill review against the user's own style instead of generic LinkedIn advice.

Profile data can include:

- 2-5 past posts.
- Target readers.
- Product/founder context.
- Voice preferences.
- Phrases to avoid.
- Strong examples.

The slash-command workflow is:

```text
/byp-init
/byp-review
```

`/byp-init` creates `BYP-WRITING-PROFILE.md`.

`/byp-review` reads that markdown before reviewing a post.

## Why It Is Small

This skill intentionally excludes weak generic social media features. It does not do scheduling, hashtag generation, engagement prediction, or viral scoring.

It focuses on founder-reader judgment:

- where readers stop
- what feels generic
- what feels credible
- what context is missing
- what should be cut, moved, or clarified

## Files

```text
SKILL.md
references/review-pipeline.md
references/scorecard.md
templates/review-output.md
templates/writing-profile.md
templates/human-review-brief.md
examples/founder-post-review.md
```
