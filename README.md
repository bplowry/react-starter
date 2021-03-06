## Using this starter kit

1. Download the source (see below, or download a .zip)

```sh
# to put the starter kit in a new folder
npx degit bplowry/react-starter <folder-name>

# to put the starter kit in the current folder, you can omit the folder name
npx degit bplowry/react-starter
```

2. Edit the project-specific references:

   - Change the `name` in `package.json`
   - Edit the files in `public`
     - `title` and `meta` tags in `index.html`
     - Replace favicon and logos with your own
     - Change the `manifest.json` for Progressive Web App support
     - Consider updating robots.txt

3. Review the existing configuration:

   - If you'd rather use `npm` than `yarn`:
     - delete `yarn.lock`
     - run `npm install`
     - commit `package-lock.json`
   - Review the rules in `.prettierrc`
     - If you want to change any, run the `prettier` command once you're done, e.g. `yarn prettier`, to keep the code formatting consistent.
   - If you use VS Code, install the workspace recommended extensions (they'll pop up when you open the folder).
   - If you need to run multiple `create-react-app` apps at once, they can't all run on localhost:3000. You can change the port in `.env.development`

## What's included

- Development and production builds through [Create React App](https://create-react-app.dev/)
- Unit testing and code coverage with [Jest](https://jestjs.io/)
- End-to-end testing with [Cypress](https://www.cypress.io/)
- Structural and Visual regression testing with [Storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots)
- Bundle analysis with [source-map-explorer](https://github.com/danvk/source-map-explorer)
- [TypeScript](https://www.typescriptlang.org/) support\*
- Code formatting with [EditorConfig](https://editorconfig.org/), [Prettier](https://prettier.io/), [husky](https://github.com/typicode/husky), and [lint-staged](https://github.com/okonet/lint-staged)
- Code quality with [ESLint](https://eslint.org/)
- Editor integration for [VS Code](https://code.visualstudio.com/)

<super>\*</super> Some limitations with TypeScript support for Cypress

## What's not included

Much like Create React App, anything related to the app itself, rather than tooling, is left to the consumer.

Having said that, here are a few things I've found helpful in the past:

- Support for [Sass stylesheets](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
  or CSS-in-JS utilities, e.g. [styled-components](https://www.styled-components.com/), [emotion](https://emotion.sh/docs/introduction)
- Component libraries, e.g. [Material-UI](https://material-ui.com/), [Polaris](https://polaris.shopify.com/)
- Client-side routing, e.g. [Reach Router](https://reach.tech/router), [React Router](https://reacttraining.com/react-router/)
- State management libraries, e.g. [Redux](https://redux-toolkit.js.org/), [MobX](https://mobx.js.org/README.html), [XState](https://xstate.js.org/docs/)

## Available scripts

In the project directory, you can run:

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| analyze         | Analyze bundle size. Run `build` first       |
| start           | Start a development build with hot-reloading |
| build           | Create a minified production build           |
| test            | Run tests in watch mode                      |
| test:ci         | Run tests once, as they would in CI          |
| test:ci-vr      | Run visual regression (VR) tests once        |
| test:coverage   | Run tests and output code coverage           |
| test:vr-only    | Run VR tests without starting Storybook      |
| test:vr         | Start Storybook and run VR tests             |
| cypress         | Start the Cypress runner                     |
| eject           | Eject from `create-react-app`                |
| prettier        | Format all files with `prettier`             |
| storybook       | Start Storybook component library            |
| build-storybook | Build static files for Storybook             |
