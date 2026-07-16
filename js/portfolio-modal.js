    // 언어별 타이틀 설정
    function setLanguageSpecificTitle() {
      const titleElement = document.getElementById('dynamic-title');
      const userLanguage = navigator.language || navigator.userLanguage;
      
      // 한국어 사용자 (ko, ko-KR)
      if (userLanguage.startsWith('ko')) {
        titleElement.textContent = '샴디자인 (Psalms Design)';
      } 
      // 영어 사용자 (en, en-US, en-GB 등)
      else if (userLanguage.startsWith('en')) {
        titleElement.textContent = 'Psalms Design';
      }
      // 기타 언어 사용자 (독일어, 프랑스어 등)
      else {
        titleElement.textContent = 'Psalms Design';
      }
    }
    
    // 페이지 로드 시 언어별 타이틀 설정
    document.addEventListener('DOMContentLoaded', setLanguageSpecificTitle);
    
    let currentSlide = 0;
    let images = [];
    
    // Client Logo Variables (simplified)
    let clientLogosAnimated = false;

    function openModal(portfolioItem) {
      const modal = document.getElementById('portfolio-modal');
      const modalImage = document.getElementById('modal-image');
      const modalTitle = document.getElementById('modal-title');
      const modalDescription = document.getElementById('modal-description');
      const dotsContainer = document.querySelector('.dots');
      
      // 데이터 가져오기
      images = JSON.parse(portfolioItem.dataset.images);
      modalDescription.innerHTML = portfolioItem.dataset.description;
      var _en = document.body.classList.contains('lang-en');
      window.modalLabel = (_en ? (portfolioItem.dataset.labelEn||portfolioItem.dataset.label) : (portfolioItem.dataset.labelKo||portfolioItem.dataset.label)) || '';
      
      // 도트 생성
      dotsContainer.innerHTML = '';
      for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = function() { showSlide(i); };
        dotsContainer.appendChild(dot);
      }
      
      // 첫 번째 이미지 표시
      currentSlide = 0;
      showSlide(currentSlide);
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      // 모든 이미지 사전 로딩 (백그라운드에서)
      setTimeout(() => {
        images.forEach((src, index) => {
          if (index > 0) { // 첫 번째는 이미 로드됨
            const img = new Image();
            img.src = src;
          }
        });
      }, 100);
    }

    function showSlide(n) {
      const modalImage = document.getElementById('modal-image');
      const modalTitle = document.getElementById('modal-title');
      const dots = document.querySelectorAll('.dot');
      
      // 순환 로직 수정
      if (n >= images.length) {
        currentSlide = 0;
      } else if (n < 0) {
        currentSlide = images.length - 1;
      } else {
        currentSlide = n;
      }
      
      const currentFile = images[currentSlide];
      
      // 이미지별 제목 설정
      let imageTitle = '';
      
      // 즉시 이미지 표시 (로딩 지연 없이)
      modalImage.style.display = 'block';
      modalImage.src = currentFile;
      
      if (currentFile.includes('1goods/1_0.jpg') || currentFile.includes('1goods/1_1.jpg')) {
        imageTitle = 'TWICE Season\'s Greeting Japan';
      } else if (currentFile.includes('1goods/1_2.jpg') || currentFile.includes('1goods/1_3.jpg') || currentFile.includes('1goods/1_4.jpg')) {
        imageTitle = 'Stray Kids Season\'s Greetings Japan';
      } else if (currentFile.includes('1goods/1_5.jpg') || currentFile.includes('1goods/1_6.jpg')) {
        imageTitle = 'NiziU Season\'s Greetings';
      } else if (currentFile.includes('1goods/1_7.jpg') || currentFile.includes('1goods/1_8.jpg')) {
        imageTitle = 'TWICE Japan Debut 5th Anniversary';
      } else if (currentFile.includes('1goods/1_9.jpg') || currentFile.includes('1goods/1_10.jpg')) {
        imageTitle = 'TWICE Season\'s Greetings Japan';
      } else if (currentFile.includes('1goods/1_11.jpg') || currentFile.includes('1goods/1_12.jpg')) {
        imageTitle = 'Stray Kids Season\'s Greetings Japan';
      } else if (currentFile.includes('1goods/1_13.jpg') || currentFile.includes('1goods/1_14.jpg')) {
        imageTitle = 'NiziU Season\'s Greetings';
      } else if (currentFile.includes('1goods/1_15.jpg') || currentFile.includes('1goods/1_16.jpg')) {
        imageTitle = 'TWICE Japan Debut 5th Anniversary Book';
      } else if (currentFile.includes('2album/2_0.jpg') || currentFile.includes('2album/2_1.jpg')) {
        imageTitle = '13 Found 1st Mini Album';
      } else if (currentFile.includes('2album/2_2.jpg') || currentFile.includes('2album/2_3.jpg')) {
        imageTitle = 'OBON 1st EP Album';
      } else if (currentFile.includes('2album/2_4.jpg') || currentFile.includes('2album/2_5.jpg')) {
        imageTitle = '20th Century Boy\'z Album';
      } else if (currentFile.includes('2album/2_6.jpg') || currentFile.includes('2album/2_7.jpg')) {
        imageTitle = 'NND 1st Album';
      } else if (currentFile.includes('2album/2_8.jpg')) {
        imageTitle = 'Cross Gene Album';
      } else if (currentFile.includes('2album/2_9.jpg')) {
        imageTitle = 'Jun.K(from 2PM) 5th Mini Album';
      } else if (currentFile.includes('2album/2_10.jpg')) {
        imageTitle = 'Junho(from 2PM) Solo Tour';
      } else if (currentFile.includes('2album/2_11.jpg')) {
        imageTitle = '100% Sunshine Album';
      } else if (currentFile.includes('2album/2_12.jpg')) {
        imageTitle = 'Up10tion Laberinto Album';
      } else if (currentFile.includes('2album/2_13.jpg')) {
        imageTitle = 'TeenTop Natural Born Album';
      } else if (currentFile.includes('2album/2_14.jpg')) {
        imageTitle = 'TeenTop No.1 Repackage Album';
      } else if (currentFile.includes('2album/2_15.jpg')) {
        imageTitle = 'Kangnam Chocolate Album';
      } else if (currentFile.includes('2album/2_16.jpg')) {
        imageTitle = 'Niel 1st Spring Love Album';
      } else if (currentFile.includes('2album/2_17.jpg')) {
        imageTitle = 'Cho Yong Pil (조용필) 40th The History Album & DVD';
      } else if (currentFile.includes('2album/2_18.jpg')) {
        imageTitle = 'Girl\'s Day Summer Party Album';
      } else if (currentFile.includes('2album/2_19.jpg')) {
        imageTitle = 'Lee Jinhyuk 1st Solo Album';
      } else if (currentFile.includes('3book/0.jpg')) {
        imageTitle = '2PM 우영,닉쿤 一人旅(히토리타비) Photo Book';
      } else if (currentFile.includes('3book/1.jpg')) {
        imageTitle = '2PM 준호 一人旅(히토리타비) Photo Book';
      } else if (currentFile.includes('3book/2.jpg')) {
        imageTitle = '2PM 준호 Solo Tour Making Book';
      } else if (currentFile.includes('3book/3.jpg')) {
        imageTitle = '2PM Making Photo Book';
      } else if (currentFile.includes('3book/4.jpg')) {
        imageTitle = 'GOT7 Photo Book';
      } else if (currentFile.includes('3book/5.jpg')) {
        imageTitle = '<二度目の初恋!? がやってきた> Making Story Photo Book';
      } else if (currentFile.includes('3book/6.jpg')) {
        imageTitle = 'TWICE Artist Making Book';
      } else if (currentFile.includes('3book/7.jpg')) {
        imageTitle = '2PM Private Photo Book';
      } else if (currentFile.includes('3book/8.jpg')) {
        imageTitle = '인피니트 엘 Photo Book';
      } else if (currentFile.includes('3book/9.jpg')) {
        imageTitle = '2PM 3!9! Book';
      } else if (currentFile.includes('3book/10.jpg')) {
        imageTitle = '2PM 3!9! Book';
      } else if (currentFile.includes('4poster/0.jpg')) {
        imageTitle = '비엔나 한국문화원 Auftakt 콘서트';
      } else if (currentFile.includes('4poster/1.jpg')) {
        imageTitle = '비엔나 한국문화원 Auftakt 콘서트';
      } else if (currentFile.includes('4poster/2.jpg')) {
        imageTitle = '13Found Debut Showcase in Seoul';
      } else if (currentFile.includes('4poster/3.jpg')) {
        imageTitle = 'CrossGene 팬미팅 미니콘서트';
      } else if (currentFile.includes('4poster/4.jpg')) {
        imageTitle = 'SBS드라마스페셜 OST 포스터';
      } else if (currentFile.includes('4poster/5.jpg')) {
        imageTitle = '광명동굴 국제판타지 공모전';
      } else if (currentFile.includes('4poster/6.jpg')) {
        imageTitle = 'CrossGene Shin 할로윈파티';
      } else if (currentFile.includes('6magazine/0.jpg') || currentFile.includes('6magazine/1.jpg') || currentFile.includes('6magazine/2.jpg')) {
        imageTitle = 'SBS 인기가요 매거진(2010~2012)';
      } else if (currentFile.includes('6magazine/3.jpg') || currentFile.includes('6magazine/4.jpg') || currentFile.includes('6magazine/5.jpg')) {
        imageTitle = 'GanGee 매거진(2014~2015)';
      } else if (currentFile.includes('5exibition/5_0.jpg') || currentFile.includes('5exibition/5_1.jpg') || currentFile.includes('5exibition/5_2.jpg') || currentFile.includes('5exibition/5_3.jpg')) {
        imageTitle = 'WETA Workshop FANTASY Exhibition';
      } else {
        // 기본 제목 (포트폴리오 카테고리별)
        if (currentFile.includes('1goods/')) {
          imageTitle = 'Goods Design';
        } else if (currentFile.includes('2album/')) {
          imageTitle = 'Album Design';
        } else if (currentFile.includes('3book/')) {
          imageTitle = 'Book Design';
        } else if (currentFile.includes('4poster/')) {
          imageTitle = 'Poster Design';
        } else if (currentFile.includes('5exibition/')) {
          imageTitle = 'Exhibition Design';
        } else if (currentFile.includes('6magazine/')) {
          imageTitle = 'Magazine Design';
        } else if (currentFile.includes('7textbook/')) {
          imageTitle = 'Textbook Design';
        } else if (currentFile.includes('8manual/')) {
          imageTitle = 'Manual Design';
        } else if (currentFile.includes('9report/')) {
          imageTitle = 'Report Design';
        }
      }
      
      // 제목 업데이트
      modalTitle.textContent = (window.modalLabel || imageTitle);
      
      // 도트 업데이트
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
      
      // 다음/이전 이미지 사전 로딩 (백그라운드에서)
      const nextIndex = (currentSlide + 1) % images.length;
      const prevIndex = (currentSlide - 1 + images.length) % images.length;
      
      // 백그라운드에서 미리 로드
      setTimeout(() => {
        const nextImg = new Image();
        nextImg.src = images[nextIndex];
        const prevImg = new Image();
        prevImg.src = images[prevIndex];
      }, 10);
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // 모달 닫기
    document.querySelector('.close').onclick = function() {
      document.getElementById('portfolio-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // 배경 클릭으로 닫기
    document.getElementById('portfolio-modal').onclick = function(e) {
      if (e.target === this) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }

    // 화살표 버튼 이벤트
    document.querySelector('.prev').onclick = prevSlide;
    document.querySelector('.next').onclick = nextSlide;

    // 키보드 이벤트
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('portfolio-modal');
      if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') {
          if (isZoomed) {
            // 확대된 상태에서 ESC 키 누르면 확대 해제
            currentScale = 1;
            isZoomed = false;
            translateX = 0;
            translateY = 0;
            modalImage.style.cursor = 'pointer';
            updateImageTransform();
          } else {
            // 확대되지 않은 상태에서 ESC 키 누르면 모달 닫기
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
          }
        }
      }
    });

    // 모바일 스와이프 기능
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // 터치 시작 이벤트
    document.addEventListener('touchstart', function(e) {
      const modal = document.getElementById('portfolio-modal');
      if (modal.style.display === 'block') {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }
    }, false);

    // 터치 종료 이벤트
    document.addEventListener('touchend', function(e) {
      const modal = document.getElementById('portfolio-modal');
      if (modal.style.display === 'block') {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
      }
    }, false);

    // 스와이프 처리 함수
    function handleSwipe() {
      const minSwipeDistance = 50; // 최소 스와이프 거리
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // 수평 스와이프가 수직 스와이프보다 클 때만 처리
      if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
        if (deltaX > 0) {
          // 오른쪽으로 스와이프 - 이전 이미지
          prevSlide();
        } else {
          // 왼쪽으로 스와이프 - 다음 이미지
          nextSlide();
        }
      }
      // 수직 스와이프 처리 (위/아래)
      else if (absDeltaY > absDeltaX && absDeltaY > minSwipeDistance) {
        if (deltaY > 0) {
          // 아래로 스와이프 - 이전 이미지
          prevSlide();
        } else {
          // 위로 스와이프 - 다음 이미지
          nextSlide();
        }
      }
    }

    // PC 이미지 확대/축소 및 드래그 기능
    let isZoomed = false;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    let currentScale = 1;
    const modalImage = document.getElementById('modal-image');

    // 이미지 클릭 이벤트 (확대/축소)
    modalImage.addEventListener('click', function(e) {
      // 모바일에서는 확대 기능 비활성화
      if ('ontouchstart' in window) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      if (!isZoomed) {
        // 확대
        currentScale = 2.5;
        isZoomed = true;
        translateX = 0;
        translateY = 0;
        this.style.cursor = 'grab';
      } else {
        // 축소
        currentScale = 1;
        isZoomed = false;
        translateX = 0;
        translateY = 0;
        this.style.cursor = 'pointer';
      }
      
      updateImageTransform();
    });

    // 마우스 다운 이벤트 (드래그 시작)
    modalImage.addEventListener('mousedown', function(e) {
      if (!isZoomed || 'ontouchstart' in window) return;
      
      e.preventDefault();
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      this.style.cursor = 'grabbing';
    });

    // 마우스 무브 이벤트 (드래그 중)
    document.addEventListener('mousemove', function(e) {
      if (!isDragging || !isZoomed) return;
      
      e.preventDefault();
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      
      // 드래그 범위 제한
      const maxTranslateX = (currentScale - 1) * modalImage.offsetWidth / 2;
      const maxTranslateY = (currentScale - 1) * modalImage.offsetHeight / 2;
      
      translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
      translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));
      
      updateImageTransform();
    });

    // 마우스 업 이벤트 (드래그 종료)
    document.addEventListener('mouseup', function() {
      if (isDragging) {
        isDragging = false;
        modalImage.style.cursor = 'grab';
      }
    });

    // 이미지 변환 업데이트 함수
    function updateImageTransform() {
      modalImage.style.transform = `scale(${currentScale}) translate(${translateX / currentScale}px, ${translateY / currentScale}px)`;
      modalImage.style.transition = 'none';
    }



    // 이미지 변경 시 확대 상태 초기화
    function resetZoom() {
      currentScale = 1;
      isZoomed = false;
      translateX = 0;
      translateY = 0;
      modalImage.style.cursor = 'pointer';
      modalImage.style.transform = 'scale(1) translate(0px, 0px)';
      modalImage.style.transition = 'none';
    }

    // showSlide 함수 수정 - 이미지 변경 시 확대 상태 초기화
    const originalShowSlide = showSlide;
    showSlide = function(n) {
      originalShowSlide(n);
      resetZoom();
    };
    
    // Client Logo Scroll Functions
    // Client logo scroll function (simplified - no horizontal scrolling needed)
    function scrollClients(direction) {
      // Function kept for compatibility but horizontal scrolling disabled
      // as per user requirement
    }
    

    
    // Mouse/Touch Drag Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const scrollContainer = document.querySelector('.client-logo-scroll');
      if (!scrollContainer) return;
      
      // Check if device is mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Desktop: No drag functionality needed (horizontal scrolling disabled)
      // Mobile: Normal scrolling enabled
      
      // Mobile: Disable touch drag to allow normal scrolling
      // Touch events are not added for mobile devices
      
      // Add click event listeners for navigation arrows (both desktop and mobile)
      const leftArrow = document.querySelector('.client-nav-left');
      const rightArrow = document.querySelector('.client-nav-right');
      
      if (leftArrow) {
        leftArrow.addEventListener('click', function() {
          scrollClients('left');
        });
      }
      
      if (rightArrow) {
        rightArrow.addEventListener('click', function() {
          scrollClients('right');
        });
      }
    });
    

    
    // Show client logos immediately without animation
    function showClientLogos() {
      if (clientLogosAnimated) return;
      
      const clientLogos = document.querySelectorAll('.client-logo-item');
      if (clientLogos.length === 0) return;
      
      const container = document.querySelector('.client-logo-container');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        clientLogosAnimated = true;
        
        // Show all logos immediately without delay
        clientLogos.forEach((logo) => {
          logo.classList.add('animate');
        });
      }
    }
    
    // Add scroll event listener for client logo display
    window.addEventListener('scroll', showClientLogos);
    window.addEventListener('load', showClientLogos);
  
