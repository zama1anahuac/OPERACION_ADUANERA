# Auditoría del Expediente Digital 2.0

Fecha del ejercicio: **11 de noviembre de 2026**. Fuente maestra: **Manual Integral de Documentación Aduanera V2.1**. Carpeta final de Google Drive aportada por el usuario. Esta auditoría es de consistencia documental académica; **no constituye validación jurídica, fiscal ni de autenticidad**.

## Cobertura

| Indicador | Resultado |
|---|---:|
| Archivos originales localizados y descargados de Drive | **27** |
| Archivos originales con descarga local | **27** |
| Modelo complementario agregado | **1** (09-A, revalidación B/L) |
| Archivos en la biblioteca | **28** |
| PDF de vista derivados de archivos Word | **2** (no sustituyen originales) |
| Fichas originales del Manual V2.1 | **33** |
| Fichas complementarias con numeración A/B/C/D | **11** |
| Fichas totales | **44** |
| Evidencias fotográficas y documentos UVA en galería | **7** |
| Documentos que siguen sin archivo final de Drive | **16** fichas base; conservan modelo académico |

## Alertas de consistencia que deben explicarse

1. **Pedimento y RFC.** El archivo de Drive `Ped_26PP5679I_35062806009480_ZAMA.pdf` consigna el RFC `DOM121009964`; el importador del Manual V2.1 es AnMayab Promocionales del Sureste, S.A. de C.V. con RFC de trabajo `APS260101ABC`. El PDF no fue modificado. **No presentar este RFC como conciliado.**
2. **COVE y apariencia de acuse oficial.** `rptFormatoCOVEVUCEM141656821 (1).pdf` contiene un folio con apariencia de acuse y un RFC de consulta distinto del modelo. La referencia SIM del manual no acredita transmisión auténtica. Se conserva como PDF académico suministrado.
3. **UVA: diferentes solicitantes.** El `CONTRATO UVA.png` menciona Comercializadora Zamarripa, S.A. de C.V.; `DICTAMEN UVA.png` identifica Importaciones Zamarripa, S.A. de C.V. en vez de AnMayab. No se verificaron los registros, firmas, sellos ni QR como emitidos por una unidad acreditada.
4. **Cronología de checklist.** `RESOLUCIÓN INSPECCIÓN.png` está fechado 06/11/2026, un día después del despacho académico 05/11/2026. No se usa como prueba de inspección anterior al despacho.
5. **Fotografías y configuración del producto.** Las fotos muestran, según la toma, tinta **roja**, código **93152** o cajas de **200** piezas. El manual define tinta **negra**, SKU **39152** y **500** piezas por caja. Se conservan las imágenes únicamente como evidencia visual ilustrativa, sin alterar su contenido.
6. **Certificación de origen T-MEC.** El archivo `Certificacion_origen_TMEC_BIC_formato copia.pdf` incluye un productor hipotético y espacio sin firma. El escenario preferencial es **condicional**; su contenido no acredita por sí mismo origen preferencial real ni derecho a tasa cero.
7. **DODA, pedimento, COVE y otros formularios con apariencia oficial.** La presencia de QR, número, sellos de estilo oficial o folios no acredita su validación. Deben interpretarse como representaciones para el caso, no como documentos emitidos por autoridades.
8. **DODA duplicado.** `DODA_1.pdf` y `DODA.pdf` son archivos distintos. El primero se vincula al documento 33 y el segundo al anexo 33-A. No se eliminó ni sobrescribió ninguno.
9. **Evidencias de pago.** `Evidencia Pago al Proveedor.pdf` y `COMPROBANTE PAGO A PROVEEDOR. .pdf` se conservaron por separado; la segunda versión tiene ficha 06-A.
10. **Manifestación de Valor.** El PDF y el DOCX tienen rutas de descarga separadas y fichas 15 y 15-A. El PDF de vista generado a partir de Word es **derivado**, no original.
11. **B/L revalidado.** No se localizó constancia original emitida por naviera. Se creó **09-A** como modelo con los campos suministrados y leyenda “SIMULACIÓN ACADÉMICA · NO VÁLIDO PARA DESPACHO NI ENTREGA DE CARGA”.
12. **Acta de reconocimiento (documento 22).** Se conserva la ficha de la numeración original como referencia, pero no se afirma que el reconocimiento haya ocurrido ni se incluye como documento exigible en este escenario.

## Decisiones de desarrollo

- Los **27 originales de Drive** se almacenaron en `assets/documentos/` con sus nombres y formatos, agrupados por categoría. `inventario-documental.json` conserva nombre, tamaño, hash SHA-256, tipo de archivo, carpeta, fuente y ficha asociada.
- No se utilizaron vínculos privados de Drive para los botones **Ver** y **Descargar**; las acciones apuntan a archivos incluidos en el ZIP.
- Los originales no se editaron. Las miniaturas WebP y PDF derivados son copias de presentación y se encuentran separadas de los archivos fuente.
- La galería NOM-050 contiene siete PNG suministrados por Drive y sus vistas WebP optimizadas, cada uno enlazado con su ficha documental.
- Se conservaron cinco categorías y las 33 fichas numeradas; se añadieron únicamente fichas complementarias de organización, sin presentarlas como nuevos requisitos legales.

## Pendientes antes de cualquier uso público

Confirmar autorizaciones de publicación para nombres, fotografías, firmas y documentos, así como revisar las discrepancias de datos identificadas. El sitio es una herramienta educativa y no puede utilizarse para acreditar despacho, verificación UVA, origen preferencial T-MEC, cumplimiento de NOM, pagos o habilitaciones oficiales.
