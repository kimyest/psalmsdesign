# 포트폴리오 관리자(CMS) 설정 가이드

코드 없이 웹 화면에서 포트폴리오를 추가·수정·이미지 업로드할 수 있는 **Sveltia CMS**(무료·오픈소스)를 붙여 두었습니다.
관리자 주소는 배포 후 **https://psalmsdesign.co.kr/admin/** 입니다.

로그인 방식은 두 가지입니다. **혼자 관리하신다면 방법 A가 가장 간단합니다.**

---

## 방법 A · 토큰 로그인 (간단, 추천)

Cloudflare Worker나 OAuth 앱 없이, GitHub 토큰 하나만 만들면 됩니다.

### 1) GitHub 토큰 발급 (한 번만)
1. GitHub 로그인 → 오른쪽 위 프로필 → **Settings**
2. 맨 아래 **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
3. 입력값:
   - **Token name**: `Psalms CMS` (아무거나)
   - **Expiration**: 원하는 기간 (예: 1년)
   - **Repository access**: **Only select repositories** → `kimyest/psalmsdesign` 선택
   - **Permissions** → **Repository permissions** → **Contents** 를 **Read and write** 로 설정
4. **Generate token** 클릭 → 나온 토큰 문자열을 복사 (이 화면을 벗어나면 다시 못 봅니다)

### 2) 로그인
1. `https://psalmsdesign.co.kr/admin/` 접속
2. 로그인 화면에서 **토큰(Personal Access Token) 방식**을 선택하고, 위에서 복사한 토큰을 붙여넣기
3. 끝 — 포트폴리오를 편집할 수 있습니다.

> 토큰은 본인 브라우저에만 저장됩니다. 만료되면 같은 방법으로 새로 발급해 다시 붙여넣으면 됩니다.

이 방법은 `admin/config.yml`을 **그대로 두면 됩니다**(추가 설정 없음).

---

## 방법 B · GitHub 버튼 로그인 (여러 명이 쓰거나 더 편한 로그인을 원할 때)

"GitHub로 로그인" 버튼 한 번으로 들어가는 방식입니다. 무료지만 초기 설정이 조금 더 있습니다.

### 1) 인증 중계기(Cloudflare Worker) 배포 — 무료
1. https://workers.cloudflare.com 에서 무료 가입
2. https://github.com/sveltia/sveltia-cms-auth 의 **Deploy to Cloudflare Workers** 버튼으로 배포
3. 배포되면 Worker 주소가 나옵니다: `https://sveltia-cms-auth.<서브도메인>.workers.dev` → 복사

### 2) GitHub OAuth 앱 등록
1. https://github.com/settings/applications/new 접속
2. 입력값:
   - **Application name**: `Psalms Design CMS`
   - **Homepage URL**: `https://psalmsdesign.co.kr`
   - **Authorization callback URL**: `<Worker주소>/callback`
3. 등록 후 **Generate a new client secret** → **Client ID**와 **Client Secret** 복사

### 3) Worker에 값 입력
1. Cloudflare 대시보드 → `sveltia-cms-auth` → **Settings** → **Variables**
2. 환경 변수 추가:
   - `GITHUB_CLIENT_ID` : 위 Client ID
   - `GITHUB_CLIENT_SECRET` : 위 Client Secret (**Encrypt** 눌러 숨김)
   - `ALLOWED_DOMAINS` : `psalmsdesign.co.kr`
3. 저장·배포

### 4) config 수정
`admin/config.yml`에서 아래 줄의 주석(`#`)을 풀고 Worker 주소를 넣으세요:
```yaml
  base_url: https://sveltia-cms-auth.<서브도메인>.workers.dev
```
커밋·푸시 후 `https://psalmsdesign.co.kr/admin/`에서 **GitHub로 로그인** 하면 됩니다.

---

## 포트폴리오 편집 방법 (로그인 후)

1. **포트폴리오 → 포트폴리오 목록** 선택
2. **작업 목록**에서 항목을 추가/수정/순서 변경
3. 각 작업: 카드 제목, 영문 제목, 설명, 이미지(맨 위가 썸네일) 입력 — 이미지는 화면에서 바로 업로드
4. **저장(Publish)** → 자동으로 깃에 반영되고 사이트에 게시됩니다.

## 참고
- 데이터는 `portfolio.json`에 저장되고, 사이트가 이를 읽어 카드를 자동 생성합니다.
- 업로드 이미지는 `images/Portfolio/uploads/`에 저장됩니다.
- 관리자 페이지(`/admin/`)는 검색엔진에 노출되지 않도록 설정해 두었습니다.
