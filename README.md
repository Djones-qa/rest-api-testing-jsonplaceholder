# REST API Testing Suite - JSONPlaceholder

[![CI Pipeline](https://github.com/Djones-qa/rest-api-testing-jsonplaceholder/actions/workflows/ci.yml/badge.svg)](https://github.com/Djones-qa/rest-api-testing-jsonplaceholder/actions/workflows/ci.yml)
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b.svg?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Comprehensive REST API test suite against JSONPlaceholder - covering CRUD operations, filtering, nested resources, and partial updates using Playwright API testing.

## Test Results

| Suite | Tests | Result | Coverage |
|-------|-------|--------|----------|
| Posts API | 7 | ALL PASS | GET, POST, PUT, DELETE, filter, nested |
| Todos & Albums | 5 | ALL PASS | list, filter, nested photos, PATCH |
| Users API | 4 | ALL PASS | list, single with nested, user posts/todos |
| **Total** | **16** | **16 PASS** | Full CRUD + relationships |

## API Operations Tested

| Method | Endpoint | Assertion |
|--------|----------|-----------|
| GET | /posts | Returns 100 posts with correct schema |
| GET | /posts/1 | Returns specific post by ID |
| POST | /posts | Creates post, returns 201 with ID |
| PUT | /posts/1 | Updates post, returns updated fields |
| DELETE | /posts/1 | Returns 200 on deletion |
| GET | /posts?userId=1 | Filters posts by user |
| GET | /posts/1/comments | Nested comments for post |
| GET | /todos | Returns 200 todos |
| GET | /todos?completed=true | Filter by completion status |
| PATCH | /todos/1 | Partial update returns merged data |
| GET | /albums | Returns 100 albums |
| GET | /albums/1/photos | Nested photos with URLs |
| GET | /users | Returns 10 users with nested address/company |
| GET | /users/1 | Validates nested geo coordinates |
| GET | /users/1/posts | User's posts filtered correctly |
| GET | /users/1/todos | User's todos with status |

## Getting Started

```bash
git clone https://github.com/Djones-qa/rest-api-testing-jsonplaceholder.git
cd rest-api-testing-jsonplaceholder
npm install
npx playwright test
```

## Running Tests

```bash
npx playwright test --reporter=list    # Detailed output
npx playwright test --reporter=html    # HTML report
```

## Author

**Darrius Jones**

- GitHub: [@Djones-qa](https://github.com/Djones-qa)
- LinkedIn: [darrius-jones-28226b350](https://www.linkedin.com/in/darrius-jones-28226b350)

## License

MIT - 2026 Darrius Jones

See [LICENSE](./LICENSE) for details.
