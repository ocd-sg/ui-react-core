# `ui-react-core`

# Table of Contents
1. [Requirements](#requirements)
1. [Project Setup](#project-setup)
	1. [Libraries](#libraries)
	1. [Structure](#structure)
1. [Basic Usage](#basic-usage)
1. [Design Principles](#design-principles)
	1. [Components](#components)
	1. [Reducers and State](#reducers-and-state)
	1. [AJAX and Side Effects](#ajax-and-side-effects)

## Requirements
- node `^4.5.0`
- yarn `^0.17.0` or npm `^3.0.0`

## Project Setup

### Libraries

Transpile:
- Babel

Lint:
- ESLint

Bundle:
- Webpack

Automate:
- Webpack

Typecheck:
- Flow

Test:
- AVA
- Enzyme
- Sinon

Application:
- React
- Mapbox GL
- D3
- Tachyons

### Structure

```
.
├── dist/                   # compiled files for distribution as an npm package
├── app/                    # compiled files as a standalone interactive module
└── src/
    ├── app/                # files and configs for `storybook`
    └── lib/                # where the components live
        ├── SomeComponent
        │   ├── index.js    # source file for components
        │   ├── story.js    # story
        │   └── test.js     # test
        └── index.js        # entry point to the components library
```

## Basic Usage

```
# install dependencies
npm install

# run watcher to monitor file changes and execute test cases automatically
npm run test

# run `storybook` for development
npm run dev

# compile source code in ./src/lib to ./dist for production-ready version for distribution
npm run build:lib

# compile source code in ./src/app and ./src/lib to ./app for standalone interactive module
npm run build:app
```

## Design Principles
