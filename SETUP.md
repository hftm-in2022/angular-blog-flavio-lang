# Project Setup

This document provides an easy starting guide for setting up an angular application. Complete with CI/CD via Github Actions and Deployment via Azure. Code Quality tools such as ESLint are also included.

## 1. Angular Project Setup

Creating a new angular project is very easy thanks to the Angular CLI. Installation instructions can be found [here](https://angular.dev/tools/cli)

With the following command a new angular project is created. Make sure to include routing and choose SCSS for your styles during the setup.

```
ng new angular-blog-flavio-lang
```

We can also easily set up different environments. These allow for differing config between development and production environments.

```
ng generate environments
```

This should create Typescript files for development and production environment.

## 2. Code Quality Tools

To maintain code quality in this project we will utilise different tools which allow us to automatically check for code quality issues and bad formatting.

We will use:

- **_ESLint_** for static Code analysis
- **_Prettier_** for automatic code formatting
- **_CommitLint_** to enforce Commit Conventions
- **_Husky_** provides hooks to run linting and formatting scripts before each commit
- **_Lint Staged_** to run linting tasks only on staged files and not the whole project (speeds up linting)

Step-by-step Setup:

**1. ESLint**

```shell
ng add @angular-eslint/schematics
```

**2. Prettier**

```shell
npm install prettier --save-dev
```

Add a script to your `package.json` for easier formatting:

```json
"scripts": {
    ...
    "format": "npx prettier --write ./src/app/*"
}
```

**3. CommitLint**

```shell
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

Add configuration to `package.json`

```json
"commitlint": {
    "extends": [
        "@commitlint/config-conventional"
    ]
}
```

**4. Lint Staged**

```shell
npm install lint-staged --save-dev
```

Add configuration to `package.json`

```json
"lint-staged": {
    "*.{ts,js,html}": "eslint --cache --fix",
    "*.{ts,js,html,css,scss,less,md}": "prettier --write"
}
```

**5. Husky**

```shell
npm install husky --save-dev
```

```shell
npx husky init
```

A file should be generated `.husky/pre-commit`. Replace the content:

```shell
npx --no-install lint-staged
```

Create a file (if it doesnt exist yet) `.husky/commit-msg`:

```shell
npx --no-install commitlint --edit "$1"

```

When commiting changes we should now be notified about bad commit formatting.

## 3. Automatic Azure deployment

Setting up azure deployment is very easy thanks to the Azure Tools Extension for VS Code. The Extension allows us to create a new static web app and generates a GitHub Action to go with it.

[Short Step-by-step Guide on Moodle](https://moodle.hftm.ch/mod/page/view.php?id=309425)
