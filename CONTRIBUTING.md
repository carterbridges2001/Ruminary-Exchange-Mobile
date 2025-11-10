# Contributing to Ruminary Exchange Mobile

Welcome to the Ruminary Exchange Mobile project! This document will help you get started with the project structure and development workflow.

## Project Structure

```
src/
├── assets/              # Images, fonts, and other static files
├── components/         # Reusable UI components
├── constants/          # App-wide constants and enums
├── hooks/              # Custom React hooks
├── navigation/         # Navigation configuration
├── screens/            # Screen components
│   ├── auth/          # Authentication screens
│   ├── auction/       # Auction-related screens
│   └── profile/       # User profile screens
├── services/          # API and third-party services
│   ├── api/           # API clients
│   └── firebase/      # Firebase configuration and services
├── store/             # Redux store configuration
│   ├── slices/        # Redux slices
│   └── index.ts       # Store configuration
├── theme/             # Styling and theming
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Development Workflow

1. **Branch Naming**
   - `feat/`: New features
   - `fix/`: Bug fixes
   - `chore/`: Maintenance tasks
   - `docs/`: Documentation updates
   - `test/`: Adding or updating tests

2. **Commit Messages**
   - Use present tense (e.g., "Add feature" not "Added feature")
   - Keep the first line under 50 characters
   - Include a blank line between the subject and body

3. **Code Style**
   - Follow the project's ESLint and Prettier configurations
   - Use TypeScript for type safety
   - Document complex logic with comments

4. **Pull Requests**
   - Reference any related issues
   - Include a clear description of changes
   - Request reviews from team members

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npx expo start`

## Testing

Run tests with:
```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
