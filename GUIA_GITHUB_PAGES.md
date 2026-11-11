# Publicar como repositorio NUEVO en GitHub Pages

1. Descomprime `AnMayab_Expediente_Digital_2_0_Repositorio_Nuevo.zip` en tu computadora.
2. En GitHub crea un **New repository**, por ejemplo `expediente-aduanero-anmayab-v2`, sin necesidad de elegir una plantilla.
3. Sube **todo el contenido de la carpeta descomprimida** a la raíz del repositorio. La raíz debe contener `index.html`, `ficha.html`, `css`, `js`, `assets`, etc. **No** subas solamente el ZIP.
4. Revisa el estado del commit y confirma que aparezcan los directorios `assets/documentos/`, `assets/evidencias-uva/` y `assets/previews/`.
5. En `Settings` → `Pages`, selecciona **Deploy from a branch** → `main` → `/(root)` y guarda.
6. Cuando GitHub muestre la dirección del sitio, abre la portada y prueba **Biblioteca**, **Fichas técnicas**, **Galería UVA** y las fichas directas.
7. En especial, prueba `ficha.html?id=18`, `ficha.html?id=16`, `ficha.html?id=34` y `ficha.html?id=38`; abre un PDF y pulsa **Descargar original**.
8. Revisa `AUDITORIA.md` y decide qué discrepancias académicas explicarás a la profesora. **No publiques folios, nombres, firmas o imágenes sin permiso de sus titulares.**

## Notas

- La web no requiere Drive una vez publicados sus archivos locales. Los vínculos a Drive se muestran únicamente como referencia a la procedencia de los originales.
- No hay servidores de autenticación, claves de API, tokens, archivos `.env` ni build de Node.
- GitHub Pages distingue mayúsculas, espacios y tildes en nombres de archivos. Conserva exactamente los nombres y rutas de la carpeta `assets`.
- Los archivos `.docx` se descargan en su formato original y tienen vista PDF adicional derivada. El PDF derivado no reemplaza el Word.
- Si cargas los archivos desde macOS o Windows a través de la interfaz GitHub, comprueba que los nombres con acentos se mantienen intactos.
- El repositorio debe tratarse como **material educativo**, nunca como canal de verificación de pedimentos o certificados reales.
