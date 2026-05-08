# /byp-init

Initialize a founder writing profile for Before You Post.

## Purpose

Collect the user's previous LinkedIn posts, target audience, voice, and avoid list. Extract a reusable writing profile and save it as markdown so `/byp-review` can use it later.

## Ask The User

Ask for:

1. Target audience.
2. Voice.
3. Tones or phrases to avoid.
4. 2-5 previous LinkedIn posts or writing examples.

Use this prompt:

```text
Let's initialize your Before You Post writing profile.

Please send:
1. Target audience
2. Voice
3. Phrases or tone to avoid
4. 2-5 previous LinkedIn posts or writing examples
```

## Output File

Create or update:

```text
BYP-WRITING-PROFILE.md
```

Use `skills/social-media/linkedin-founder-post-review/templates/writing-profile.md` as the shape.

## Rules

- Do not invent a writing profile without examples unless the user explicitly asks.
- Preserve the user's style. Do not make them sound like a generic LinkedIn creator.
- If the user provides links instead of pasted posts and the agent cannot browse them, ask the user to paste the text.
- If `BYP-WRITING-PROFILE.md` already exists, ask whether to replace or update it.
