# 🌐 Dashboard Power BI Web

Este proyecto permite mostrar imágenes de informes de Power BI junto a enlaces interactivos para que los usuarios puedan verlos en línea.

## 🚀 Estructura del Proyecto

```
/powerbi-dashboard-web
│
├── index.html         ← Página principal
├── style.css          ← Estilos de los informes
├── script.js          ← Código que carga dinámicamente los informes
├── links.json         ← Listado de informes (título, imagen, enlace)
├── /images            ← Carpeta donde debes colocar tus imágenes exportadas
└── update.bat         ← Script para Windows que puede automatizar (futuro)
```

## 🖼️ ¿Cómo actualizar?

1. Exporta las imágenes de Power BI manualmente.
2. Guarda las imágenes en la carpeta `/images/`.
3. Edita el archivo `links.json` con el **nombre de la imagen** y el **enlace del informe**.

## ✅ Ejemplo de `links.json`

```json
{
  "title": "Informe Ventas 2024",
  "img": "ventas2024.png",         ← nombre exacto de la imagen
  "url": "https://app.powerbi.com/view?r=example1" ← enlace al informe
}
```

## 📂 ¿Dónde van las imágenes?

Coloca las imágenes exportadas manualmente en:

```
/images/
```

---

🔁 En versiones futuras se puede automatizar con Python + Selenium o API de Power BI.