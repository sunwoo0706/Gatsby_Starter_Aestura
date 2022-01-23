---
date: '2004-07-06'
title: 'Aestura 시작하기'
categories: ['Start', '처음시작하기', 'Aestura']
summary: 'Aestura 테마를 이용해서 블로그를 배포해보자 !'
---

### 실행

```sh
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

### 블로그 정보 설정

```js
# /gatsby-config.js

siteMetadata: {
  siteTitle: '', // 사이트의 title을 작성해주세요.
  description: '', // 예) 프론트엔드 개발자 땡땡의 블로그입니다.
  author: '', // 예) 홍길동
  siteUrl: '', // 예) https://website.com
  siteRepo: '', // 예) userName/userName.github.io
  githubId: '', // 만약 존재하지 않으면 비워주세요
  linkedInId: '', //
  twitterId: '', //
},
```

> siteRepo는 uttrances에 사용됩니다. 쓰고 싶지 않다면 비워두시면 됩니다.

### 블로그 글 쓰기

블로그에 글을 쓰려면 `/content` 아래에 마크다운 파일을 생성하시면 됩니다. 마크다운 파일의 이름은 URL path에 사용됩니다.

#### meta 정보

markdown 파일의 상단에는 아래와 같은 요소들이 작성되어야 합니다.

```
---
date: '2004-07-06' // 아티클을 작성한 날짜 YYYY-MM-DD 형식을 지켜주세요
title: '검색엔진최적화' // 아티클의 제목을 작성해주세요
categories: ['Web', 'SEO', 'Optimization'] // 카테고리를 작성해주세요
summary: '검색 엔진 최적화 작업을 어떻게 하는지 알아보자.' // 메인 페이지에서 보일 아티클의 요약글입니다.
---
```

### 배포

#### github pages

`Repository` 이름을 [username].github.io 의 형태로 맞춰주세요

github pages에서는 기본 설정으로 default 브랜치의 파일을 호스팅해주므로 따로 개발용 브랜치를 생성하여 개발을 진행하는 것을 권장드립니다.

github pages로 배포하고 싶다면 `gh-pages` 라이브러리를 설치해야 합니다. 아래 커맨드를 작성하여 실행해주세요.

```sh
$ yarn add gh-pages -D
```

아래 배포 스크립트를 `package.json` 파일에 추가해주세요.

```json
"deploy": "gatsby build && gh-pages -d public -b master"
```

> master 부분에 본인의 default 브랜치를 작성해주세요.

```json
{
  ...,
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "gatsby develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1",
    "deploy": "gatsby build && gh-pages -d public -b master"
  },
  ...
}
```

github pages로 배포했다면 기본 URL은 `https://[username].github.io/`으로 설정되므로 `gatsby-config.js` 파일의 `siteUrl` 속성값을 변경해주세요.

또한, `gatsby-plugin-canonical-urls` 옵션 부분도 똑같이 변경해주세요.

```js
module.exports = {
  siteMetadata: {
    ...,
    siteUrl: 'https://[username].github.io/',
  },
  plugins: [
		...,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://[username].github.io/',
        stripQueryString: true,
      },
    },
		...
  ],
};
```

이제 모든 설정은 끝났습니다.

다음 커맨드를 통하여 배포해주세요.

```sh
$ yarn deploy
```

`Published` 가 뜬다면 배포가 성공적으로 이루어진겁니다.

블로그를 배포한 `Repository`의 Setting 탭으로 들어가주세요.

아래로 스크롤을 내리면 github pages 설정 구간이 나오게 될 텐데, 아래 사직과 같이 웹 사이트가 배포 되었다는 표시가 뜨는지 확인하세요.

배포가 완전히 되는데 시간이 좀 걸릴수 있습니다.

이제 `https://[username].github.io` 에 들어가서 블로그를 확인하실 수 있습니다.
