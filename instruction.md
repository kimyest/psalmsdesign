# 샴디자인 웹사이트 (psalmsdesign.co.kr) — 유지관리 안내

## 개요
- **정적 웹사이트**, GitHub Pages 호스팅 (`kimyest/psalmsdesign`, `master` 브랜치)
- 커스텀 도메인: **psalmsdesign.co.kr** (`CNAME`)
- 한국어/영어 **언어 전환** 지원
- 별도 빌드 과정 없음 (파일을 그대로 배포)

## 파일 구조
- `index.html` — 메인 페이지 (한 페이지 구조 + 포트폴리오 모달)
- `css/style.css` — 전체 스타일
- `js/` — 스크립트
  - `main.js` — 테마 기본(슬라이더, 메뉴 등)
  - `portfolio-modal.js` — 포트폴리오 클릭 시 슬라이드쇼 모달
  - `portfolio-loader.js` — 포트폴리오 카드 자동 생성
  - `lang-toggle.js` — 한/영 언어 전환
- `portfolio.json` — **포트폴리오 데이터** (라이브 사이트·CMS가 읽음)
- `portfolio.js` — 포트폴리오 로컬 미리보기용 폴백 데이터
- `images/` — 이미지 (`Portfolio/`, `clients/` 등)
- `admin/` — 콘텐츠 관리자(CMS) 화면

## 포트폴리오 추가/수정
자세한 방법은 **`HOW_TO_ADD_PORTFOLIO.md`** 참고.
- **방법 1**: `portfolio.js` / `portfolio.json`의 목록에 항목 추가
- **방법 2**: CMS(`/admin`)에서 웹 폼으로 추가 (코드 불필요)
- 라벨 형식은 `"한글 / English"` — 언어 전환 시 자동으로 나뉨 (예: `"북 / Book Design"`)
- 이미지: **webp 권장**(용량↓), **ASCII 파일명 권장**(한글·대괄호 파일명은 URL 접근 문제 소지 → `10_0.webp`처럼)
- 첫 번째 이미지가 카드 썸네일

## 콘텐츠 관리자 (CMS)
- 주소: **https://psalmsdesign.co.kr/admin/**
- 설정 방법: **`CMS_SETUP_GUIDE.md`** 참고 (Sveltia CMS + Cloudflare Worker로 GitHub 로그인)
- CMS로 저장하면 자동으로 깃에 커밋됨

## 언어 전환 (KO / EN)
- 상단 네비 우측의 **`KO | EN`** 토글
- 전환할 텍스트를 다음처럼 감싸면 자동 전환됨:
  ```html
  <span class="i18n-ko">한글</span><span class="i18n-en">English</span>
  ```
- 동작: `body.lang-en` 클래스로 전환, 선택은 `localStorage`에 저장
- CSS 규칙은 `css/style.css`의 i18n 섹션(`.i18n-ko` / `.i18n-en`, `!important`로 우선순위 확보)
- 기본 언어: **한국어**

## 클라이언트 로고
- `index.html`의 `client-logo-scroll` 안에 항목 추가:
  ```html
  <div class="client-logo-item"><img src="images/clients/파일.png" alt="Client N"></div>
  ```
- 가로 6개 정렬. 마지막 줄이 6개가 안 되면 **빈 자리표시**(`visibility:hidden`)를 채워 위 로고들과 컬럼을 맞춤
- 로고가 너무 크면 `<img ... style="max-width:72%; max-height:72%;">` 로 조절

## 배포 (GitHub Desktop)
1. **Changes** 탭에서 변경 확인 → 커밋 메시지 입력 → **Commit to master**
2. **Push origin**
3. 1~2분 뒤 psalmsdesign.co.kr 반영 → **Ctrl+Shift+R**(강력 새로고침)로 확인
- CMS로 저장하면 원격에 커밋이 생기므로, 다음엔 **Fetch → Pull → Push** 순서로 진행

## 주의사항
- **`index.html` 끝부분 잘림**: 편집기 자동저장/브라우저 라이브프리뷰가 파일을 잡고 있으면 저장 시 파일 끝(`</html>`)이 잘리는 현상이 있었음. **푸시 전 항상 파일 끝이 `</html>`로 끝나는지 확인.**
- 이미지 최적화: 긴 변 2000px, WebP 품질 82 권장 (포트폴리오 대용량 이미지는 반드시 변환)
