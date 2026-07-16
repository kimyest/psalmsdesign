# ClaudeInstruction.md — 프로젝트 인수인계 (다음 Claude용)

> 이 문서는 다른 Claude가 이 프로젝트를 **이어서 진행**할 수 있도록 정리한 핸드오프 노트입니다.
> 작업 시작 전 이 문서 + `HOW_TO_ADD_PORTFOLIO.md` + `CMS_SETUP_GUIDE.md`를 먼저 읽으세요.

## 0. 가장 중요한 주의사항 (반드시 지킬 것)
1. **`index.html`은 파일 편집 도구(Edit/Write)로 저장하면 파일 끝(`</html>`)이 잘리는 현상**이 반복 발생함.
   → **`index.html` 수정은 반드시 파이썬(bash)으로** 하세요. 예:
   ```python
   d=open('index.html',encoding='utf-8').read(); d=d.replace(old,new); open('index.html','w',encoding='utf-8',newline='').write(d)
   ```
   파이썬 저장은 정상 유지됨. Edit/Write 도구 저장은 끝이 잘림.
2. **모든 index.html 수정 후** `grep -c '</html>' index.html` 로 끝이 살아있는지 확인.
   잘렸다면 마지막 `<script src="portfolio.js"></script>` 뒤로 loader/lang 스크립트 + `</body></html>`를 복구.
3. 사용자는 **한국어**로 소통. 간결하게 응답.
4. 배포는 사용자가 GitHub Desktop으로 직접 커밋·푸시. Claude는 파일만 수정.

## 1. 프로젝트 개요
- 정적 사이트, **GitHub Pages** 호스팅. 저장소 `kimyest/psalmsdesign`, 브랜치 `master`.
- 도메인 **psalmsdesign.co.kr** (`CNAME`). 빌드 과정 없음.
- 한/영 언어 전환 지원. 기본 한국어.
- 작업 폴더(사용자 PC): `E:\gitHub\psalmsdesign`

## 2. 구조
- `index.html` — 단일 페이지 (히어로 / Our Brands / 서비스 / 포트폴리오 / 클라이언트 로고 / 푸터 + 포트폴리오 모달)
- `css/style.css` — 전체 스타일. 세션 중 추가한 규칙은 파일 하단에 주석과 함께 append 되어 있음.
- `js/main.js`(테마), `js/portfolio-modal.js`(모달/슬라이드쇼), `js/portfolio-loader.js`(카드 생성), `js/lang-toggle.js`(언어 전환)
- `portfolio.json` — 포트폴리오 데이터(라이브·CMS가 읽음). `{ "items": [ ... ] }`
- `portfolio.js` — 로컬(file://) 미리보기용 폴백. `window.PORTFOLIO = [ ... ]`. **portfolio.json과 항상 동기화**할 것.
- `admin/` — Sveltia CMS (config.yml, index.html)

## 3. 언어 전환 (KO/EN) — 규칙
- 토글 버튼: 상단 네비 우측 `KO | EN` (`.lang-toggle`).
- 전환 텍스트는 `<span class="i18n-ko">한글</span><span class="i18n-en">영문</span>` 로 감쌈.
- `body.lang-en` 클래스로 전환. `localStorage('siteLang')` 저장. 로직은 `js/lang-toggle.js`.
- CSS(style.css): `.i18n-en{display:none !important} body.lang-en .i18n-ko{display:none !important} body.lang-en .i18n-en{display:inline !important}`.
  `!important`는 `.fh5co-heading span{display:block}` 등과의 우선순위 충돌 때문에 필수.
- 전환 적용된 영역: 히어로 4슬라이드, Our Brands(부제목·슬로건·철학·클랑 브랜드명), 서비스 3카드, 포트폴리오(카드 라벨·설명·클라이언트 부제목).
- 포트폴리오 카드 라벨은 로더가 `"한글 / English"`를 ` / ` 기준으로 나눠 자동 i18n 처리. 모달 제목도 현재 언어 따라감.

## 4. 포트폴리오
- 데이터: `portfolio.json`(+동기화된 `portfolio.js`). 항목 = `{label,title,description,alt,images:[전체경로...]}`.
- `HOW_TO_ADD_PORTFOLIO.md` 참고. 이미지는 **webp + ASCII 파일명** 권장(한글 파일명은 URL 문제).
  대용량 원본은 긴 변 2000px·webp q82로 변환 후 원본 삭제(파일 삭제는 `allow_cowork_file_delete` 도구로 권한 요청).
- 카드 순서 = items 순서. 3개씩 한 줄.

## 5. CMS
- `/admin` (Sveltia). GitHub 버튼 로그인(Cloudflare Worker `sveltia-cms-auth.kimyest.workers.dev`). `admin/config.yml`에 base_url 설정됨.
- CMS로 저장하면 원격 master에 직접 커밋 → 사용자는 다음 로컬 작업 전 **Fetch→Pull** 필요(안 그러면 push 충돌).

## 6. 클라이언트 로고
- `client-logo-scroll` 안 `.client-logo-item`. 가로 6개 flex 가운데정렬.
- 마지막 줄이 6개 미만이면 `visibility:hidden` 자리표시로 6칸 채워 위 컬럼과 정렬 맞춤.
- 로고가 크면 `<img style="max-width:72%;max-height:72%;">`.

## 7. 자주 하는 작업 요령
- 이미지 최적화: Python PIL로 webp 변환(q82, 2000px cap).
- 파일 삭제: bash `rm`이 "Operation not permitted"면 `mcp__cowork__allow_cowork_file_delete` 호출 후 재시도.
- 웹 검색/현재정보 필요 시 WebSearch(ToolSearch로 로드).

## 8. 현재 상태 (2026-07-16 기준)
- 언어 전환, CMS, 포트폴리오 JSON화, 인라인 스크립트 외부화 완료.
- 포트폴리오 10개(마지막 "북 / Book Design" = 10book2).
- 클라이언트 로고 20개(EPASS, Minari 포함).
- 자세한 변경 이력은 `Versionhistory.md` 참고.
