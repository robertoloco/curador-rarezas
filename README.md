# 🎨 Curador Automático de Rarezas e Inspiración

Una experiencia web que descubre y presenta contenido fascinante y extraño de internet cada día.

## 🌟 Características

- **Descubrimientos Diarios**: 6 rarezas curadas cada día
- **Sin Repeticiones**: Los descubrimientos diarios NUNCA se repiten en el tiempo
- **Misma Selección Todo el Día**: Aunque recargues, verás los mismos 6 del día
- **Newsletter Automático**: Suscripción y envío diario con **Brevo** (sin backend propio, usando GitHub Actions)
- **Actualización con IA**: OpenAI busca y añade nuevos descubrimientos automáticamente
- **Categorías Diversas**: Webs extrañas, artistas marginales, proyectos experimentales, net.art, subculturas, y más
- **Estética Única**: Diseño glitch/vaporwave con animaciones suaves

## 📂 Estructura del Proyecto

```
newsletter random/
├── index.html                      # Estructura HTML principal
├── style.css                       # Estilos (glitch, neon, vaporwave)
├── script.js                       # Lógica, BD y funcionalidad (sin repetición)
├── package.json                    # Dependencias Node.js
├── api/
│   └── subscribe.js                # (Opcional) API serverless para Mailchimp si alguna vez lo usas con Vercel/Netlify
├── scripts/
│   ├── update-database.js          # Script IA: actualiza BD diariamente
│   ├── send-daily-email.js         # Script: envía newsletter diario
│   └── email-history.json          # Historial para no repetir emails
├── .github/
│   └── workflows/
│       └── daily-update.yml        # GitHub Actions: automatización
└── README.md                       # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Local (Solo Frontend)

1. Abre `index.html` directamente en tu navegador
2. ¡Listo! La web funciona sin servidor
3. El botón de suscripción abre el formulario de Brevo (configura tu URL en `index.html`)

### Opción 2: Publicar Online con Newsletter Completo

#### A) Vercel (Recomendado para APIs, opcional)

> Nota: Para GitHub Pages no necesitas Vercel ni ningún backend. Esta opción solo aplica si en el futuro quieres montar una API propia.

1. Crea cuenta en [Vercel](https://vercel.com)
2. Instala Vercel CLI: `npm i -g vercel`
3. Desde la carpeta del proyecto: `vercel`
4. Configura variables de entorno según el proveedor de emails que quieras usar (Mailchimp o Brevo)
5. ¡Publicado con API de suscripción funcional!

#### B) GitHub Pages + GitHub Actions (Gratis, Automatizado)

**Ideal para automatización diaria completa**

1. Crea cuenta en [GitHub](https://github.com)
2. Crea repositorio público (ej: "curador-rarezas")
3. Sube TODOS los archivos del proyecto
4. Ve a Settings → Pages → Selecciona rama `main`
5. Configura Secrets (Settings → Secrets and variables → Actions):
   - `OPENAI_API_KEY` (para la parte de IA, opcional)
   - `BREVO_API_KEY` (para enviar el newsletter diario con Brevo)
6. La web estará en: `https://tu-usuario.github.io/curador-rarezas`
7. GitHub Actions ejecutará automáticamente cada día

#### C) Netlify (Con Functions)

