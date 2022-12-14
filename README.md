# React Native Boilerplate

주의:

이 프로젝트는 트렌드를 따라가는 보일러플레이트가 아닙니다.

개인적인 프로젝트를 위해 작성했습니다.

하지만 누군가에게 도움이 될 지 몰라 사용하는데 문제가 없도록 노력했습니다.

```txt
DISCLAIMER:

This project is not trend-following boilerplate.
I authored only for my projects, also for collaborate with co-workers.
But, I'll do best so that there is no problem for someone to use it codes.
```

## 코드 작성 시 고려한 부분

- TypeScript의 타입선언

- 간결한 리소스 구조

- 쉽게 읽을 수 있는 코드

## 코드를 작성하기 전 알아둘 사항

- 절대경로 설정

  코드를 관리하기 쉽도록 `Babel Plugin Module Resolver`를 활용하여 절대경로를 사용하도록 설정했습니다

  `/tsconfig.json`

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

  `/.babelrc`

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

- assets 리소스 관리

  폰트파일, 사운드파일 등의 리소스를 업데이트하기 위해 네이티브 워크스페이스를 들어갔다 나오는 것은 귀찮거나 간혹 잊어버리는 경우가 생깁니다.

  [react-native-asset](https://www.npmjs.com/package/react-native-asset) 라이브러리를 활용하여 자동으로 link, unlink가 되도록 설정을 했다.

  > "격렬히 감사! 🙏"

  `/react-native.config.js`

  ```js
  module.exports = {
    assets: [ "./src/assets/fonts" ],
  };
  ```


## 예제

이 프로젝트를 활용하면서 주로 쓰는 상용구의 예제를 몇 가지 작성해 놓았습니다.

### 컴포넌트

- 함수형 컴퍼넌트

- 클래스형 컴퍼넌트

