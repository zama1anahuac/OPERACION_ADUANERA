(() => {
  'use strict';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const id=Number(new URLSearchParams(window.location.search).get('id')||18);
  const data=window.EXPEDIENTE,doc=data.documents.find(d=>d.id===id),op=data.operation;
  const root=document.querySelector('#print-content');
  if(!doc){root.innerHTML='<h1>Documento no encontrado</h1>';return}
  const specials={18:'PEDIMENTO A1 · BORRADOR DE CAPTURA',16:'TRANSMISIÓN DE VALOR · MODELO DE COVE',33:'DODA · MODELO DE TRABAJO',26:'SERVICIOS DE INSPECCIÓN UVA · MODELO',27:'CERTIFICACIÓN DE ORIGEN · EJERCICIO T-MEC'};
  const th=(a,b)=>`<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td></tr>`;
  const signature=`<section class="paper-section"><h2>Validación y alcance del modelo</h2><p>Este formulario reúne datos de la operación de estudio y constituye una <strong>recreación académica</strong>. No hay firma autorizada, validación de sistemas, patente acreditada, folio oficial, sello digital ni declaración comprobada ante el SAT, VUCEM o ANAM. Los códigos SIM son controles internos de estudio.</p></section>`;
  root.innerHTML=`<header class="paper-header"><div class="paper-identity">EXPEDIENTE INTEGRAL <span>UNIVERSIDAD ANÁHUAC MAYAB · OPERACIÓN ADUANERA</span></div><div class="paper-ref"><b>CONTROL INTERNO / ${esc(doc.reference)}</b>ANEXO DIDÁCTICO · DOC ${doc.number}/44<br>SIM-IMP-BIC-2026-001</div></header>
    <h1 class="paper-title">${esc(specials[id]||doc.name)}</h1><p class="paper-subtitle">Modelo de captura documental · Importación de 100,000 bolígrafos BIC Clic Stic · A1 / Progreso</p>
    <div class="paper-warning"><strong>NO VÁLIDO PARA DESPACHO.</strong> Formato simulado, sin efectos fiscales, jurídicos ni aduaneros. No constituye documento expedido por la autoridad, 4imprint, BIC o la entidad UVA. ${id===22?'Acta NO aplicable al caso base.':''}</div>
    <section class="paper-section"><h2>I · Identificación de la operación</h2><div class="paper-grid"><div class="smallbox"><span>Importador (caso académico)</span><strong>${esc(op.importer)}</strong></div><div class="smallbox"><span>RFC de trabajo</span><strong>${esc(op.rfc)}</strong></div><div class="smallbox"><span>Representante / patente académica</span><strong>${esc(op.agent)} · 0193</strong></div><div class="smallbox"><span>Régimen y aduana</span><strong>A1 · Progreso / 28 · sección 0 (trabajo)</strong></div></div></section>
    <section class="paper-section"><h2>II · Datos particulares del documento ${doc.number}</h2><table class="paper-table"><tbody>${doc.facts.map(v=>th(v.campo,v.valor)).join('')}</tbody></table></section>
    <section class="paper-section"><h2>III · Momento, finalidad y alcance</h2><table class="paper-table"><tbody>${th('Emisor del caso',doc.sections['3'].text)}${th('Momento de emisión',doc.sections['4'].text)}${th('Destinatario',doc.sections['5'].text)}${th('Función',doc.sections['6'].text)}${th('Fundamento de consulta',doc.sections['2'].text)}</tbody></table></section>
    ${id===18?`<section class="paper-section"><h2>IV · Resumen de valoración y contribuciones preferenciales</h2><div class="paper-grid"><div class="smallbox"><span>Valor comercial FCA</span><strong>USD 31,000.00</strong></div><div class="smallbox"><span>Incrementables</span><strong>USD 3,250.00</strong></div><div class="smallbox"><span>Valor en aduana</span><strong>USD 34,250.00 / MXN 616,500.00*</strong></div><div class="smallbox"><span>Supuesto T-MEC</span><strong>IGI 0 · DTA 0 · IVA MXN 98,640</strong></div></div><p>* Tipo de cambio PRESUPUESTAL MXN 18.00/USD. La preferencia exige origen acreditado.</p></section>`:''}
    ${signature}<div class="paper-foot"><span>Fuente: expediente académico SIM-IMP-BIC-2026-001 · Ficha ${doc.number}</span><span class="paper-key">SIMULACIÓN ACADÉMICA / 2026</span></div>`;
  document.title=`Modelo ${doc.number} · ${doc.name}`;
  document.querySelector('#print-model').addEventListener('click',()=>window.print());
})();
