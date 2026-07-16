# 버전 히스토리 (Version History)

날짜별 주요 수정 내용 요약입니다. (최신순)

## 2026-07-16
- 새 포트폴리오 항목 **"북 / Book Design"** 추가 (`images/Portfolio/10book2`, 한글 PNG → ASCII 파일명 webp 12장으로 변환, 34MB→0.7MB)
- 포트폴리오 상위 3개 라벨에 **"아티스트 / Artist"** 접두어 추가
- **한국어/영어 언어 전환(KO|EN 토글)** 도입 — 히어로·Our Brands·서비스·포트폴리오, 상단 네비 우측 버튼, localStorage 저장
- 영문 시 브랜드명 **KLANG PUBLISHING** 표시
- 클라이언트 로고 추가: **EPASS, Minari** (6칸 그리드에 맞춰 정렬, 자리표시로 컬럼 정렬)
- 인라인 스크립트를 외부 파일로 분리 (`js/portfolio-modal.js`, `js/portfolio-loader.js`, `js/lang-toggle.js`) — 파일 잘림 위험 감소
- 포트폴리오 카드 제목 상시 표시, hover 색상변화 제거, 그림자 미니멀화, 그라디언트 완화

## 2026-06-23
- **포트폴리오 데이터화**: 하드코딩 → `portfolio.json`/`portfolio.js` 기반 자동 생성 (코드 수정 없이 항목 추가 가능)
- **CMS(Sveltia) 도입**: `/admin` 관리자 화면, GitHub 로그인(Cloudflare Worker), `HOW_TO_ADD_PORTFOLIO.md`·`CMS_SETUP_GUIDE.md` 작성
- 이미지 WebP 최적화(포트폴리오 63MB→5.7MB), 미사용 이미지 정리
- 푸터 우측 하단으로 "맨 위로" 버튼 이동·축소, ADMIN 링크 추가
- 팀 소개 섹션 삭제

## 2026-06-22
- **Our Brands 섹션 신설**: Psalms Design / 도서출판 클랑 로고(브랜드 가이드 PDF에서 추출)·슬로건·철학 문구, 2단 배치
- **히어로 리디자인**: 배경 통일로 로고 점프 제거, 크로스페이드+Ken Burns, 전환 시 기하학 라인 애니메이션, 버튼 제거
- 대시보드 톤에 맞춰 둥근 모서리·알약형 버튼·여백·섹션 배경 정리
- 대표 이메일(`psalms.klang@gmail.com`)·전화·주소 추가, 푸터 Contact 정리, 메일 아이콘 링크 변경
- SEO/정리: `<html lang="ko">`, sitemap 정리(가짜 URL 제거·갱신), og:image 크기 수정, 불필요 파일 삭제, 로고/폰트/색상 조정

## (이전) 초기
- FreeHTML5 "Neat" 템플릿 기반의 샴디자인 소개 사이트
