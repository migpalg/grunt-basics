# Grunt Basics 🐗🤖

Tasks básicos en GRUNT.

Para crear un build ejecute el siguiente comando:

```
npm run build
```

Se creará una carpeta llamada `dist/` donde estará los archivos: `app.min.js` y `styles.min.css`, y el `index.html`.

Se separan las carpetas de desarrollo y producción, en `src/` están todos los archivos para usar en desarrollo, y el `dist/` está todo el código minificado, un archivos de JS, uno de CSS y se mantiene la estructura de folders intacta.

Para correr un servidor local de la carpeta `dist/` ejecute el siguiente comando:

```
npm start
```

## Tasks configuradas
* **Uglify:** Optimiza el JS
* **css-min:** Minifica el CSS
* **replace:** Reemplaza los imports por `*.min.*`
