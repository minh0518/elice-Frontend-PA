<br />
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



## 개발 기록


[🪡 PR 로그 ](https://github.com/minh0518/elice-Frontend-PA/pulls?q=is%3Apr+is%3Aclosed)



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

    
## 아쉬운 점

