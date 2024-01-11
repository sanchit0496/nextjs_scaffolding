# Project Dependencies

This NextJS project uses a number of open source libraries and dependencies. Below is a list of these libraries and a brief description of their use in the project.

## Dependencies

- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is used in conjunction with Tailwind CSS for broader browser compatibility.
- **axios**: Promise based HTTP client for the browser and Node.js. Used for making HTTP requests to external services and APIs.
- **date-fns**: Modern JavaScript date utility library. Used for manipulating and formatting dates.
- **formik**: Small library that helps with handling form states and validations in React.
- **next**: The React framework for production. Used for server-side rendering and generating static websites.
- **next-seo**: A plugin that makes managing your SEO easier in Next.js projects.
- **postcss**: A tool for transforming CSS with JavaScript. Used in this project for working with Tailwind CSS.
- **react**: A JavaScript library for building user interfaces. Core library for building the UI of this project.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package.
- **styled-components**: A library for styling React applications using tagged template literals.
- **swr**: React Hooks library for remote data fetching. Simplifies data fetching and caching.
- **tailwindcss**: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- **yup**: JavaScript schema builder for value parsing and validation. Integrates well with Formik for managing forms.

## Development Dependencies

- **@babel/preset-env, @babel/preset-react**: These Babel presets are used for compiling ES6+ and React JSX into compatible JavaScript code for older browsers.
- **@testing-library/jest-dom, @testing-library/react**: Utilities for testing React components in a more user-centric way.
- **babel-jest**: Integrates Babel with Jest for testing.
- **eslint, eslint-config-prettier, eslint-config-standard, eslint-plugin-import, eslint-plugin-n, eslint-plugin-prettier, eslint-plugin-promise**: These are used for maintaining code quality and consistent coding style.
- **jest, jest-environment-jsdom**: JavaScript testing framework used for testing JavaScript code.
- **prettier**: An opinionated code formatter used for maintaining consistent style across the codebase.

This project also specifies Node.js version `>=18` as per the `engines` field in the `package.json`.

For detailed information about each library or tool, you can visit their respective documentation or GitHub repository.
