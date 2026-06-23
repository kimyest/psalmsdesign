# 포트폴리오 추가 방법

이제 `index.html` 코드를 수정하지 않고, **`portfolio.js` 파일만 편집**하면 포트폴리오가 자동으로 화면에 생성됩니다.

`portfolio.js`는 이렇게 생겼습니다:

```js
window.PORTFOLIO = [
  { ... },
  { ... }
];
```

대괄호 `[ ... ]` 안의 목록만 편집하면 됩니다. (맨 위 `window.PORTFOLIO =` 와 맨 끝 `;` 는 지우지 마세요.)

## 새 작업 추가하는 법

1. **이미지 업로드**
   `images/Portfolio/` 아래에 새 폴더를 만들고 이미지를 넣습니다.
   예: `images/Portfolio/10newproject/0.webp, 1.webp, 2.webp ...`
   (가능하면 webp 권장 — 용량이 작아 빠릅니다)

2. **`portfolio.js`에 항목 추가**
   목록 맨 끝(또는 원하는 위치)에 아래 형식으로 한 덩어리를 추가합니다.

   ```js
   {
     "label": "신규 / New Design",
     "title": "New Design",
     "description": "Various New Design Projects",
     "alt": "신규 디자인 포트폴리오",
     "folder": "images/Portfolio/10newproject",
     "images": ["0.webp", "1.webp", "2.webp"]
   }
   ```

   - `label` : 카드 위에 표시되는 제목 (한글 / 영문)
   - `title` / `description` : 클릭 시 열리는 모달에 쓰임
   - `alt` : 접근성·SEO용 대체 텍스트
   - `folder` : 이미지 폴더 경로
   - `images` : 폴더 안 파일 이름들. **첫 번째 이미지가 썸네일**이 됩니다.

3. **저장 후 커밋·푸시** → 사이트에 자동 반영됩니다.

## 주의

- 항목 사이에는 쉼표(`,`)를 넣어야 하고, **마지막 항목 뒤에는 쉼표를 넣지 않습니다.**
- 카드는 3개씩 한 줄로 자동 배치됩니다.
- 따옴표(`"`)는 그대로 유지하세요. 한글·영문 모두 큰따옴표로 감쌉니다.
- 이 방식은 로컬에서 `index.html`을 더블클릭해도, 배포 사이트에서도 모두 정상 동작합니다.
