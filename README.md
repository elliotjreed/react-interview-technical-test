# Javascript / React technical interview task

## Task

Your task is to investigate a few minor bugs in a new internal Government web application.

The application should validate whether an inputted phrase only contains the letters A, E, L, R, S, T, and Y, and spaces.

1. If the phrase only consists of the letters A, E, L, R, S, T, Y, and a space the input box should have a green border, and the phrase should appear in the yellow box poster template
2. The phrase should not be case-sensitive, and the input should be converted to uppercase when being shown in the yellow box poster template
3. If the input box only contains a space or spaces the input box should have a red border, and the yellow box poster template should be empty
4. If the phrase contains characters other than A, E, L, R, S, T, and Y, the input box should have a red border, and the yellow box poster template should be empty
5. If the phrase entered is the phrase "stay alert" (not case-sensitive) the input box border should be red.

## Getting started

### Installing Yarn

For instructions on how to install Yarn visit [yarnpkg.com](https://yarnpkg.com/lang/en/).

### Installing dependencies

The frontend uses React and SASS, and is bundled using Webpack.

To install the required dependencies run

```
yarn install
```

### Running for development

To run the Webpack development server run:

```
yarn start
```

### Building for production

To build the production-optimised application run:

```
yarn build
```

### Running the tests

To run the unit tests run:

```
yarn test
```
