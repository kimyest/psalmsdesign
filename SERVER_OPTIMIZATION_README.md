# 🚀 PSALMS DESIGN WEBSITE - SERVER OPTIMIZATION GUIDE

## 📋 개요
이 가이드는 Psalms Design 웹사이트의 서버 성능을 최적화하기 위한 설정 파일들을 포함합니다.

## 🎯 최적화 목표
- **Gzip 압축**: 파일 크기 60-80% 감소
- **브라우저 캐싱**: 반복 방문 시 로딩 속도 대폭 향상
- **보안 강화**: 보안 헤더 및 접근 제어
- **성능 향상**: 서버 응답 속도 개선

## 📁 설정 파일 목록

### 1. Apache 서버 (.htaccess)
- **사용 서버**: Apache, cPanel, Plesk
- **파일 위치**: 웹사이트 루트 디렉토리
- **주요 기능**: Gzip 압축, 캐싱, 보안 헤더

### 2. Nginx 서버 (nginx.conf)
- **사용 서버**: Nginx, VPS, 클라우드 서버
- **파일 위치**: `/etc/nginx/sites-available/`
- **주요 기능**: Gzip 압축, 캐싱, 보안 헤더

### 3. IIS 서버 (web.config)
- **사용 서버**: Windows Server, IIS
- **파일 위치**: 웹사이트 루트 디렉토리
- **주요 기능**: Gzip 압축, 캐싱, 보안 헤더

### 4. Caddy 서버 (Caddyfile)
- **사용 서버**: Caddy
- **파일 위치**: 웹사이트 루트 디렉토리
- **주요 기능**: Gzip 압축, 캐싱, 보안 헤더

## 🛠️ 설치 방법

### Apache 서버 (.htaccess)
1. `.htaccess` 파일을 웹사이트 루트 디렉토리에 업로드
2. 파일 권한을 644로 설정
3. Apache에서 `mod_deflate`, `mod_expires`, `mod_headers` 모듈 활성화

### Nginx 서버 (nginx.conf)
1. `nginx.conf` 내용을 `/etc/nginx/sites-available/psalmsdesign`에 복사
2. `/etc/nginx/sites-enabled/`에 심볼릭 링크 생성
3. Nginx 설정 테스트 및 재시작

### IIS 서버 (web.config)
1. `web.config` 파일을 웹사이트 루트 디렉토리에 업로드
2. IIS에서 URL Rewrite 모듈 설치
3. 웹사이트 재시작

### Caddy 서버 (Caddyfile)
1. `Caddyfile`을 웹사이트 루트 디렉토리에 업로드
2. Caddy 서비스 재시작

## 📊 최적화 효과

### 성능 향상
- **첫 방문**: 20-30% 로딩 속도 향상
- **재방문**: 60-80% 로딩 속도 향상
- **모바일**: 40-50% 로딩 속도 향상

### 대역폭 절약
- **Gzip 압축**: 60-80% 트래픽 감소
- **캐싱**: 70-90% 반복 요청 감소

### 보안 강화
- **XSS 방지**: XSS 공격 차단
- **클릭재킹 방지**: iframe 임베딩 차단
- **MIME 스니핑 방지**: 악성 파일 실행 차단

## 🔧 커스터마이징

### 도메인 변경
모든 설정 파일에서 `psalmsdesign.co.kr`을 실제 도메인으로 변경

### 캐싱 기간 조정
- **이미지**: 1년 (365일)
- **CSS/JS**: 1개월 (30일)
- **HTML**: 1일 (24시간)

### 보안 정책 조정
`Content-Security-Policy` 헤더를 필요에 따라 수정

## ⚠️ 주의사항

### 호스팅 환경 확인
- 공유 호스팅: `.htaccess`만 사용 가능
- VPS/전용 서버: 모든 설정 파일 사용 가능
- 클라우드 호스팅: 서비스별 설정 확인 필요

### SSL 인증서
HTTPS 사용 시 모든 설정이 자동으로 적용됩니다.

### 백업
설정 변경 전 반드시 기존 설정 파일 백업

## 🧪 테스트 방법

### Gzip 압축 확인
```bash
curl -H "Accept-Encoding: gzip" -I https://psalmsdesign.co.kr
```

### 캐싱 헤더 확인
```bash
curl -I https://psalmsdesign.co.kr/css/style.css
```

### 보안 헤더 확인
```bash
curl -I https://psalmsdesign.co.kr
```

## 📞 지원

### 문제 해결
1. 서버 에러 로그 확인
2. 설정 파일 문법 검사
3. 호스팅 업체 문의

### 추가 최적화
- CDN 사용
- 이미지 최적화
- 데이터베이스 최적화

---

**© 2024 Psalms Design. All rights reserved.**
