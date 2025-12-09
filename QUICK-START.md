# 🚀 Guía Rápida: Poner en Marcha Todo

## ✅ Checklist Completo

### 1️⃣ **Probar Local (5 minutos)**
```bash
# Simplemente abre index.html en tu navegador
# La web funciona sin configuración adicional
```

### 2️⃣ **Configurar Brevo (10 minutos)**

1. Crea cuenta en Brevo (antes Sendinblue)
2. Crea una API Key v3 (empieza por `xkeysib-`)
3. Configura `BREVO_API_KEY` como secret en GitHub Actions y/o en tu `.env`

### 3️⃣ **Configurar OpenAI (5 minutos)**

1. Crea cuenta en [OpenAI](https://platform.openai.com)
2. Añade $5 de crédito (dura meses)
3. Obtén API Key: API Keys → Create new

### 4️⃣ **Publicar en GitHub con Automatización (15 minutos)**

```bash
# 1. Inicializa Git
git init
git add .
git commit -m "Initial commit"

# 2. Crea repo en GitHub y sube
git remote add origin https://github.com/tu-usuario/curador-rarezas.git
git branch -M main
git push -u origin main

# 3. Habilita GitHub Pages
# Ve a Settings → Pages → Source: main branch

# 4. Configura Secrets
# Settings → Secrets and variables → Actions → New secret
```

**Secrets a añadir (mínimo):**
- `BREVO_API_KEY` = tu API key v3 de Brevo
- (Opcional) `OPENAI_API_KEY` = tu API key de OpenAI, si quieres que la IA actualice la BD

### 5️⃣ **Verificar Automatización**

1. Ve a Actions en GitHub
2. Ejecuta manualmente "Daily Update & Newsletter"
3. Verifica que:
   - ✅ Se añaden descubrimientos a `script.js`
   - ✅ Se crea/actualiza `email-history.json`
   - ✅ Se envía email (si tienes suscriptores)

---

## 🎯 Resultado Final

Una vez configurado, **cada día automáticamente**:

1. **9:00 AM UTC** → GitHub Action se ejecuta
2. **IA busca** 10 nuevas rarezas
3. **Se añaden** a `script.js` (commit automático)
4. **Se seleccionan** 6 únicas del día
5. **Se envía email** a todos los suscriptores
6. **Se actualiza** historial (nunca se repite)

---

## 🔧 Comandos Útiles

### Probar localmente (sin publicar)

```bash
# Instalar dependencias
npm install

# Actualizar BD con IA
npm run update-db

# Enviar email de prueba
npm run send-email

# Ambos a la vez
npm run daily
```

### Variables de entorno local

**Windows (PowerShell):**
```powershell
$env:BREVO_API_KEY="xkeysib-xxx"
$env:OPENAI_API_KEY="sk-xxx"  # opcional
```

**Mac/Linux:**
```bash
export BREVO_API_KEY="xkeysib-xxx"
export OPENAI_API_KEY="sk-xxx"  # opcional
```

O crea un archivo `.env` (no lo subas a Git):
```bash
cp .env.example .env
# Edita .env con tus credenciales
```

---

## 🐛 Problemas Comunes

### "Error: OPENAI_API_KEY not found"
→ Configura la variable de entorno o el Secret en GitHub

### "No se envían emails"
→ Verifica que tengas contactos dados de alta en Brevo

### "GitHub Actions no se ejecuta"
→ Ve a Actions → Enable workflows (si está deshabilitado)

### "Se repiten descubrimientos"
→ Borra `localStorage` en el navegador o `email-history.json` en el servidor

---

## 📊 Costos Mensuales (orientativos)

- **Brevo**: plan gratuito hasta cierto volumen de emails/contactos (revisa condiciones actuales)
- **OpenAI**: ~$1/mes (si activas la actualización diaria con IA)
- **GitHub Pages**: $0

**Total aproximado: ~ $1/mes si usas IA + envíos básicos con Brevo** 🎉

---

## 💡 Tips

- **Cambia el horario**: Edita `.github/workflows/daily-update.yml` línea 6
- **Más descubrimientos diarios**: Cambia `count = 6` en `script.js`
- **Más descubrimientos de IA**: Cambia "10 nuevos" en `update-database.js`
- **Personaliza el email**: Edita `send-daily-email.js` función `generateEmailHTML`

---

## 🆘 Soporte

Si algo no funciona:

1. **Lee los logs** en GitHub Actions
2. **Verifica variables** de entorno
3. **Comprueba credenciales** de Brevo/OpenAI
4. **Revisa README.md** completo

---

**¡Listo! Ahora tienes un curador automático completamente funcional.** 🎨✨
