# Node TypeORM App

# Description

<dl>
<dt>
    This project is a template starter example of using Node and Hapi framework with TypeORM.
</dt>
</dl>

## Features

<dl>
<dt>Libraries Used</dt>

- [Node](https://nodejs.org/en/)

- [Hapi](https://hapi.dev/)

- [TypeORM](https://typeorm.io/)

- [Swagger](https://swagger.io/)

</dl>


## Quick start

1.  Clone this repo using `git clone https://github.com/mohamedsamara/node-typeorm-app.git`
2.  Move to the directory: `cd <PROJECT_NAME>`.<br />
3.  Run `npm install` in order to install dependencies.<br />

## TypeORM Production Usage

ormconfig.json must be updated with below code:

```jsx
  "entities": ["build/entity/**/*.js"],
  "migrations": ["build/migration/**/*.js"],
  "subscribers": ["build/subscriber/**/*.js"]
```



## Run the application for development

```
$ npm run start:dev
```

## Simple build for production

```
$ npm run build
```

## Run the application for production

```
$ npm start
```

## Run the code linter

```
$ npm run lint:fix
```



