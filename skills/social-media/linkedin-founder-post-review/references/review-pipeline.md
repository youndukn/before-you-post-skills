# Review Pipeline

## 0. Writing Profile Check

Use an initialized writing profile when available.

If no profile exists, infer temporary assumptions from the draft and say:

```text
No writing profile provided. I am reviewing against the intended reader and the draft's current voice.
```

Profile-aware review should check:

- Does this sound like the user's prior posts?
- Is the structure consistent with their strongest examples?
- Are suggested edits preserving or flattening their voice?
- Is the post drifting into generic founder advice?

## 1. Feed Preview

Assess how the post appears in a LinkedIn feed.

Return:

- Word count.
- Estimated reading time.
- Likely first visible lines.
- Mobile readability issue.
- Whether paragraph rhythm helps or hurts.

## 2. Hook Review

Review the first 1-2 lines.

Check for:

- Specific tension.
- Clear reader relevance.
- Concrete situation, claim, mistake, lesson, or decision.
- Curiosity without clickbait.
- Whether the first line is too broad, abstract, or generic.

Return:

- Hook score: 1-5.
- What the hook promises.
- Whether a founder-reader would keep reading.
- A better hook only if the current hook is weak.

## 3. Audience Fit

Check whether the post is written for the intended reader.

Return:

- Audience fit score: 1-5.
- Who the post currently seems written for.
- One edit that makes the intended reader clearer.

## 4. Skimmability

Check:

- Paragraph length.
- Line break rhythm.
- List structure.
- Sentence length.
- Repeated sentence shapes.

Return:

- Skimmability score: 1-5.
- Exact paragraphs to split, cut, or move.

## 5. Specificity And Evidence

Find generic claims and missing proof.

Look for:

- Abstract statements.
- Generic startup advice.
- Claims without examples.
- Missing numbers, scenes, customer moments, constraints, or decisions.

Return:

- Specificity score: 1-5.
- The most generic line.
- The evidence needed to make it credible.

## 6. Credibility

Assess whether the post feels earned.

Check:

- Does the author have a believable reason to say this?
- Is there lived founder context?
- Is the claim too absolute?
- Does it overstate certainty?
- Does it sound like borrowed wisdom?

Return:

- Credibility score: 1-5.
- What felt earned.
- What felt unearned or inflated.

## 7. Human Voice

Flag generic or over-polished language. When a writing profile exists, compare the draft against the user's own style.

Look for:

- Generic motivational phrases.
- Overly symmetrical structure.
- Vague transformation language.
- Too many polished abstractions.
- Voice mismatch with founder context.

Return:

- Human voice score: 1-5.
- Phrases that sound generic.
- How to make them more founder-specific.
- If profile exists: what matches the profile and what breaks from it.

## 8. Reader Drop-Off

Identify the exact line or section where a founder-reader is most likely to stop.

Return:

- Drop-off point.
- Why they stop.
- The smallest edit to keep them reading.

## 9. Minimal Edits

Only rewrite after critique.

Rules:

- Preserve the founder's voice.
- Prefer patch-style edits: hook, paragraph order, specific line replacements, ending.
- Label what changed and why.

Default edit output:

- Better hook.
- 3-5 line-level edits.
- Cleaner ending when needed.

## 10. Human Review Handoff

Offer this only after the review:

```text
Want a founder-reader to review this before you post?
I can package this into a human review brief: draft, intended reader, goal, concerns, and the AI readability notes.
```
