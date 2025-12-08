// ============================================
// SCRIPT: Envía email diario con Mailchimp
// Ejecutar automáticamente cada día con GitHub Actions
// ============================================

// REQUISITOS:
// - npm install @mailchimp/mailchimp_transactional
// - Variables de entorno:
//   * MAILCHIMP_API_KEY
//   * MAILCHIMP_AUDIENCE_ID
//   * MAILCHIMP_SERVER_PREFIX

import mailchimp from '@mailchimp/mailchimp_marketing';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Mailchimp
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Lee la base de datos
function loadDatabase() {
    const scriptPath = path.join(__dirname, '../script.js');
    const content = fs.readFileSync(scriptPath, 'utf-8');
    
    // Extrae el array entre [ y ];
    const startMarker = 'const discoveriesDatabase = [';
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) {
        console.error('No se encontró discoveriesDatabase');
        return [];
    }
    
    // Encuentra el cierre del array
    let bracketCount = 0;
    let arrayStart = startIndex + startMarker.length - 1; // Incluye el [
    let arrayEnd = arrayStart;
    
    for (let i = arrayStart; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        if (bracketCount === 0) {
            arrayEnd = i + 1;
            break;
        }
    }
    
    const arrayString = content.substring(arrayStart, arrayEnd);
    
    try {
        // Usa JSON.parse con un wrapper para convertir el código JS a JSON válido
        const jsonString = arrayString
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .replace(/,\s*}/g, '}')
            .replace(/,\s*]/g, ']');
        
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error parseando la base de datos:', error.message);
        return [];
    }
}

// Lee el historial de envíos
function loadEmailHistory() {
    const historyPath = path.join(__dirname, 'email-history.json');
    if (fs.existsSync(historyPath)) {
        return JSON.parse(fs.readFileSync(historyPath, 'utf-8'));
    }
    return { sent: [] };
}

// Guarda el historial
function saveEmailHistory(history) {
    const historyPath = path.join(__dirname, 'email-history.json');
    fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf-8');
}

// Mezcla array
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Selecciona 6 descubrimientos únicos (nunca repetidos)
function selectDailyDiscoveries(database, history) {
    const allIndices = database.map((_, i) => i);
    const available = allIndices.filter(i => !history.sent.includes(i));

    if (available.length < 6) {
        console.log('⚠️  Quedan menos de 6 descubrimientos. Reiniciando historial...');
        history.sent = [];
        return selectDailyDiscoveries(database, history);
    }

    const selected = shuffle(available).slice(0, 6);
    return selected.map(i => ({ ...database[i], index: i }));
}

// Genera HTML del email
function generateEmailHTML(discoveries) {
    const today = new Date().toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const itemsHTML = discoveries.map(d => `
        <div style="background: #1a1a2e; padding: 25px; margin-bottom: 20px; border-left: 4px solid #00f5ff;">
            <div style="display: inline-block; padding: 5px 12px; background: #ff006e; color: #fff; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">
                ${d.category}
            </div>
            <h2 style="color: #00f5ff; margin: 10px 0; font-size: 22px;">
                <a href="${d.url}" style="color: #00f5ff; text-decoration: none;">${d.title}</a>
            </h2>
            <p style="color: #b4b4c8; line-height: 1.7; margin: 12px 0;">
                ${d.description}
            </p>
            <p style="color: #8b5cf6; font-style: italic; border-left: 3px solid #8b5cf6; padding-left: 15px; margin-top: 15px;">
                ${d.quote}
            </p>
            <a href="${d.url}" style="color: #00f5ff; text-decoration: none; margin-top: 10px; display: inline-block;">
                Explorar →
            </a>
        </div>
    `).join('');

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rarezas Diarias</title>
</head>
<body style="margin: 0; padding: 0; background: #0a0a0f; font-family: 'Courier New', monospace; color: #ffffff;">
    <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="font-size: 36px; color: #00f5ff; text-shadow: 0 0 10px #00f5ff; margin: 0;">
                CURADOR DE RAREZAS
            </h1>
            <p style="color: #b4b4c8; margin: 10px 0;">
                Descubrimientos que no sabías que necesitabas
            </p>
            <p style="color: #ff006e; font-size: 14px; margin: 5px 0;">
                ${today}
            </p>
        </div>

        <!-- Discoveries -->
        ${itemsHTML}

        <!-- Footer -->
        <div style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #333;">
            <p style="color: #ff006e; font-size: 18px; font-style: italic; margin: 10px 0;">
                "El mundo es raro. Nosotros también."
            </p>
            <p style="color: #666; font-size: 12px; margin: 20px 0;">
                Estos descubrimientos nunca volverán a repetirse.
            </p>
            <p style="color: #666; font-size: 11px;">
                <a href="*|UNSUB|*" style="color: #00f5ff; text-decoration: none;">Desuscribirse</a>
            </p>
        </div>
    </div>
</body>
</html>
    `;
}

// Envía campaña a través de Mailchimp
async function sendCampaign(discoveries) {
    const today = new Date().toISOString().split('T')[0];
    
    try {
        // 1. Crea la campaña
        const campaign = await mailchimp.campaigns.create({
            type: 'regular',
            recipients: {
                list_id: process.env.MAILCHIMP_AUDIENCE_ID,
            },
            settings: {
                subject_line: `🎨 Rarezas del ${today} — Descubrimientos únicos`,
                preview_text: 'Tus 6 rarezas diarias que nunca volverán a repetirse',
                title: `Rarezas Diarias ${today}`,
                from_name: 'Curador de Rarezas',
                reply_to: 'noreply@tudominio.com',
            },
        });

        console.log(`📧 Campaña creada: ${campaign.id}`);

        // 2. Añade contenido HTML
        await mailchimp.campaigns.setContent(campaign.id, {
            html: generateEmailHTML(discoveries),
        });

        console.log('✍️  Contenido añadido');

        // 3. Envía la campaña
        await mailchimp.campaigns.send(campaign.id);

        console.log('✅ Email enviado exitosamente!');
        
        return true;
    } catch (error) {
        console.error('❌ Error al enviar campaña:', error);
        throw error;
    }
}

// Main
async function main() {
    console.log('📬 Preparando email diario...\n');

    // 1. Carga base de datos
    const database = loadDatabase();
    console.log(`📚 Base de datos: ${database.length} items`);

    // 2. Carga historial
    const history = loadEmailHistory();
    console.log(`📝 Ya enviados: ${history.sent.length} descubrimientos`);

    // 3. Selecciona 6 únicos
    const dailyDiscoveries = selectDailyDiscoveries(database, history);
    console.log('\n🎯 Descubrimientos seleccionados:');
    dailyDiscoveries.forEach((d, i) => {
        console.log(`  ${i + 1}. [${d.category}] ${d.title}`);
    });

    // 4. Envía email
    console.log('\n📧 Enviando campaña...');
    await sendCampaign(dailyDiscoveries);

    // 5. Actualiza historial
    dailyDiscoveries.forEach(d => history.sent.push(d.index));
    saveEmailHistory(history);

    console.log('\n✨ Proceso completado!');
}

// Ejecuta
main().catch(console.error);
