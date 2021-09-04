# WIKEA(위케아) Front-end team입니다! 👨🏻‍💻

- 가구 전문 이커머스 플랫폼 [이케아(IKEA)](https://www.ikea.com/kr/ko/) 를 모티브로 한 팀 프로젝트

## 프로젝트 소개

- 인테리어 가구, 소품을 판매하는 사이트
- 카테고리, 신제품, 가격, 색상 등에 따라 상품을 볼 수 있는 필터 기능을 제공

## 프로젝트 계획 및 일정

🎈 Period : 2021.05.10 ~ 2021.05.21
- 1st Sprint : 전체 레이아웃 구현 및 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트와 백엔드 간 API 통신, conflict 해결 등

## 프로젝트 팀원

### Front-end 4명

  - 👱🏻‍♀️ Login_Page : [안정현](https://github.com/ahnjeongh2)
  - 👶🏻 Main_Page : [김예슬](https://github.com/yesl-kim)
  - 👱🏻 List_Page : [김수연](https://github.com/ksy4568)
  - 😎 Detail_Page : [노선경](https://github.com/celline1637)

### Back-end 2명

  - [정운산](https://github.com/Action2theFuture)
  - [최우석](https://github.com/tonic523)
  - [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/20-1st-WIKEA-backend)

## 적용 기술

- Front-End : React, React Router, Sass, JavaScript, CSS3, HTML5
- Back-End : Python, Django web framework, Bcrypt, My SQL, pyjwt
- Common : Slack, Trello, GitHub, Git, RESTful API

## 구현 기능

### 로그인/회원가입 페이지 (안정현)

- 로그인/회원가입 시, 입력 항목들에 대한 validation 로직(유효성 검증) 구현 
- 사용자 인증(Authentication) 완료에 따른, Local Storage에서의 access token(JSON Web Tokens) 관리

### 메인 페이지 (김예슬)

- 객체 매핑을 활용한 네비게이션 탭 기능
- react-router를 사용한 동적 라우팅 (메인 -> 리스트 이동)

### 리스트 페이지 (김수연)

- List page layout
- Product card Component 구현
- 제품 평점 기준으로 별점을 보여주는 간단한 데이터 시각화 함수 구현
- 클릭 이벤트 발생 시 각 버튼에 해당하는 필터된 데이터의 API 주소를 변경해 리랜더링해주는 필터 구현

### 상세 페이지 (노선경)

- 상세 페이지의 반응형 레이아웃 및 제품 상세이미지 Carousel 구현
- path parameter를 이용한 메인 및 리스트 페이지와의 동적 라우팅
- 제품 상세 데이터 API를 활용한 상세 정보 모달 구현
- 반응형 및 스크롤 감지 공동 헤더(네브바) 구현


## 프로젝트 전체 시연 영상
- 🎬 [유튜브 영상 링크](https://www.youtube.com/watch?v=I6-gSyTRVAU)


## 💥 Reference
- 이 프로젝트는 [이케아(IKEA)](https://www.ikea.com/kr/ko/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
