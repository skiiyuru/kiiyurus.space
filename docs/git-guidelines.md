# Git Guidelines

## Branch Naming

Format: `type/description-in-kebab-case`

### Types

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style/formatting
- `refactor` - Code restructuring
- `perf` - Performance improvements
- `test` - Testing related changes
- `chore` - Maintenance tasks

### Examples

```bash
feat/add-about-page
fix/navbar-active-state
docs/update-readme
style/format-components
refactor/avatar-component
perf/optimize-3d-models
test/e2e-navigation
chore/update-dependencies
```

## Commit Messages

Format: `type(scope): description`

### Types

Same as branch types above

### Rules

- Use imperative mood ("add" not "added")
- Keep first line under 50 chars
- Start with lowercase
- No period at end
- Add details in body after blank line if needed

### Examples

```bash
feat(avatar): add orbit controls limits
fix(canvas): prevent infinite growth
docs(readme): update installation steps
style(eslint): format according to new rules
```

### Breaking Changes

```bash
feat(api)!: change login endpoint response

BREAKING CHANGE: login endpoint now returns JWT instead of session cookie
```
