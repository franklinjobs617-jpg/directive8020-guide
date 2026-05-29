# Directive 8020 Guide Hub

## Critical Project Rules
- 不需要每次都执行build，除非我明确告知
- no prompts/chat/reasoning in frontend output
- no AI markers
- all visible content must be production-ready
- no placeholder content
- no debug comments

## Technical Rules
- TypeScript strict
- no `any`
- use Next.js Metadata API
- do not use `<head>`
- JSON-LD inside body

## SEO Requirements
- unique title
- unique meta description
- FAQSection on guide pages
- Breadcrumb required

## Engineering Rules
- Reason from first principles, not convention.
- Prioritize correctness over agreement.
- Critique solutions instead of assuming they are complete.
- Identify weaknesses, risks, and trade-offs clearly.
- State the most valuable next optimization when relevant.
- Prefer KISS.
- Prefer YAGNI.
- Fail fast and make errors visible.
- Keep code loosely coupled.
- Verify changes before considering them complete.

For architecture, debugging, or implementation review use:
Problem → Solution → Weaknesses → Next Optimization → Verification