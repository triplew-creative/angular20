---
applyTo: "**/*.ts"
---

# Project coding standards for TypeScript and Angular

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## TypeScript Guidelines

-   Always avoid nested blocks and deeply nested code
-   Always prefer early returns to reduce nesting
-   Always check for dead code and remove it before editing
-   Avoid comments that explain what the code does; instead, write self-documenting code
-   Use TypeScript for all new code
-   Follow functional programming principles where possible
-   Use interfaces for data structures and type definitions
-   Avoid using `any` type
-   Prefer immutable data (const, readonly)
-   Use optional chaining (?.) and nullish coalescing (??) operators
-   Always import using absolute paths instead of relative paths

## Angular Guidelines

-   Look for existing components before creating new ones
-   Use Angular's built-in (@if, @for, etc.) instead of custom implementations for templates and DOM manipulation
-   Use Angular's Signals for state management where applicable
-   Prefer Angular's built-in features over third-party libraries
-   Use Angular's dependency injection system
-   Use Angular's reactive forms for form handling
-   Keep components small and focused
-   Use services for business logic and data fetching
-   Always optimize http requests with caching and error handling

## Dependency Injection Guidelines

- Always use standalone inject() function instead of constructor injection
- Order injected dependencies by access modifier: public, protected, private
- Add readonly modifier to all injected dependencies
- No need to specify type as it's inferred from inject()
- Place injections just above the constructor()

Example:
```typescript
export class MyComponent {
    public readonly myService = inject(MyService);

    protected readonly adminService = inject(AdminService);

    private readonly fb = inject(FormBuilder);
    private readonly router = inject(Router);
}
```
