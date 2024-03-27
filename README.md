<br />

![image](https://github.com/minh0518/elice-Frontend-PA/assets/78631876/334ef468-2b6f-4a6f-927d-2c4a195b11eb)

<br />

## 엘리스 Front-end PA (조민호)

엘리스 프론트엔드 과제 입니다.


## 개발 환경
- node v20.10.0
- next.js 14.1.4


## 설치 및 실행

### 의존성 패키지 설치
```
npm install
```

### 개발 환경 실행
```
npm run dev
```


<br />
<br />
<br />

---

<br />
<br />
<br />


## 요구사항 체크리스트

- [x] NextJS 기반으로 작업을 합니다
- [x] API server 구현은 NextJS 의 API Routes 기능을 사용하여 구현합니다.
- [x] course 에 대한 정보는 https://api-rest.elice.io/org/academy/course/list/ 를 이용합니다.

Layout
- [x] 스크린과 컨테이너 사이에 24px 의 padding 이 있어야 합니다.
- [x] 크기가 1280px 일 경우부터는 레이아웃의 크기가 1280px 로 중앙정렬되게 고정되어야 합니다.
- [x] 스크린의 크기가 1280px 미만일 때는 레이아웃이 스크린 전체의 width 를 차지하도록 합니다

Search Area
- [x] Layout width 100% 를 차지하며 padding 은 위아래 12px 를 가집니다.
- [x]  Textbox 의 border 는 rgb(201, 202, 204) 의 색과 1px 의 두께, 그리고 4px 의radius 를 가집니다.
- [x]  Placeholder text 의 색은 CSS gray 로 설정합니다.
- [x]  상하 12px 의 margin 을 가집니다.
- [x]  Textbox 왼쪽에는 search icon 이 있습니다
- [x]  아이콘은 양옆 16px 의 margin 을 가집니다.
- [x]  Textbox 에서 문자열을 입력 시 문자열을 입력할 때마다 300ms debounced search 를 수행합니다.

Filter
- [x] 임의의 라이브러리 사용 혹은 직접 구현을 통해, Chip 을 구현합니다.
- [x] [무료], [유료] 를 모두 선택하거나 하나만 선택, 그리고 아예 선택하지 않을 수 있습니다.
- [x] 필터는 filter_conditions 파라미터를 이용합니다.(JSON type)
- [x] 브라우저를 새로고침을하여도 선택된 필터가 유지될수 있도록 url query 를 사용합니다.

Course Card
- [x] 1232px 기준, 코스 카드 4 개가 들어갈 수 있습니다.
- [x] 코스 카드 간 gutter size 는 x: 16px, y: 16px 입니다.
- [x] Pagination 을 수행합니다. 한 페이지당 최대 20 개의 코스 카드를 표시할 수 있도록 합니다
- [x] w: 296px, h: 338px 입니다.
- [x] 8px 의 border radius 를 가지며, border 는 없습니다
- [x] 상하 28px, 좌우 24px 의 padding 을 가집니다
- [x] 12px 의 size, bold, #524fa1 의 색상을 가진 레이블을 표시합니다.
- [x] course.enroll_type 및 course.is_free 값에 따라 '무료', '유료', '구독', '관리자 등록' 값을 표시합니다.

Title
- [x] 폰트 크기는 18px, bold, #222, line height 는 1.6 으로 설정합니다.
- [x] Title 이 길 경우 최대 라인수는 2 로 표시하며 끝에 … 를 표시합니다

Description
- [x] 폰트 크기는 14px, #5e5f61, line height 는 1.6 으로 설정합니다.
- [x] 텍스트가 길 경우 최대 라인수는 2 로 표시하며 끝에 … 를 표시합니다.
- [x] 아이콘은 24px 의 크기의 임의의 아이콘을 사용합니다.
- [x] 텍스트는 12px, #7d7e80 의 색상을 가집니다.
- [x] 아이콘과 텍스트 사이에는 8px 의 space 가 있습니다.
- [x] 아이콘과 텍스트의 vertical align 은 중앙정렬 되어야 합니다.
- [x] Body 오른쪽 끝 위치에 align 하여 수업 로고를 표시합니다.
- [x] 수업 로고의 위치는 첫 번째 IconText 의 상단과 일치합니다.
- [x] w: 52px, h: 52px 크기를 유지하며 로고의 proportion 이 정사각형이 아닌 경우 정사각형 내에 이미지의 proportion 을 유지하면서 모든 부분이 보이도록 해야 합니다

Pagination
- [x] 라이브러리를 쓰지 않고 직접 구현해야 합니다.
- [x] Pagination 숫자는 w: 24px, h : 24px 의 크기를 가진 box 내에 표시합니다.
- [x] 현재 페이지의 Box 는 #524fa1 의 색을, 이 때 숫자의 색은 white 입니다. 그 외 숫자의 색은 #999 입니다.
- [x] 현재 페이지 기준 앞쪽으로 최대 4 개, 뒷쪽으로 최대 4 개의 페이지를 더
- [x] 현재 페이지가 1 이거나 마지막 페이지인 경우 왼쪽/오른쪽 arrow 색은 #ccc그렇지 않으면 #222 의 색을 가집니다

<br />
<br />
<br />


## 컨벤션


<details><summary><h3>Commit 컨벤션</h3></summary>
  
### 기능 구현 Commit

```
[commit type]: [commit message]

# example
feat: 로그인 구현
```

<br>
<br>

타입 | 설명
-- | --
feat | 새 기능 구현
fix | 버그 수정
docs | 문서/주석 관련 작업
refactor | 리팩토링
test | 테스트 관련 작업
style | 디자인 관련 작업
chore | 기타 작업



</details>


<details><summary><h3>브랜치 컨벤션</h3></summary>
  

### 기능 개발 브랜치

> **기능별로 브랜치명을 구분짓습니다**

> **squash merge를 사용합니다**

<br />

기능 개발 브랜치명은 다음과 같습니다
- 브랜치의 의미를 알 수 있도록 어느 기능에 대한 것인지 브랜치 명에 기재합니다

- 추상적인 부분을 덜어내기 위해 브랜치가 어느 기능을 의미하는지 prefix와 함께 기능 명을 작성합니다



<br />

**prefix 종류들**

타입 | 설명
-- | --
feat | 새 기능 구현
fix | 버그 수정
docs | 문서/주석 관련 작업
refactor | 리팩토링
test | 테스트 관련 작업
style | 디자인 관련 작업
chore | 기타 작업

<br>
<br>

ex)
```
chore/ESLint,prettier_setting

feat/main_page_login_button

style/my_page_profile_image

docs/README.md_techstack

```
</details>


