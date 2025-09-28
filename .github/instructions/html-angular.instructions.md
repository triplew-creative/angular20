---
applyTo: "**/*.html"
---

# Project coding standards for HTML templates and Angular

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## HTML Guidelines

-   Use Angular's built-in directives (`@if`, `@for`, etc.) for conditional rendering and loops
    -   Ensure for loops are used with `trackBy` to optimize performance
-   Use Angular's built-in pipes for data formatting
-   Use Angular's built-in forms for form handling
-   Keep templates clean and focused
-   Reference another component's template for reference on how to structure your template
-   Use Angular's built-in animations for transitions and effects
-   Use Bootstrap Utility classes for layout and spacing
-   Always reference `src\assets\styles\style.scss` for global classes and styles
-   Try to avoid inline styles
-   Try to follow accessibility best practices
