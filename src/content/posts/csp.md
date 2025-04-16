---
title: "Content Security Policy: The Security Guard Your Website Needs"
description: Content Security Policy isn't just another header—it's your first line of defense against malicious code injection.
pubDate: 2025-03-15
image: https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uATTToOmEjR9XO53NKMTplmWFbszUdc0Ywg84
isDraft: false
---

## TL;DR

[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is a security feature that helps protect websites from cross-site scripting (XSS) attacks by telling browsers which content sources they should trust. It's like having a security guard that checks IDs before letting resources load on your website. While it might seem daunting at first, understanding CSP is crucial for building secure web applications.

## When Analytics Met Security

My journey with CSP began when I tried to implement [PostHog analytics](https://posthog.com/) on this website. While PostHog works without CSP, implementing one is crucial for security. Without proper CSP configuration, you might see errors like:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://us-assets.i.posthog.com/static/array.js. (Reason: CORS request did not succeed)
```

This was my introduction to the world of Content Security Policy. The browser was doing its job—blocking potentially dangerous scripts from unknown sources. Even though analytics might work without CSP, implementing one helps protect your users by explicitly declaring which sources are trusted.

### Important Note

While analytics tools like PostHog can work without CSP, implementing one is considered a security best practice. CSP provides an additional layer of protection against XSS attacks and other security vulnerabilities. Think of it as wearing a seatbelt - you might drive safely without one, but it's an important safety measure you shouldn't skip.

### 1. The Security Guard Metaphor

Think of CSP as a bouncer at an exclusive club. By default, they don't let anyone in unless they're on the list. In web terms, this looks like:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self';
    style-src 'self';
"
/>

```

This policy says "only trust content from our own domain." Pretty secure, but perhaps too restrictive for modern web apps.

### 2. Giving PostHog a VIP Pass

To allow PostHog while maintaining security, we needed to explicitly whitelist their domains:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://*.posthog.com https://us-assets.i.posthog.com;
    connect-src 'self' https://*.posthog.com https://us.i.posthog.com;
    img-src 'self' data: https: http:;
    style-src 'self' 'unsafe-inline';
"
/>

```

Each directive serves a specific purpose:

- `script-src`: Controls which JavaScript can run
- `connect-src`: Manages API connections
- `img-src`: Determines which images can load
- `style-src`: Governs CSS sources

### 3. The Power of Directives

CSP's real strength lies in its granular control. Here are some common directives and their uses:

```html
// Allow Google Fonts font-src 'self' https://fonts.gstatic.com; // Allow image CDN img-src 'self'
https://images.mycdn.com; // Allow API endpoints connect-src 'self' https://api.myservice.com;

```

### 4. Development vs Production

During development, you might need a more permissive policy. But in production, it's crucial to lock things down:

```html
<!-- Development -->
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self' 'unsafe-inline' 'unsafe-eval';
"
/>

<!-- Production -->
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self' https://trusted-scripts.com;
"
/>

```

## Tools of the Trade

To help debug CSP issues, these tools are invaluable:

- Browser DevTools (check the Console for CSP violations)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [Report-URI](https://report-uri.com/) for monitoring CSP violations

## Troubleshooting Tips

When implementing CSP with analytics tools like PostHog, you might encounter a few common issues:

1. **Content Blockers**: Ad blockers like uBlock Origin might block analytics requests even if your CSP is configured correctly. During development, consider temporarily disabling content blockers or adding exceptions for your analytics domains.

2. **CORS Errors**: If you see Cross-Origin Request Blocked errors, verify that all required domains are included in both `script-src` and `connect-src` directives.

3. **WebAssembly Issues**: Modern analytics tools often use WebAssembly for performance. Make sure to include `'wasm-unsafe-eval'` in your `script-src` directive if needed.

Remember to test your site both with and without content blockers to ensure a consistent experience for all users.

## The Security Mindset

CSP isn't just about adding headers—it's about adopting a security-first mindset. Every external resource is a potential risk, and CSP helps us manage those risks effectively.

Remember: security and functionality don't have to be at odds. With proper CSP configuration, you can have both a secure and feature-rich website.

## Credits

- [MDN Web Docs on CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Google's CSP Guide](https://developers.google.com/web/fundamentals/security/csp)
