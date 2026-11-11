# Reporte de pruebas — Expediente Digital 2.0

## Validación del paquete

- **44** fichas con sus **ocho** `sections`, 33 originales y 11 complementarias.
- **28** archivos de biblioteca: **27** procedentes de Google Drive y **1** modelo 09-A nuevo.
- Los **27 originales** locales fueron comparados mediante SHA-256 con el inventario generado y conservaron la integridad de bytes.
- Los **18 PDF de biblioteca** pudieron abrirse mediante lector PDF local.
- **7** entradas de galería con imágenes WebP y PNG correspondientes.
- **Ninguna** ruta de archivo, miniatura, vínculo asociado a documento o relación cruzada reportó ausencia en la revisión estática.
- Los cinco archivos JavaScript `documentos.js`, `app.js`, `biblioteca.js`, `fichas.js`, `formulario.js` pasaron `node --check`.

## Pruebas de interacción en navegador aislado

El entorno bloqueó la navegación convencional a rutas localhost y `file://`. Se realizó una prueba funcional equivalente con los mismos HTML, CSS, JavaScript y datos cargados en memoria del navegador Chromium, **sin alterar los archivos entregables**. Las imágenes de la vista principal y galería se incrustaron temporalmente en la prueba, sin cambiar su ubicación real en el ZIP.

| Prueba | Resultado |
|---|---|
| Portada de escritorio | Correcta |
| Portada móvil 390 px | Correcta |
| Fichas visibles | 44 |
| Archivos visibles en biblioteca | 28 |
| Elementos de galería | 7 |
| Filtros por categoría | 6 botones, incluidos “Todos” |
| Búsqueda por “COVE” | Resultados mostrados |
| Pedimento 18, ficha detallada y vista PDF | Vista y vínculo de archivo generados |
| Biblioteca, filtro COVE | 1 archivo |
| Visor de biblioteca | Abre y cierra |
| Ficha 26-A, datos individuales | 8 apartados y descarga vinculada |
| Errores JavaScript en desktop y móvil | 0 |
| Desbordamiento horizontal en móvil | No |

## Alcance de esta validación

No se efectuó una publicación real en GitHub Pages ni se accedió a los servidores oficiales del SAT/ANAM, VUCEM, UVA o navieras. La validación confirma estructura de archivos, referencias internas y funcionamiento de interfaz aislada; no confirma folios oficiales ni contenidos jurídicamente vigentes.
