  (function(){
    function imgPath(it, im){
      var f = (typeof im==='string') ? im : (im && (im.image||im.src)) || '';
      if (it.folder && f && f.indexOf('/')===-1) f = it.folder+'/'+f;
      return f;
    }
    function build(items){
      var grid=document.getElementById('portfolio-grid');
      if(!grid||!Array.isArray(items)) return;
      var html='';
      items.forEach(function(it,idx){
        if(idx%3===0) html+=(idx===0?'':'</div>')+'<div class="row">';
        var paths=(it.images||[]).map(function(im){return imgPath(it,im);}).filter(Boolean);
        var thumb=paths[0]||'';
        var data=JSON.stringify(paths).replace(/'/g,'&#39;');
        var lbl=(it.label||''); var lp=lbl.split(' / '); var lko=lp[0]||lbl; var len=lp.slice(1).join(' / ')||lbl;
        html+='<div class="col-md-4 text-center">'
          +'<div class="work" data-images=\''+data+'\' data-title="'+(it.title||'')+'" data-label="'+(it.label||'')+'" data-label-ko="'+lko+'" data-label-en="'+len+'" data-description="'+(it.description||'')+'" onclick="openModal(this)" style="cursor:pointer;">'
          +'<img src="'+thumb+'" alt="'+(it.alt||'')+'" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:1;">'
          +'<div class="desc"><h3><span class="i18n-ko">'+lko+'</span><span class="i18n-en">'+len+'</span></h3></div>'
          +'</div></div>';
      });
      if(items.length) html+='</div>';
      grid.innerHTML=html;
    }
    function pick(d){ return Array.isArray(d) ? d : (d && d.items) || []; }
    // 1) 항상 로컬 데이터(portfolio.js)로 먼저 표시 — 어디서나 동작
    if (window.PORTFOLIO) build(pick(window.PORTFOLIO));
    // 2) 라이브에서는 portfolio.json(CMS 최신)으로 갱신
    fetch('portfolio.json',{cache:'no-cache'})
      .then(function(r){ if(!r.ok) throw 0; return r.json(); })
      .then(function(d){ var it=pick(d); if(it.length) build(it); })
      .catch(function(){});
    // 히어로 스크롤 버튼: Our Brands가 화면 맨 위에 오도록 스크롤
    var hs=document.querySelector('.hero-scroll');
    if(hs) hs.addEventListener('click', function(e){
      e.preventDefault();
      var t=document.getElementById('fh5co-brand');
      if(t){ var y=t.getBoundingClientRect().top+window.pageYOffset; window.scrollTo({top:y, behavior:'smooth'}); }
    });
  })();
  
