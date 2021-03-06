## N person's chicken game using React and Node

- [O] Home 화면 (실험 설명)
- [O] 설문조사 화면 (form input 받기)
- [O] 실험 안내 (실험 시 유의 사항 등)
- [O] 실험시작
  > [O] input data 모델 만들기  
  > [O] input data를 활용하여 웹에 띄우기  
  > [O] 사용자 게임 동작 구현하기  
  > [O] 사용자의 반응에 따른 input data 수정하기  
  > [O] 사용자의 반응/ 당시 봇의 반응/ database에 저장하기
- [O] 실험종료 안내
- [ ] 추가 설문조사

### About Programming

> npx create-react-app capstone_bci  
> yarn start  
> yarn add prop-types  
> yarn add express  
> yarn add react-router-dom // react에서의 라우터 설정
> yarn add styled-components
> yarn add styled-reset // style component 초기화

CSS 적용을 하는 방법

1. styles.css를 import 시키는 일반적인 방법.
2. Header.module.css 등의 형태로 각각의 폴더에 js와 css파일을 몰아넣은 뒤 각 js파일에서
   import styles from "./Header.module.css"로 임포트 한 뒤, className={styles.navList} 같은 형태로 적용.
3. yarn add styled-components

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
