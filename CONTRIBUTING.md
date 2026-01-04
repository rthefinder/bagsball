# Contributing to bagsball

Thank you for your interest in contributing to bagsball! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- No spam, scams, or malicious content

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 8
- Git
- Basic knowledge of TypeScript, React, and Solana

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bagsball.git
   cd bagsball
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Locally

```bash
# Start all apps in dev mode
pnpm dev

# Run specific app
cd apps/web && pnpm dev
cd apps/worker && pnpm dev
```

### Making Changes

1. Make your changes in your feature branch
2. Follow the existing code style
3. Add tests if applicable
4. Update documentation if needed
5. Run linter and type checks:
   ```bash
   pnpm lint
   ```

6. Build to ensure no errors:
   ```bash
   pnpm build
   ```

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add holder balance chart to dashboard
fix: correct dividend calculation in utils
docs: update BagsAMM integration guide
style: format code with prettier
refactor: simplify flywheel visualization
test: add tests for percentage calculations
```

Prefixes:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style/formatting
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Pull Request Process

1. **Update Documentation**
   - Update README if you change functionality
   - Update relevant docs in `/docs`
   - Add comments to complex code

2. **Test Your Changes**
   - Ensure `pnpm build` succeeds
   - Test locally in browser
   - Check responsive design
   - Verify wallet integration works

3. **Submit PR**
   - Push to your fork
   - Create pull request to `main` branch
   - Fill out PR template
   - Link related issues

4. **PR Review**
   - Respond to feedback
   - Make requested changes
   - Keep discussion focused and respectful

5. **Merge**
   - Once approved, PR will be merged
   - Delete your feature branch

## Areas for Contribution

### High Priority

- **Dashboard Enhancements**
  - Additional charts and visualizations
  - Mobile responsiveness improvements
  - Performance optimizations

- **Documentation**
  - Tutorials and guides
  - Video walkthroughs
  - Translation to other languages

- **Testing**
  - Unit tests for utilities
  - Integration tests for components
  - End-to-end testing

### Medium Priority

- **Worker/Indexer**
  - Enhanced verification logic
  - Historical data indexing
  - Performance monitoring

- **UI/UX**
  - Design improvements
  - Accessibility enhancements
  - Dark/light theme refinements

- **Developer Tools**
  - Scripts and utilities
  - Development helpers
  - Documentation generators

### What We DON'T Need

- ❌ Changes to tokenomics (fixed at launch)
- ❌ Control mechanisms for DividendsBot/BagsAMM
- ❌ Manual intervention switches
- ❌ Centralized features
- ❌ Investment advice or guarantees

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define interfaces for props and data structures
- Avoid `any` type unless absolutely necessary
- Use meaningful variable names

### React Components

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

### Formatting

- Use Prettier for formatting (run `pnpm format`)
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required

## Documentation

When contributing documentation:

- Use clear, simple language
- Include code examples
- Add screenshots for UI features
- Keep tone professional but friendly
- Always include disclaimers where appropriate

## Testing

While tests are not required for all contributions, they are highly valued:

```typescript
// Example test structure
describe('formatNumber', () => {
  it('should format large numbers with K suffix', () => {
    expect(formatNumber(1500)).toBe('1.50K');
  });

  it('should format millions with M suffix', () => {
    expect(formatNumber(2500000)).toBe('2.50M');
  });
});
```

## Questions?

- Open an issue for discussion
- Check existing issues and PRs
- Review documentation first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to bagsball! 🎉⚽
