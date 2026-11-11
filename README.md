# EXPEDIENTE INTEGRAL DE OPERACIÓN ADUANERA

**Versión 2.0 — Proyecto independiente para un repositorio nuevo de GitHub Pages**  
Universidad Anáhuac Mayab · Operación Aduanera · Otoño de 2026

## 1. Qué hay aquí

Plataforma académica estática sobre la importación simulada de **100,000 bolígrafos BIC Clic Stic** (SKU 39152) desde Houston a Progreso y Mérida, mediante régimen definitivo **A1**, expediente `SIM-IMP-BIC-2026-001`.

- **44 fichas técnicas individuales**: las **33 fichas originales del Manual V2.1** conservan su numeración 01–33 y se añaden **11 anexos** con numeración complementaria. Cada ficha tiene los ocho apartados exigidos.
- **27 archivos de la carpeta de Google Drive**, descargados y preservados como PDF, PNG o DOCX.
- **Un modelo nuevo** `09-A_Constancia_revalidacion_BL_SIMULADA.pdf`, etiquetado explícitamente como no emitido. Total de **28 archivos** de biblioteca.
- **Dos PDF de visualización derivados de los Word originales** (no cuentan entre los 27 originales).
- **Galería UVA / NOM-050** con **siete imágenes originales de Drive**, ampliación, estado académico y fichas relacionadas.
- **Buscador**, filtros de cinco categorías, ruta esquemática, cronología, fichas con relaciones clicables, visor integrado, descarga local e informe de auditoría.

**No es un expediente aduanero validado ni un dictamen oficial.** La certificación de origen T-MEC, el etiquetado/expediente UVA, el pedimento y sus acuses se representan exclusivamente dentro de un caso académico.

## 2. Estructura del repositorio

```text
index.html                   Página principal, ruta, catálogo, galería, biblioteca, auditoría
ficha.html                   Ficha técnica individual: ficha.html?id=18
formulario.html              Modelo académico del manual: formulario.html?id=16
css/
  styles.css                 Diseño principal, biblioteca y galerías
  fichas.css                 Ficha individual e impresión
  formulario.css             Modelo documental
js/
  documentos.js              Base de 44 fichas, relaciones, fotos y archivos
  app.js                     Navegación, catálogo, galería, auditoría
  biblioteca.js              Visor y descarga de documentos locales
  fichas.js                  Fichas individualizadas
  formulario.js              Modelo imprimible académico
assets/
  documentos/
    comerciales/             Transacción comercial
    transporte/              Transporte, B/L, modelo 09-A
    aduaneros/               COVE, pedimento, DODA, manifestación E2
    regulatorios/            T-MEC, contrato/dictamen UVA y evidencias
    complementarios/         Padrón y otros controles
    Manual_Aduanero_V2_1 copia.pdf
  evidencias-uva/            Siete imágenes originales + copias WebP para pantalla
  previews/                 Miniaturas de PDF sin alterar originales
  logistica/                Mapa esquemático SVG local
  logos/                    Isotipo académico SVG
inventario-documental.json   28 archivos de biblioteca, procedencia y SHA-256
INVENTARIO.md                Inventario humano y relación de fichas
AUDITORIA.md                 Discrepancias y límites de autenticidad
REPORTE_DE_PRUEBAS.md        Validaciones estáticas e interacciones
GUIA_GITHUB_PAGES.md         Publicación paso a paso
```

## 3. Uso local

Extrae el ZIP completo. Abre `index.html` directamente o utiliza un servidor local como `python3 -m http.server 8000` ejecutado **dentro de la carpeta del proyecto**.

Usa el botón **Fichas técnicas** para seleccionar una ficha. Desde ella puedes abrir el archivo, descargar el original y consultar `ficha.html?id=...`. En **Biblioteca** puedes filtrar los 28 archivos, abrir el visor y descargar el mismo archivo almacenado localmente.

Para una ruta directa a las fichas: `ficha.html?id=18` (pedimento), `ficha.html?id=16` (COVE), `ficha.html?id=34` (B/L revalidado), `ficha.html?id=38` (dictamen UVA), `ficha.html?id=39` (segunda versión de DODA). Los valores `id` son identificadores técnicos internos; la numeración visible conserva 01–33 y anexos `09-A`, `26-A`, etc.

## 4. Publicación en GitHub Pages

Consulta `GUIA_GITHUB_PAGES.md`. El sitio funciona con **HTML/CSS/JavaScript sin backend**, no necesita claves ni conexiones a Drive para consultar los archivos incluidos.

Antes de publicar el repositorio como **Public**, revisa que se cuenta con autorización para mostrar imágenes, datos personales, firmas simuladas o referencias de empresas. No se ha creado el repositorio de GitHub ni se han modificado permisos en Drive.

## 5. Cómo actualizarlo

En `js/documentos.js`, actualiza la ficha que corresponde al mismo `id`; preserva el número original y los ocho `sections` del 1 al 8. Si añades un archivo, cópialo a `assets/documentos/` en su categoría, actualiza `inventory` y `attachments` del documento, y añade el registro a `inventario-documental.json`. No inventes acuses de transmisión ni indicadores de acreditación oficiales. Si modificas imágenes, conserva la versión original y añade versiones web optimizadas por separado.

## 6. Auditoría de consistencia

Lee `AUDITORIA.md` antes de presentar el proyecto. El pedimento PDF de Drive incluye un **RFC distinto** al del importador en el Manual V2.1, algunos documentos UVA usan sociedades diferentes y ciertas fotografías contienen variantes de tinta/SKU/cantidades. Se conservan como archivos suministrados, sin alterar sus valores o atribuirles validación oficial.
