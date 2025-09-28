---
applyTo: "**"
---

# Project general coding standards

## Building and Running

-   Use `ng build` to build the project
-   Use `ng serve` to run the project locally

## Naming Conventions

-   Use PascalCase for component names, interfaces, and type aliases
-   Use camelCase for variables, functions, and methods
-   Ensure private class members are declared as private
-   Ensure protected class members are declared as protected
-   ensure public class members are declared as public
-   Ensure the order of members in classes is:
    -   public members
    -   protected members
    -   private members
-   Use descriptive names that convey the purpose of the variable or function
-   Avoid abbreviations unless they are well-known (e.g., `HTML`, `URL`)
-   Use ALL_CAPS for constants

## Error Handling

-   Use try/catch blocks for async operations
-   Always log errors with contextual information if `isDevMode()` otherwise log the error without context
