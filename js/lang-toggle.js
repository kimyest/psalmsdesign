  (function(){
    function apply(lang){
      document.body.classList.toggle('lang-en', lang === 'en');
      var opts = document.querySelectorAll('.lang-toggle .lang-opt');
      for (var i=0;i<opts.length;i++) opts[i].classList.toggle('active', opts[i].getAttribute('data-lang')===lang);
      try { localStorage.setItem('siteLang', lang); } catch(e){}
    }
    var saved='ko';
    try { saved = localStorage.getItem('siteLang') || 'ko'; } catch(e){}
    apply(saved);
    var opts = document.querySelectorAll('.lang-toggle .lang-opt');
    for (var i=0;i<opts.length;i++){
      opts[i].addEventListener('click', function(){ apply(this.getAttribute('data-lang')); });
    }
  })();
  