<br />
<br />
<br />



## 개발 기록


[🪡 PR 로그 ](https://github.com/minh0518/elice-Frontend-PA/pulls?q=is%3Apr+is%3Aclosed)



<br />
<br />
<br />

## 기술 스택

### 1. Next.js (app router)
과제 요구사항에 맞춰서 사용했습니다. 서버사이드 패칭 및 서버 컴포넌트를 활용한 로직을 작성했습니다.

<br />
<br />
  
### 2. Typescript
JS의 타입이슈로 인한 런타임 에러를 방지하고자 도입했습니다.

<br />
<br />
  
### 3. Tanstack-query
**Tanstack-Query를 사용한 이유는 다음과 같습니다.**

1. 데이터 캐싱을 사용하기 위함입니다.

이번 프로젝트에는 초기 데이터를 렌더링 한 뒤, **필터링 조건 or 페이지네이션에 의해 데이터가 변경이 됩니다.**

이 때마다 매번 새로 데이터를 가져오는 행위는 비효율적이라 생각됐고 캐싱 시스템으로 UX를 개선하고자 했습니다.


<br />

2. **Next 서버컴포넌트 캐싱은 현재 상황에 맞지 않다고 생각했습니다.**
비록 Next 서버컴포넌트의 데이터패칭도 캐싱이 되지만 이 과제에서는 최초 페이지가 그려질 때 패칭한 데이터만 사용하지 않습니다.

여기서는 유저 인터렉션 (Chip버튼 클릭, 페이지네이션 버튼 클릭)에 의해 초기의 데이터가 계속해서 변경되는 상황입니다.

**즉, 최초에 데이터를 패칭해온 다음, 클라이언트 컴포넌트에서 계속해서 변경된 조건에 의해 필터링 된 데이터를 가져와야 합니다. 그렇기 때문에 Tanstack-Query의 캐싱을 이용하기로 했습니다.**

서버 컴포넌트에서 미리 Tanstack-Query로 패칭을 한 다음, 캐싱데이터가 담겨진 `QueryClient`인스턴스를 클라이언트 컴포넌트에서 받아서 사용하는 것입니다.


<br />
<br />
  
### 4. scss
Next 서버 컴포넌트에서는 런타임 CSS-in-JS를 적용할 수 없기 때문에 Vanila-Extract, Scss 중에서 좀더 익숙한 Scss를 사용했습니다.


<br />
<br />

### 5. husky
일관화된 컨벤션을 강제하고자 도입했습니다.


<br />
<br />
<br />

## 데이터 패칭

데이터 패칭 패턴은 다음과 같습니다.
1. **서버 컴포넌트에서 Tanstack-Query로 패칭을 진행합니다**
   
2. **패칭 데이터가 캐싱된 `QueryClient`인스턴스를 생성하고 클라이언트 컴포넌트( CourseCard,페이지네이션 부분 )에 직렬화해서 넘겨줍니다**
   > 이후 클라이언트 컴포넌트에서는 `QueryClient`인스턴스를 받아서 동일한 캐싱값을 사용할 수 있게 됩니다
   (페이지네이션 버튼 이동 및 카테고리 Chip클릭)
   
3. **클라이언트 컴포넌트에서 유저 인터렉션이 발생할 때마다 다음의 과정이 진행됩니다**
   
   - 카테고리 Chip클릭
     쿼리스트링이 변경되며 동시에 서버 컴포넌트가 재실행됩니다
     서버 컴포넌트에서는 항상 변경된 쿼리스트링을 기반으로 필터링 로직을 형성한 뒤 이에 맞는 데이터를 가져옵니다
     매번 데이터를 받아올 때마다 Tanstack-Query의 캐싱데이터에 추가 됩니다
     
   - 페이지네이션 버튼 클릭
     클라이언트 컴포넌트의 페이지네이션 버튼을 클릭하게 되면 이에 맞는 offset으로 새로운 데이터를 가져옵니다.
     이때 역시 Tanstack-Query의 캐싱데이터에 추가가 됩니다

   **위의 2가지의 액션에 따라 데이터는 항상 변하지만, 동시에 동일한 조건에 대해서는 Tanstack-Query의 캐싱데이터를 이용하게 됩니다.**
     


<br />
<br />
<br />


## 에러 핸들링

> **이번 과제에서 사용한 에러 핸들링은 Next.js의 Error Boundary인 `error.tsx`를 사용했습니다.**

<br />

**`error.tsx`를 사용한 이유는 다음과 같습니다.**

- 각 컴포넌트에서 에러가 발생했을 때, 특정 위치마다 에러를 처리하는 것이 아니라

- 상위 컨텍스트인 `error.tsx`로 모든 에러를 던진 다음 이 곳에서 일괄처리를 하기 위함입니다.

<br />
<br />


> **처리한 에러 종류는 다음과 같습니다**

**1. 데이터 패칭 관련 에러**

**2. 필터링 쿼리스트링 유효성에 따른 에러**

**3. 존재하지 않는 페이지 진입**

각 항목에 대한 구현 정보는 [[#19] 에러핸들링 구현](https://github.com/minh0518/elice-Frontend-PA/pull/20)



<br />
<br />
<br />


## 폴더구조

<details><summary><h3>폴더 구조</h3></summary>
  
```tsx
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂get
 ┃ ┃ ┃ ┗ 📂list
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂[...path]
 ┃ ┃ ┣ 📜page.module.scss
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂_filter
 ┃ ┃ ┃ ┣ 📜FilterTable.module.scss
 ┃ ┃ ┃ ┗ 📜FilterTable.tsx
 ┃ ┃ ┣ 📂_result
 ┃ ┃ ┃ ┣ 📜Arrow.module.scss
 ┃ ┃ ┃ ┣ 📜GoLeft.tsx
 ┃ ┃ ┃ ┣ 📜GoRight.tsx
 ┃ ┃ ┃ ┣ 📜Pagination.module.scss
 ┃ ┃ ┃ ┣ 📜Pagination.tsx
 ┃ ┃ ┃ ┣ 📜Results.module.scss
 ┃ ┃ ┃ ┗ 📜Results.tsx
 ┃ ┃ ┣ 📂_search
 ┃ ┃ ┃ ┣ 📜SearchArea.module.scss
 ┃ ┃ ┃ ┗ 📜SearchArea.tsx
 ┃ ┃ ┣ 📂_ui
 ┃ ┃ ┃ ┣ 📜Chip.module.scss
 ┃ ┃ ┃ ┣ 📜Chip.tsx
 ┃ ┃ ┃ ┣ 📜CourseCard.module.scss
 ┃ ┃ ┃ ┣ 📜CourseCard.tsx
 ┃ ┃ ┃ ┣ 📜SingleCategory.module.scss
 ┃ ┃ ┃ ┗ 📜SingleCategory.tsx
 ┃ ┃ ┗ 📜RQProvider.tsx
 ┃ ┣ 📂_hooks
 ┃ ┃ ┣ 📜useDebounce.ts
 ┃ ┃ ┗ 📜useFetchData.ts
 ┃ ┣ 📂_utils
 ┃ ┃ ┣ 📜checkLabel.ts
 ┃ ┃ ┣ 📜filter.ts
 ┃ ┃ ┗ 📜generateQueryKey.ts
 ┃ ┣ 📜error.module.scss
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜page.module.scss
 ┃ ┗ 📜page.tsx
 ┣ 📂config
 ┃ ┣ 📜const.ts
 ┃ ┗ 📜path.ts
 ┣ 📂service
 ┃ ┗ 📜service.ts
 ┣ 📂styles
 ┃ ┣ 📜globals.scss
 ┃ ┗ 📜mixins.scss
 ┗ 📂types
 ┃ ┗ 📜const.ts

```

</details>

### app디렉토리 내부 
- _components
    > 해당 폴더(=라우팅)에서 사용되는 컴포넌트
    > 세부 UI기능에 따른 2차 폴더 분리

- _hooks
    > 해당 폴더(=라우팅)에서 사용되는 공통 커스텀 훅
    
- _utils
    > 해당 폴더(=라우팅)에서 사용되는 공통 유틸 함수

### app디렉토리 외부 
- types
    > 전역으로 사용되는 타입 명시

- config
    > 각종 상수값들과 URL경로(route handler)를 가지고 있는 폴더
    > **엘리스 api는 서버 컴포넌트로 숨기기 위해 따로 선언은 하지 않았습니다.**
    
- service
    > 데이터 패칭 메소드 선언

- styles
    > 공통 스타일 변수 선언



<br />
<br />
<br />

## 아쉬운 점


1. 테스팅의 부재
   
   요구사항을 구현 한 뒤 본연의 기능에 계속 집중하다보니 시간관리를 하지 못해서 테스팅 적용을 하지 못했습니다.
   선택된 쿼리스트링에 따른 필터링code를 생성하는 부분이나, 데이터 패칭에 따른 UI 등등 테스팅을 적용할 부분이 많았다고 생각이 들었지만 수행하지 못해서 아쉬움이 남습니다

3. Tanstack-query의 queryKey
   
   현재 모든 경우(카테고리, 검색어)에 따른 데이터를 캐싱해 두고 있습니다. 그러므로 카테고리, 검색어까지 전부 `queryKey`로 사용하고 있는데 카테고리와 달리 입력값의 경우 그 범위가 무한정이기 때문에 `queryKey`가 기하급수적으로 늘어날 수 있다고 생각이 들었습니다. 마감 기한 준수로 인해 이 부분은 수정을 하지 못 했지만 이 방식은 지양하는게 맞는것 같습니다.

