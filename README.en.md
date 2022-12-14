# React Native Boilerplate

DISCLAIMER:

This project is not trend-following boilerplate.

I authored only for my projects, also for collaborate with co-workers.

But, I'll do best so that there is no problem for someone to use it codes.

## Factors to consider (when authored)

- TypeScript - Types

- Clean resources structures

- Easy-to-read codes

## Things to know before authoring

- Absolute path setting

  `tsconfig.json`

  ```json
  .
  .
  .

  "baseUrl": ".",
  "paths": {
    "/src/*":  [ "./src/*" ]
  }

  .
  .
  .
  ```

  ---

  `.babelrc`

  ```json
  .
  .
  .

  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "alias": [
          {
            "/src": "./src"
          }
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],

    .
    .
    .
  ```

-

## Examples codes

### Components

- Functional Components

- Class Components