1. Ve a [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta o conecta GitHub
3. Configura variables de entorno en Site settings
4. Mueve `api/subscribe.js` a `netlify/functions/`
5. ¡Publicado!

---

## 📧 Configurar Brevo (Newsletter)

Por defecto, este proyecto usa **Brevo** tanto para la suscripción (formulario externo) como para el envío diario automatizado.

### Paso 1: Crear Cuenta y API Key en Brevo

1. Ve a Brevo (antes Sendinblue) y crea una cuenta
2. Entra en la sección de claves de API y crea una **API v3**
3. Copia el valor (empieza por `xkeysib-...`)

1. Ve a [Mailchimp](https://mailchimp.com) y crea cuenta gratuita (hasta 500 suscriptores)
2. Verifica tu email
3. Crea una "Audience" (lista de contactos)

### Paso 2: Configurar Variables de Entorno

**En GitHub (para Actions):**
- Settings → Secrets and variables → Actions → New repository secret
- Añade:
  - `BREVO_API_KEY` = tu clave v3 de Brevo
  - (Opcional) `OPENAI_API_KEY` si quieres que la IA actualice la base de datos automáticamente

**En local (para pruebas):**
- Crea un archivo `.env` copiando de `.env.example` y rellena `BREVO_API_KEY`
- O exporta la variable directamente (PowerShell/Bash) como se indica más abajo

### Paso 3: Configurar el Formulario de Suscripción

1. En Brevo, crea un formulario o página de suscripción
2. Copia la **URL pública** del formulario
3. Edita `index.html` y reemplaza `https://TU_URL_DE_FORMULARIO_BREVO` por esa URL

---

## 🤖 Configurar IA (Actualización Automática de BD)

### Paso 1: Obtener API Key de OpenAI

1. Ve a [OpenAI](https://platform.openai.com/)
2. Crea cuenta o inicia sesión
3. Ve a API Keys → Create new secret key
4. Copia y guárdala

**Costo:**
- GPT-4o: ~$0.03 por actualización diaria
- ~$1/mes si ejecutas diariamente

### Paso 2: Instalar Dependencias (si quieres probar local)

```bash
npm install
```

### Paso 3: Configurar Variable de Entorno Local

**Windows (PowerShell):**
```powershell
$env:OPENAI_API_KEY="tu-api-key"
```

**Mac/Linux:**
```bash
export OPENAI_API_KEY="tu-api-key"
```

### Paso 4: Probar Actualización de BD

```bash
node scripts/update-database.js
```

Esto añadirá 10 nuevos descubrimientos a `script.js`.

### Paso 5: Automatizar con GitHub Actions

1. Sube el proyecto a GitHub
2. Configura el secret `OPENAI_API_KEY` (paso anterior)
3. El workflow `.github/workflows/daily-update.yml` se ejecutará automáticamente cada día a las 9 AM UTC

**Qué hace automáticamente:**
- Busca 10 nuevas rarezas con IA
- Las añade a `script.js`
- Hace commit automático
- Selecciona 6 para el día (sin repetir)
- Envía email a suscriptores (usando Brevo)
- Guarda historial para no repetir

---

## 📨 Detalles del envío diario con Brevo

El script `scripts/send-daily-email.js` hace:
- Llama a la API de contactos de Brevo (`ContactsApi.getContacts`)
- Envía el email diario a todos los contactos que encuentre

Por tanto, asegúrate de que tus suscriptores están dados de alta como **Contactos** en tu cuenta de Brevo (puedes importarlos desde CSV u otros proveedores).

---

## 📨 Enviar Newsletter Diario Manualmente

Si no quieres usar GitHub Actions, puedes ejecutar manualmente:

```bash
# Actualiza BD con IA
node scripts/update-database.js

# Envía email diario
node scripts/send-daily-email.js

# O ambos a la vez
npm run daily
```

**Configurar cron local (opcional):**

**Mac/Linux (crontab):**
```bash
crontab -e
# Añade:
0 9 * * * cd /ruta/proyecto && npm run daily
```

**Windows (Task Scheduler):**
1. Abre Task Scheduler
2. Create Task → Trigger: Daily 9:00 AM
3. Action: Start program → `node` → Arguments: `scripts/send-daily-email.js`

---

## ❓ Cómo Funciona la No Repetición

### En el Frontend (Web)

1. **Selección Diaria Persistente:**
   - Cada día se eligen 6 descubrimientos aleatorios
   - Se guardan en `localStorage` con la fecha del día
   - Aunque recargues la página, verás los mismos 6
   - A medianoche (nuevo día) se seleccionan 6 nuevos

2. **Historial Global:**
   - Cada descubrimiento mostrado se añade a un historial
   - Los descubrimientos del historial NUNCA vuelven a aparecer
   - Si se agotan, el historial se reinicia automáticamente

### En el Newsletter (Email)

1. **Archivo `email-history.json`:**
   - Guarda los índices de descubrimientos ya enviados
   - El script comprueba este archivo antes de elegir
   - NUNCA envía el mismo descubrimiento dos veces

2. **Selección del Día:**
   - Filtra descubrimientos no enviados
   - Mezcla aleatoriamente
   - Elige 6 únicos
   - Los marca como enviados en el historial

3. **Reinicio Automático:**
   - Si quedan menos de 6 descubrimientos disponibles
   - El historial se reinicia (todos disponibles de nuevo)
   - Esto solo pasa después de enviar TODOS los descubrimientos

**Resultado:** Cada suscriptor recibe 6 rarezas únicas cada día que NUNCA se repiten hasta agotar toda la base de datos.

---

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `style.css` (líneas 4-12):

```css
:root {
    --bg-dark: #0a0a0f;           /* Fondo principal */
    --bg-card: #1a1a2e;           /* Fondo de tarjetas */
    --accent-primary: #ff006e;    /* Color primario (rosa) */
    --accent-secondary: #00f5ff;  /* Color secundario (cyan) */
    --accent-tertiary: #8b5cf6;   /* Color terciario (morado) */
}
```

### Añadir Más Descubrimientos

Edita `script.js` y añade elementos al array `discoveriesDatabase` (línea 6):

```javascript
{
    category: "tu categoría",
    title: "Título del descubrimiento",
    url: "https://ejemplo.com",
    description: "Descripción breve y sensible.",
    quote: "Frase filosófica o inspiradora."
}
```

### Cambiar Cantidad de Descubrimientos Iniciales

En `script.js`, línea 524:

```javascript
const discoveries = getRandomDiscoveries(6); // Cambia 6 por el número deseado
```

## 🌐 Integración con APIs Reales

El código incluye ejemplos comentados para integrar APIs. Descomenta y adapta:

### Reddit API

```javascript
async function fetchFromReddit(subreddit) {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`);
    const data = await response.json();
    // Procesa y retorna datos
}
```

### APIs Sugeridas

- **Reddit**: `https://www.reddit.com/dev/api/`
- **Hacker News**: `https://github.com/HackerNews/API`
- **Are.na**: `https://dev.are.na/`
- **Internet Archive**: `https://archive.org/help/json.php`
- **Tumblr**: `https://www.tumblr.com/docs/en/api/v2`

## 🔥 Ideas de Extensión

### 1. Filtros por Categoría

Añade botones para filtrar:

```javascript
function filterByCategory(category) {
    const filtered = discoveriesDatabase.filter(d => d.category === category);
    renderDiscoveries(filtered);
}
```

### 2. Modo Oscuro/Claro

Añade un toggle en el HTML y cambia las variables CSS con JavaScript.

### 3. Compartir en Redes

Añade botones de compartir en cada tarjeta:

```html
<a href="https://twitter.com/intent/tweet?text=${discovery.title}&url=${discovery.url}">
    Compartir en Twitter
</a>
```

### 4. Backend con Sugerencias de Usuarios

Usa servicios como:
- **Firebase**: Base de datos + hosting gratis
- **Supabase**: Alternativa open-source a Firebase
- **Airtable**: Base de datos visual + API

### 5. Newsletter Real

Este proyecto ya viene con integración lista para **Brevo** (envío diario automatizado). Si lo prefieres, podrías adaptar el flujo a otros proveedores (Mailchimp, ConvertKit, Buttondown, etc.), pero no es necesario.

### 6. PWA (Progressive Web App)

Añade `manifest.json` y un service worker para:
- Instalación en móvil
- Funcionar offline
- Notificaciones push diarias

### 7. Scraping Real

Para scraping, necesitarás un backend (CORS):

**Opción A: Node.js + Express**

```javascript
const puppeteer = require('puppeteer');

app.get('/scrape', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url);
    const data = await page.evaluate(() => {
        // Extrae datos
    });
    res.json(data);
});
```

**Opción B: Python + Flask + BeautifulSoup**

```python
from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests

@app.route('/scrape')
def scrape():
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Extrae datos
    return jsonify(data)
```

## 🎨 Inspiración y Fuentes

Este proyecto está inspirado en:

- [Kicks Condor](https://www.kickscondor.com/) - Web curator
- [The Whippet](https://thewhippet.org/) - Newsletter de rarezas
- [Dense Discovery](https://www.densediscovery.com/) - Curación cultural
- [Net.art Anthology](https://anthology.rhizome.org/) - Arte de internet
- [The Marginalian](https://www.themarginalian.org/) - Ensayos y libros raros

## 📝 Licencia

Este código es libre para usar, modificar y compartir. Haz cosas raras con él.

---

## 🐛 Problemas Comunes

### Los links no funcionan
- Verifica que las URLs en la base de datos sean correctas
- Algunos sitios pueden estar caídos

### No se guardan los descubrimientos vistos
- Comprueba que tu navegador permita localStorage
- Modo incógnito no guarda datos

### La animación glitch no se ve
- Asegúrate de que la fuente VT323 se carga correctamente
- Verifica tu conexión a Google Fonts

---

## 💬 Contacto y Contribuciones

¿Tienes rarezas que añadir? ¿Ideas? ¿Bugs?

Contribuye añadiendo:
- Nuevos descubrimientos interesantes
- Categorías adicionales
- Mejoras de diseño
- Integraciones con APIs

---

**"El mundo es raro. Nosotros también."**

Hecho con ❤️ y obsesión por las rarezas digitales.
