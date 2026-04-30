## NEXTAI Studio (mowrix) Landing Page

바이브코딩 입문자를 위한 AI 에이전트 기반 앱 개발 에이전시 소개용 **싱글 페이지(One-page Landing)** 입니다.  
구현은 `HTML + CSS + JavaScript`만 사용하며, 외부 프레임워크/빌드 도구 없이 동작합니다.

---

### 주요 기능

1. **테마 전환 (Light / Dark)**
   - `prefers-color-scheme` 기반으로 초기 테마 설정
   - 사용자의 선택은 `localStorage`에 저장 후 유지

2. **다국어 보기 (ko / en / ja)**
   - 상단 메뉴의 `KO / EN / JA` 버튼으로 텍스트 전환
   - `data-i18n` 속성 키를 기준으로 `script.js`의 i18n 사전에서 치환

3. **하단 고객 문의 폼 + 메일 전송(mailto)**
   - `#contact` 섹션에 입력 폼을 추가
   - 제출 시 입력 내용을 조합해서 `mailto:`로 전송(메일 앱/웹메일 연동)
   - 수신 주소/메일 제목 템플릿은 `script.js`의 상수로 관리

---

### 파일 구조

- `index.html`
  - 싱글 페이지 섹션 구성: Header / Hero / Value / Process / Cases / Pricing / FAQ / Contact / Footer
  - 언어 전환 버튼(`data-lang`)과 i18n 대상 텍스트(`data-i18n`) 마킹
  - 문의 폼: `#contactForm` + `#contactStatus`

- `styles.css`
  - 다크/라이트 테마용 CSS 변수 토큰 분리
  - 테마 전환을 위해 `:root[data-theme="dark"|"light"]` 사용
  - 카드/버튼/레이아웃/반응형 스타일
  - 문의 폼 및 언어/테마 토글 UI 스타일

- `script.js`
  - 기존 인터랙션: 내비게이션 스크롤 스파이, FAQ 아코디언, 리빌 애니메이션, 클릭 트래킹
  - 추가 기능: 테마 토글, 언어 토글, 문의 폼 submit 처리(mailto 생성)

---

### 실행 방법

로컬에서 아래 파일을 그대로 브라우저로 열면 됩니다.

- `index.html`

---

### 커스터마이징 포인트

- 문의 수신 이메일: `script.js`의 `MAIL_TO`
  - 예: `const MAIL_TO = "admin@mowrix.com";`

