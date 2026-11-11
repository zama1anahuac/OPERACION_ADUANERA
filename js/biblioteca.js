/* Biblioteca documental independiente · archivos locales sin backend ni tokens. */
(() => {
  'use strict';
  const all=window.EXPEDIENTE?.inventory||[];
  const q=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const root=q('#library-grid');if(!root)return;
  const catNames={comerciales:'Transacción comercial',transporte:'Transporte y logística',aduaneros:'Documentación aduanera',regulatorios:'Regulación y NOM',complementarios:'Complementarios'};
  const category=q('#library-category'),search=q('#library-search'),empty=q('#library-empty');
  const modal=q('#file-modal'),body=q('#file-modal-body'),fileTitle=q('#file-modal-title');
  let priorFocus=null;
  function clean(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
  function source(id){return window.EXPEDIENTE.documents.find(d=>d.id===id)}
  function render(){const c=category.value,txt=clean(search.value.trim());const rows=all.map((x,i)=>({...x,_idx:i})).filter(x=>(c==='all'||x.category===c)&&clean([x.originalName,x.role,x.category,source(x.ficheId)?.name,source(x.ficheId)?.reference].join(' ')).includes(txt));
    q('#library-count').textContent=String(all.length);empty.hidden=rows.length>0;
    root.innerHTML=rows.map(x=>{const d=source(x.ficheId),label=d?.number||String(x.ficheId);
      const image=x.thumbnail?`<img src="${esc(x.thumbnail)}" alt="Primera página de ${esc(x.originalName)}" loading="lazy">`:x.mime.startsWith('image/')?`<img src="${esc(x.local)}" alt="Vista previa de ${esc(x.originalName)}" loading="lazy">`:x.mime.includes('wordprocessingml')?'<div class="library-file-type">DOCX</div>':'<div class="library-file-type">PDF</div>';
      const prettySize=x.bytes>1000000?`${(x.bytes/1048576).toFixed(1)} MB`:`${Math.ceil(x.bytes/1024)} KB`;
      return `<article class="library-card"><div class="library-cover">${image}<span class="library-stamp">${esc(label)}</span></div><div class="library-content"><span class="library-category">${esc(catNames[x.category]||x.category)}</span><h3 title="${esc(x.originalName)}">${esc(x.originalName)}</h3><p>${esc(x.role)}</p><div class="library-meta"><span>${esc(x.mime.split('/').at(-1).includes('wordprocessing')?'DOCX':x.mime.split('/').at(-1).toUpperCase())}</span><span>${prettySize}</span><span>${x.derived?'MODELO':'DRIVE'}</span></div><div class="library-actions"><button type="button" class="library-view" data-library-view="${x._idx}">Ver documento ↗</button><a href="${esc(x.local)}" download>Descargar ↓</a><a href="ficha.html?id=${x.ficheId}">Ficha ${esc(label)} ↗</a></div></div></article>`
    }).join('');
  }
  function show(index){const x=all[index];if(!x)return;priorFocus=document.activeElement;
    const d=source(x.ficheId);fileTitle.textContent=x.originalName;
    let url=x.local;
    if(x.mime.includes('wordprocessingml')){url=(d?.attachments||[]).find(a=>a.local===x.local)?.previewLocal||null;}
    body.innerHTML=url?(x.mime.startsWith('image/')?`<img src="${esc(url)}" alt="${esc(x.originalName)}">`:`<iframe src="${esc(url)}#toolbar=1" title="Visor de ${esc(x.originalName)}"></iframe>`):'<div class="library-unavailable">Este archivo editable no tiene vista PDF. Puedes descargarlo y abrirlo en tu editor de documentos.</div>';
    q('#file-modal-download').href=x.local;q('#file-modal-ficha').href=`ficha.html?id=${x.ficheId}`;
    modal.hidden=false;document.body.classList.add('modal-open');q('.file-modal-close').focus();
  }
  function close(){if(modal.hidden)return;modal.hidden=true;document.body.classList.remove('modal-open');body.innerHTML='';priorFocus?.focus?.()}
  root.addEventListener('click',e=>{const b=e.target.closest('[data-library-view]');if(b)show(Number(b.dataset.libraryView))});
  modal.addEventListener('click',e=>{if(e.target.closest('[data-file-close]'))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});
  search.addEventListener('input',render);category.addEventListener('change',render);render();
})();
