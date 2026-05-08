# Example

## User Prompt

```text
Review this LinkedIn post before I publish it.

Reader: first-time solo founders raising a seed round.
Goal: build credibility.
Concern: sounds generic.

[draft]
```

## Full Example Prompt

```text
Use the linkedin-founder-post-review skill.

Reader: solo founders building an audience on LinkedIn
Goal: explain a product insight and attract early users
Tone: direct, founder-like, honest
Concern: sounds generic and too much like AI

Draft:
I used to think building the product was the hard part.

But now code is cheap.

The hard part is getting someone to trust you with the thing the product needs.

For this idea, the risk is not whether we can build a LinkedIn post review tool.

The risk is whether a founder will paste an unpublished draft before posting.

That changed how I think about validation.
```

## Expected Shape

```markdown
## Quick Verdict
Needs light edits. The post is relevant for founders, but the first two lines are too broad and the strongest credibility detail arrives too late.

## Feed Preview
- Words: 184
- Reading time: < 1 min
- Likely first visible lines: "Most founders think..."
- Mobile issue: paragraph 2 is too dense.

## Where Founder Readers May Stop
Paragraph 2. It becomes general advice before proving that the author has lived the problem.

## Highest-Leverage Fixes
1. Move the concrete founder moment into the first three lines.
2. Cut the generic advice sentence.
3. End with a sharper founder-specific question.
```
