// ============================================
// BASE DE DATOS DE RAREZAS
// ============================================
// Esta es una base de datos simulada. Puedes reemplazarla con APIs reales.

const discoveriesDatabase = [
    // WEBS EXTRAÑAS O INÚTILES
    {
        category: "web extraña",
        title: "The Useless Web",
        url: "https://theuselessweb.com/",
        description: "Un botón que te lleva a sitios web completamente inútiles y maravillosos. Cada clic es una ruleta de absurdidad digital.",
        quote: "A veces la inutilidad es el único propósito que necesitamos."
    },
    {
        category: "web extraña",
        title: "Windows 93",
        url: "http://www.windows93.net/",
        description: "Un sistema operativo ficticio en tu navegador. Glitchy, surrealista, y lleno de easter eggs imposibles.",
        quote: "La nostalgia del futuro que nunca existió."
    },
    {
        category: "web extraña",
        title: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "Una web que encuentra fotos de personas señalando exactamente donde está tu cursor. Perturbador y hipnótico.",
        quote: "Siempre hay alguien mirándote desde el otro lado."
    },
    {
        category: "web extraña",
        title: "Astronaut.io",
        url: "http://astronaut.io/",
        description: "Videos de YouTube sin vistas, subidos por desconocidos. Ventanas a vidas ajenas, momentos olvidados.",
        quote: "La intimidad accidental de internet."
    },
    {
        category: "web extraña",
        title: "Is It Normal?",
        url: "https://www.isitnormal.com/",
        description: "La gente pregunta si sus comportamientos raros son normales. Spoiler: nada es normal.",
        quote: "Normalidad es solo consenso temporal."
    },
    {
        category: "web extraña",
        title: "Window Swap",
        url: "https://www.window-swap.com/",
        description: "Observa ventanas ajenas desde lugares desconocidos del mundo. Nada pasa, pero es fascinante.",
        quote: "Quizá la vida es esto: mirar desde fuera."
    },
    
    // ARTISTAS DESCONOCIDOS O MARGINALES
    {
        category: "artista marginal",
        title: "Yayoi Kusama (antes del mainstream)",
        url: "https://www.yayoi-kusama.jp/e/information/index.html",
        description: "Antes de ser famosa, hacía performances en las calles de Nueva York cubriéndolo todo de lunares. Obsesión infinita.",
        quote: "El arte nace del caos repetido hasta la hipnosis."
    },
    {
        category: "artista marginal",
        title: "Henry Darger - In the Realms of the Unreal",
        url: "https://en.wikipedia.org/wiki/Henry_Darger",
        description: "Un conserje solitario escribió una novela de 15.000 páginas con ilustraciones épicas sobre niñas guerreras. Nadie lo supo hasta que murió.",
        quote: "Las obras maestras a veces se crean en el silencio absoluto."
    },
    {
        category: "artista marginal",
        title: "Bill Traylor - Arte Outsider",
        url: "https://www.outsiderartfair.com/bill-traylor",
        description: "Ex-esclavo que empezó a dibujar a los 85 años en las calles de Alabama. Sus obras son ahora joyas del arte outsider.",
        quote: "Nunca es tarde para nacer como artista."
    },
    {
        category: "artista marginal",
        title: "Vivian Maier - Fotógrafa Oculta",
        url: "https://www.vivianmaier.com/",
        description: "Niñera de día, fotógrafa secreta de noche. 150.000 fotos descubiertas tras su muerte en una subasta de garaje.",
        quote: "El arte no necesita audiencia para existir."
    },
    
    // PROYECTOS RAROS Y EXPERIMENTALES
    {
        category: "proyecto experimental",
        title: "Every Icon",
        url: "http://www.numeral.com/everyicon.html",
        description: "Un programa que genera cada icono posible de 32x32 píxeles. Tardará más tiempo que la edad del universo.",
        quote: "La eternidad cabe en una cuadrícula."
    },
    {
        category: "proyecto experimental",
        title: "One Million Masterpieces",
        url: "http://www.millionmasterpieces.com/",
        description: "Un millón de personas pintando un píxel cada una. Arte colaborativo anónimo y caótico.",
        quote: "Juntos creamos algo que ninguno comprende."
    },
    {
        category: "proyecto experimental",
        title: "Eternal Sunset",
        url: "https://www.eternalsunset.net/",
        description: "Una app que te mantiene siempre en el atardecer perfecto. Viaja siguiendo al sol eternamente.",
        quote: "Perseguir el horizonte es una forma de rezar."
    },
    {
        category: "proyecto experimental",
        title: "Long Now Foundation - 10,000 Year Clock",
        url: "http://longnow.org/clock/",
        description: "Un reloj diseñado para funcionar durante 10.000 años. Un monumento al tiempo largo y al pensamiento lento.",
        quote: "Pensar en siglos es un acto revolucionario."
    },
    
    // JUEGOS ABSURDOS O INTERACTIVOS
    {
        category: "juego absurdo",
        title: "Everything - David OReilly",
        url: "http://everything-game.com/",
        description: "Un juego donde puedes ser cualquier cosa: una piedra, un átomo, una galaxia. Filosofía jugable.",
        quote: "Ser todo es no ser nada en particular."
    },
    {
        category: "juego absurdo",
        title: "QWOP",
        url: "http://www.foddy.net/Athletics.html",
        description: "Controlar a un corredor con solo 4 teclas. Imposible, frustrante, adictivo. El arte del fracaso.",
        quote: "Caminar es un milagro que damos por hecho."
    },
    {
        category: "juego absurdo",
        title: "The Stanley Parable",
        url: "https://www.stanleyparable.com/",
        description: "Un juego sobre libre albedrío y narrativa. Cada decisión te lleva a un absurdo diferente.",
        quote: "Elegir es ilusorio, pero la ilusión es real."
    },
    {
        category: "juego absurdo",
        title: "Mountain - David OReilly",
        url: "http://mountain-game.com/",
        description: "Eres una montaña. No puedes hacer nada. El tiempo pasa. Es hermoso y deprimente.",
        quote: "A veces la inacción es la única respuesta honesta."
    },
    {
        category: "juego absurdo",
        title: "Cookie Clicker",
        url: "https://orteil.dashnet.org/cookieclicker/",
        description: "Haces clic en una galleta. Luego compras cosas para hacer más clics. Una sátira del capitalismo tardío.",
        quote: "La acumulación infinita como parodia de la existencia."
    },
    
    // MUNDOS UNDER, SUBCULTURAS
    {
        category: "subcultura",
        title: "Abandonedporn - Reddit",
        url: "https://www.reddit.com/r/AbandonedPorn/",
        description: "Fotos de lugares abandonados. Centros comerciales muertos, parques de atracciones fantasma, ciudades olvidadas.",
        quote: "La belleza del declive inevitable."
    },
    {
        category: "subcultura",
        title: "Urban Exploration",
        url: "https://www.uer.ca/",
        description: "Comunidad de exploradores urbanos. Entran donde no deben: túneles, edificios cerrados, cataclumbas.",
        quote: "La ciudad esconde más de lo que muestra."
    },
    {
        category: "subcultura",
        title: "Geocities Archive",
        url: "https://geocities.restorativland.org/",
        description: "Internet de los 90 conservado. Webs personales con GIFs animados, MIDIs y amor puro por la rareza.",
        quote: "Cuando internet era un lugar extraño hecho por extraños."
    },
    {
        category: "subcultura",
        title: "Liminal Spaces",
        url: "https://www.reddit.com/r/LiminalSpace/",
        description: "Fotos de pasillos vacíos, centros comerciales solitarios, parkings nocturnos. Espacios de transición inquietantes.",
        quote: "Los lugares intermedios son los más honestos."
    },
    
    // ESTÉTICAS RARAS, NET.ART, GLITCH, VAPORWAVE
    {
        category: "estética rara",
        title: "Jodi.org",
        url: "http://wwwwwwwww.jodi.org/",
        description: "Net.art pionero. Código como estética. Tu navegador enloquece. Arte que rompe la interfaz.",
        quote: "El error como expresión artística."
    },
    {
        category: "estética rara",
        title: "Glitchet - Rosa Menkman",
        url: "http://rosa-menkman.blogspot.com/",
        description: "Artista del glitch. Estudia la belleza en la corrupción digital, en los fallos, en lo roto.",
        quote: "Lo imperfecto revela la verdad del sistema."
    },
    {
        category: "estética rara",
        title: "Vaporwave Aesthetics Archive",
        url: "https://archive.org/details/VaporwaveAesthetics",
        description: "El archivo definitivo de vaporwave. Nostalgia retrofuturista, estatuas romanas, y Windows 95.",
        quote: "Nostalgia de un pasado que solo existió en anuncios."
    },
    {
        category: "estética rara",
        title: "Brutalist Websites",
        url: "https://brutalistwebsites.com/",
        description: "Web design anti-diseño. Crudo, honesto, funcional, feo-hermoso.",
        quote: "La estética de mostrar las costuras."
    },
    {
        category: "estética rara",
        title: "Webring de Neocities",
        url: "https://neocities.org/",
        description: "El renacer de las webs personales. Sin algoritmos, sin likes. Solo personas haciendo cosas raras.",
        quote: "Internet vuelve a ser jardín, no centro comercial."
    },
    
    // LISTAS DE IDEAS PROVOCADORAS
    {
        category: "ideas provocadoras",
        title: "The Disconnect",
        url: "https://disconnect.blog/",
        description: "Ensayos sobre desconectarse. Lentitud digital. Tecnología consciente. Silencio intencional.",
        quote: "Apagar es el nuevo encender."
    },
    {
        category: "ideas provocadoras",
        title: "Library of Babel",
        url: "https://libraryofbabel.info/",
        description: "Una biblioteca que contiene cada libro posible de 410 páginas. Todo está aquí, perdido entre el ruido infinito.",
        quote: "Información infinita es indistinguible del silencio."
    },
    {
        category: "ideas provocadoras",
        title: "Meaningness",
        url: "https://meaningness.com/",
        description: "Filosofía práctica sobre significado, propósito, y por qué nada importa pero todo cuenta.",
        quote: "El significado no se encuentra, se construye."
    },
    {
        category: "ideas provocadoras",
        title: "Wait But Why",
        url: "https://waitbutwhy.com/",
        description: "Ensayos largos ilustrados sobre inteligencia artificial, procrastinación, civilizaciones alienígenas.",
        quote: "Pensar en grande para entender lo pequeño."
    },
    
    // BLOGS OLVIDADOS
    {
        category: "blog olvidado",
        title: "Kottke.org",
        url: "https://kottke.org/",
        description: "Uno de los blogs más antiguos de internet. Todavía actualizado. Curación humana en la era de algoritmos.",
        quote: "La web lenta resiste."
    },
    {
        category: "blog olvidado",
        title: "The Marginalian (Brain Pickings)",
        url: "https://www.themarginalian.org/",
        description: "Ensayos sobre libros raros, pensadores olvidados, arte, ciencia, y belleza. Hecho con amor obsesivo.",
        quote: "Leer es conversar con fantasmas sabios."
    },
    {
        category: "blog olvidado",
        title: "Aeon",
        url: "https://aeon.co/",
        description: "Ensayos profundos sobre filosofía, ciencia, psicología. Escritura lenta para mentes rápidas.",
        quote: "La profundidad es contracultural."
    },
    {
        category: "blog olvidado",
        title: "Atlas Obscura",
        url: "https://www.atlasobscura.com/",
        description: "Lugares raros del mundo real. Museos extraños, monumentos olvidados, geografía imposible.",
        quote: "El mundo es más extraño de lo que parece en Google Maps."
    },
    
    // CONFERENCIAS, PERFORMANCES, EXPOSICIONES RARAS
    {
        category: "performance rara",
        title: "Marina Abramović - The Artist is Present",
        url: "https://www.moma.org/learn/moma_learning/marina-abramovic-marina-abramovic-the-artist-is-present-2010/",
        description: "Se sentó en silencio durante 736 horas mirando a desconocidos a los ojos. Algunos lloraban. Presencia pura.",
        quote: "Mirar es el acto más íntimo."
    },
    {
        category: "performance rara",
        title: "John Cage - 4'33\"",
        url: "https://www.youtube.com/watch?v=JTEFKFiXSx4",
        description: "Una pieza musical de silencio. El sonido es todo lo que pasa mientras no suena nada.",
        quote: "El silencio nunca está vacío."
    },
    {
        category: "performance rara",
        title: "Tehching Hsieh - One Year Performances",
        url: "https://www.artspace.com/magazine/art_101/in_depth/tehching-hsieh-55245",
        description: "Pasó un año entero sin entrar en edificios. Otro año atado a otra persona. Arte como resistencia temporal.",
        quote: "El tiempo es el único material real del arte."
    },
    {
        category: "conferencia rara",
        title: "TED Talk - Ze Frank",
        url: "https://www.ted.com/talks/ze_frank_my_web_playroom",
        description: "Una charla sobre jugar en internet, crear por crear, y hacer cosas raras sin razón.",
        quote: "El juego es trabajo sin productividad."
    },
    
    // CATEGORÍAS ADICIONALES
    {
        category: "experimento social",
        title: "The Million Dollar Homepage",
        url: "http://www.milliondollarhomepage.com/",
        description: "Un estudiante vendió un millón de píxeles a 1 dólar cada uno. Todos compraron. Un monumento al absurdo viral.",
        quote: "A veces la idea más tonta es la más inteligente."
    },
    {
        category: "archivo digital",
        title: "Internet Archive",
        url: "https://archive.org/",
        description: "La biblioteca de todo internet. Cada versión de cada web. El tiempo congelado en servidores.",
        quote: "Recordar es resistir al olvido algorítmico."
    },
    {
        category: "música experimental",
        title: "Ubuweb",
        url: "https://www.ubu.com/",
        description: "Archivo de música avant-garde, poesía sonora, video experimental. Arte que no cabe en Spotify.",
        quote: "El ruido organizado es música del futuro."
    },
    {
        category: "filosofía digital",
        title: "Are.na",
        url: "https://www.are.na/",
        description: "Pinterest para pensadores. Colecciones de ideas, imágenes, textos. Comunidad de curadores obsesivos.",
        quote: "Conectar ideas es crear conocimiento."
    },
    {
        category: "proyecto imposible",
        title: "Folding@home",
        url: "https://foldingathome.org/",
        description: "Miles de computadoras trabajando juntas para simular proteínas y curar enfermedades. Colaboración silenciosa.",
        quote: "Los sueños grandes se construyen en silencio distribuido."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Falling Falling",
        url: "http://www.fallingfalling.com/",
        description: "Una experiencia visual y auditiva minimalista que te lleva a un viaje infinito hacia no se sabe dónde. Es hipnótico y desconcertante, perfecto para quienes buscan un descanso mental en lo absurdo.",
        quote: "Deja que la gravedad te lleve a mundos inexplorados."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Furby Organ",
        url: "https://www.lookmumnocomputer.com/projects-1/furby-organ",
        description: "Este artista ha convertido a los entrañables Furbys de los años 90 en un órgano musical sinfónico. Explorando la intersección de la nostalgia y el ruido, este proyecto es un espectáculo tanto visual como auditivo.",
        quote: "La infancia se transforma en música caótica."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "ASMR Programmed Voices",
        url: "https://www.asmrion.com/",
        description: "Un proyecto experimental que explora el fenómeno del ASMR a través de voces generadas por IA. Un terreno entre lo humano y lo artificial, buscando provocar respuestas sensoriales únicas.",
        quote: "El susurro cibernético del presente."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Universal Paperclips",
        url: "http://www.decisionproblem.com/paperclips/",
        description: "Comienza como un juego sencillo de fabricación de clips de papel, pero rápidamente te sumerges en una reflexión sobre la inteligencia artificial, la economía y el fin del mundo tal como lo conocemos.",
        quote: "Todo empieza con un pequeño clip de papel."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "The SCP Foundation",
        url: "http://www.scpwiki.com/",
        description: "Una comunidad colaborativa de escritura que documenta y protege a criaturas, objetos y fenómenos paranormales. Un portal a una realidad alternativa donde lo imposible es cotidiano.",
        quote: "Protege, contiene y preserva lo inexplicable."
    },
    {
        category: "Estéticas raras",
        title: "Aesthetic Games",
        url: "https://gamejolt.com/c/aestheticgames",
        description: "Una comunidad dedicada a la creación y apreciación de juegos con una fuerte inclinación por la estética vaporwave, glitch y otras corrientes visuales poco convencionales.",
        quote: "Cuando el arte visual se convierte en juego."
    },
    {
        category: "Ideas provocadoras",
        title: "The Society for the Protection of Unwanted Objects",
        url: "http://www.spud.org.uk/",
        description: "Un grupo dedicado a la promoción de objetos que el mundo ha desechado, cuestionando nuestra noción de valor y utilidad en una sociedad consumista.",
        quote: "Lo que un día fue basura hoy es tesoro."
    },
    {
        category: "Blogs olvidados",
        title: "Things Magazine",
        url: "http://www.thingsmagazine.net/",
        description: "Un blog que explora la historia, las asociaciones y los significados de objetos cotidianos que muchas veces pasan desapercibidos. Un archivo visual y textual que desafía nuestra percepción del mundo material.",
        quote: "Todo objeto tiene una historia que contar."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Museum of Jurassic Technology",
        url: "https://www.mjt.org/",
        description: "Una institución que desafía las convenciones del museo tradicional, exhibiendo artefactos e historias que juegan entre la línea de lo verdadero y lo ficticio. Una exploración del conocimiento y su presentación.",
        quote: "Donde la naturaleza y la cultura se encuentran en lo asombroso."
    },
    {
        category: "Música experimental",
        title: "Disquiet Junto",
        url: "https://disquiet.com/",
        description: "Un proyecto comunitario de música electrónica experimental que invita a músicos de todo el mundo a crear piezas sonoras inspiradas por indicaciones semanales. Un laboratorio de innovación auditiva.",
        quote: "La experimentación es la clave de la creación sonora."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://staggeringbeauty.com/",
        description: "Una serpiente negra baila frenéticamente al ritmo de tus movimientos de ratón, con luces que parpadean y un sonido ensordecedor cuando se agitan demasiado rápido.",
        quote: "A veces, la belleza tambaleante es la más cautivadora."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "María Nepomuceno",
        url: "https://www.victoria-miro.com/artists/262-maria-nepomuceno/",
        description: "Esta artista brasileña teje esculturas orgánicas con colores vibrantes y materiales inesperados, invitando a reflexionar sobre la conexión entre lo natural y lo humano.",
        quote: "El hilo de la vida se enreda en el arte."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "Balloon HQ",
        url: "http://www.balloonhq.com/",
        description: "Dedicado al arte y la ciencia de los globos, este sitio explora desde esculturas complicadas hasta fenómenos físicos de volátiles y efímeras criaturas de aire y látex.",
        quote: "La fragilidad de un globo es su fortaleza más poderosa."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Dinosaur Polo Club's Mini Metro",
        url: "https://dinopoloclub.com/minimetro/",
        description: "Un juego estratégico relajante donde dibujas líneas de metro en ciudades que crecen sin cesar, mientras te enfrentas al caos de horarios y pasajeros impacientes.",
        quote: "Las mejores líneas son las que nunca se detienen."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "CyberBunk",
        url: "https://www.cyberbunk.net/",
        description: "Explora una webcomic que escudriña el mundo del ciberpunk, donde el humor ácido y la crítica social pintan un futuro distópico pero intrínsecamente humano.",
        quote: "En el futuro, las luces de neón no son lo único eléctrico."
    },
    {
        category: "Estéticas raras",
        title: "Cory Arcangel's Website",
        url: "https://www.coryarcangel.com/",
        description: "Artista relacionado con el net.art, Arcangel utiliza la tecnología y el humor para deconstruir la cultura pop y la estética digital de una era en constante cambio.",
        quote: "El arte es tan fugaz como la banda ancha."
    },
    {
        category: "Ideas provocadoras",
        title: "Digital Nausea",
        url: "http://digitalnausea.com/",
        description: "Un blog de ensayos que busca provocar, reflexionar y a veces incomodar al lector sobre las complejidades de vivir en una era digital delirante.",
        quote: "Vivir entre píxeles puede ser un mareo constante."
    },
    {
        category: "Blogs olvidados",
        title: "The Last Blog",
        url: "http://lastblog.com/",
        description: "Una oda nostálgica a los primeros días de los blogs, con reflexiones personales, ensayos y memorias de una era pasada cuando la web todavía era joven e inocente.",
        quote: "Recordar es revivir en el hipertexto del pasado."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Quiet Volume",
        url: "https://www.thequietvolume.com/",
        description: "Una performance participativa en bibliotecas donde susurros y lecturas guiadas crean una narrativa íntima, explorando los límites entre lector, espacio y texto.",
        quote: "El silencio es el autor más elocuente."
    },
    {
        category: "Música experimental",
        title: "The Drift",
        url: "http://www.thedriftproject.com/",
        description: "Un viaje sonoro que juega con la improvisación y la inmersión, fusionando música ambiental, jazz y electrónica para desafiar la percepción auditiva.",
        quote: "Dejarse llevar puede ser la única forma de avanzar."
    }
];

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let shownDiscoveries = []; // IDs de descubrimientos ya mostrados (solo del día)
let currentDayKey = ''; // Clave del día actual (para cambio diario)
let historyIndices = []; // Historial global para no repetir en el tiempo
let dailySelectionIndices = []; // Índices elegidos para el día actual

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Obtiene la clave del día actual (YYYY-MM-DD)
 */
function getDayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * Formatea la fecha para mostrar
 */
function formatDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('es-ES', options);
}

/**
 * Carga el estado desde localStorage
 */
function loadState() {
    const savedState = localStorage.getItem('curiosityStateV2');
    const today = getDayKey();
    if (savedState) {
        const state = JSON.parse(savedState);
        currentDayKey = state.dayKey || today;
        shownDiscoveries = state.shown || [];
        historyIndices = state.history || [];
        if (currentDayKey !== today) {
            // Nuevo día: mantenemos el historial pero vaciamos la selección diaria
            currentDayKey = today;
            dailySelectionIndices = [];
            saveState();
        } else {
            dailySelectionIndices = state.dailySelection || [];
        }
    } else {
        // Inicializa
        currentDayKey = today;
        shownDiscoveries = [];
        historyIndices = [];
        dailySelectionIndices = [];
        saveState();
    }
}

/**
 * Guarda el estado en localStorage
 */
function saveState() {
    localStorage.setItem('curiosityStateV2', JSON.stringify({
        dayKey: currentDayKey,
        shown: shownDiscoveries,
        history: historyIndices,
        dailySelection: dailySelectionIndices
    }));
}

/**
 * Reinicia el estado
 */
function resetState() {
    // Reinicia solo lo diario; conserva el historial para no repetir en el tiempo
    shownDiscoveries = [];
    dailySelectionIndices = [];
    currentDayKey = getDayKey();
    historyIndices = historyIndices || [];
    saveState();
}

/**
 * Mezcla un array (algoritmo Fisher-Yates)
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Obtiene descubrimientos aleatorios no mostrados
 */
function getRandomDiscoveries(count = 6) {
    // Filtra los no mostrados
    const notShown = discoveriesDatabase.filter((_, index) => !shownDiscoveries.includes(index));
    
    // Si no quedan suficientes, reinicia
    if (notShown.length < count) {
        resetState();
        return getRandomDiscoveries(count);
    }
    
    // Mezcla y toma los primeros 'count'
    const shuffled = shuffleArray(notShown);
    const selected = shuffled.slice(0, count);
    
    // Marca como mostrados
    selected.forEach(item => {
        const originalIndex = discoveriesDatabase.indexOf(item);
        if (!shownDiscoveries.includes(originalIndex)) {
            shownDiscoveries.push(originalIndex);
        }
    });
    
    saveState();
    return selected;
}

/**
 * Crea una tarjeta de descubrimiento
 */
function createDiscoveryCard(discovery) {
    const card = document.createElement('div');
    card.className = 'discovery-card';
    
    card.innerHTML = `
        <div class="category-badge">${discovery.category}</div>
        <h2 class="discovery-title">
            <a href="${discovery.url}" target="_blank" rel="noopener noreferrer">
                ${discovery.title}
            </a>
        </h2>
        <p class="discovery-description">${discovery.description}</p>
        <div class="discovery-quote">${discovery.quote}</div>
    `;
    
    // Animación de entrada
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    return card;
}

/**
 * Renderiza los descubrimientos en el grid
 */
function renderDiscoveries(discoveries) {
    const grid = document.getElementById('discoveries-grid');
    grid.innerHTML = ''; // Limpia el grid
    
    discoveries.forEach((discovery, index) => {
        const card = createDiscoveryCard(discovery);
        // Añade delay escalonado para animación
        setTimeout(() => {
            grid.appendChild(card);
        }, index * 100);
    });
}

/**
 * Muestra el loading
 */
function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('discoveries-grid').style.opacity = '0';
}

/**
 * Oculta el loading
 */
function hideLoading() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('discoveries-grid').style.opacity = '1';
    }, 800);
}

/**
 * Carga nuevos descubrimientos
 */
// Selecciona índices para el día (mantiene consistencia al recargar y evita repeticiones en el tiempo)
function getOrGenerateDailyIndices(count = 6) {
    if (dailySelectionIndices && dailySelectionIndices.length >= count) {
        return dailySelectionIndices;
    }

    // Candidatos: todos los índices menos los ya usados históricamente
    const allIndices = discoveriesDatabase.map((_, i) => i);
    const available = allIndices.filter(i => !new Set(historyIndices).has(i));

    const picked = shuffleArray(available).slice(0, Math.min(count, available.length));

    dailySelectionIndices = picked;
    shownDiscoveries = [...picked]; // del día
    historyIndices = [...historyIndices, ...picked];
    saveState();
    return dailySelectionIndices;
}

function loadDailyDiscoveries() {
    showLoading();

    // Simula tiempo de carga (puedes reemplazar con fetch real/servidor)
    setTimeout(() => {
        const idx = getOrGenerateDailyIndices(6);
        const items = idx.map(i => discoveriesDatabase[i]);
        renderDiscoveries(items);
        hideLoading();
    }, 600);
}

/**
 * Añade un solo descubrimiento aleatorio
 */
function addOneMoreDiscovery() {
    const grid = document.getElementById('discoveries-grid');
    const discoveries = getRandomDiscoveries(1);
    
    if (discoveries.length > 0) {
        const card = createDiscoveryCard(discoveries[0]);
        grid.appendChild(card);
        
        // Scroll suave hacia la nueva tarjeta
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Carga el estado
    loadState();
    
    // Muestra la fecha
    document.getElementById('current-date').textContent = formatDate();
    
    // Carga descubrimientos del día (persisten aunque recargues)
    loadDailyDiscoveries();

    // Suscripción al newsletter (Mailchimp vía backend opcional)
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', handleNewsletterSubmit);
    }
});

// ============================================
// NEWSLETTER: Suscripción (frontend) y helpers
// ============================================

async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('email-input');
    const msg = document.getElementById('form-message');
    const email = (input?.value || '').trim();
    
    if (!email) return;

    msg.textContent = 'Redirigiendo a Brevo...';
    msg.style.color = '#00f5ff';
    
    console.log('Redirigiendo a formulario de Brevo:', email);
    
    // Solución temporal: redirigir al formulario de Brevo con el email pre-rellenado
    // Construir URL de Brevo con email pre-rellenado
    const brevoUrl = `https://my.brevo.com/public/form/subscribe/simple?listid=3&email=${encodeURIComponent(email)}`;
    
    try {
        // Abrir en nueva ventana
        const newWindow = window.open(brevoUrl, '_blank', 'width=600,height=700');
        
        if (newWindow) {
            msg.textContent = '✨ Complete tu suscripción en la nueva ventana que se abrió.';
            msg.style.color = '#00f5ff';
            input.value = '';
            
            // Mensaje de seguimiento
            setTimeout(() => {
                msg.textContent = '👍 Después de suscribirte, recibirás un email de confirmación.';
            }, 3000);
        } else {
            // Si no se puede abrir ventana, redirigir en la misma ventana
            msg.textContent = '🔗 Redirigiendo...';
            setTimeout(() => {
                window.location.href = brevoUrl;
            }, 1000);
        }
    } catch (error) {
        console.error('Error al redirigir:', error);
        msg.textContent = 'Error de redirección. Por favor, visita brevo.com para suscribirte.';
        msg.style.color = '#ff006e';
    }
}

// ============================================
// INTEGRACIÓN CON APIs REALES (OPCIONAL)
// ============================================

/**
 * Ejemplo de cómo integrar con APIs reales
 * Descomenta y adapta según tus necesidades
 */

/*
async function fetchFromReddit(subreddit) {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`);
        const data = await response.json();
        
        return data.data.children.map(post => ({
            category: 'reddit',
            title: post.data.title,
            url: `https://reddit.com${post.data.permalink}`,
            description: post.data.selftext.substring(0, 200) + '...',
            quote: 'De los rincones de Reddit.'
        }));
    } catch (error) {
        console.error('Error fetching from Reddit:', error);
        return [];
    }
}

async function fetchFromHackerNews() {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const ids = await response.json();
        
        // Obtiene los primeros 5 posts
        const posts = await Promise.all(
            ids.slice(0, 5).map(id => 
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
            )
        );
        
        return posts.map(post => ({
            category: 'tech',
            title: post.title,
            url: post.url || `https://news.ycombinator.com/item?id=${post.id}`,
            description: 'Descubrimiento técnico de Hacker News.',
            quote: 'La frontera del hacking y la innovación.'
        }));
    } catch (error) {
        console.error('Error fetching from HN:', error);
        return [];
    }
},
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com",
        description: "Una obra web interactiva que reacciona de manera sorprendente al movimiento del mouse. Es un paseo visual que sacude el ánimo.",
        quote: "A veces, la belleza se tambalea en el caos."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Jennifer Glassford",
        url: "https://cargocollective.com/jenniferglassford",
        description: "Una artista que explora lo efímero a través de instalaciones hechas de materiales reciclados. Su trabajo es una oda a lo transitorio.",
        quote: "El arte es un susurro en el viento, apenas audible, pero siempre presente."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Universe Within",
        url: "http://ncase.me/universe-within/",
        description: "Un fascinante recorrido interactivo desde lo más grande a lo más pequeño del universo. Es un viaje que desafía la percepción.",
        quote: "Todo es inmenso y diminuto a la vez."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Notpron Riddle",
        url: "https://notpron.org/notpron/",
        description: "Conocido como el 'juego más difícil de la red', Notpron desafía a los jugadores con enigmas que requieren pensar fuera de lo convencional.",
        quote: "El ingenio es el arte de lo improbable."
    },
    {
        category: "Subculturas",
        title: "Otaku Pal",
        url: "https://otaku-pal.com/",
        description: "Un sitio dedicado a documentar la cultura otaku en Japón y más allá, explorando lo que significa ser un fanático devoto en la era digital.",
        quote: "La pasión puede convertir lo común en lo extraordinario."
    },
    {
        category: "Estéticas raras",
        title: "Net Art Anthology",
        url: "https://anthology.rhizome.org/",
        description: "Compilación de obras de net.art que han definido y redefinido el arte en la web desde sus inicios. Un museo digital del arte en línea.",
        quote: "El arte es un virus que infecta el alma."
    },
    {
        category: "Ideas provocadoras",
        title: "Uncomfortable",
        url: "https://katerinasychova.com/uncomfortable",
        description: "Una colección de objetos incómodos diseñados para desafiar la utilidad cotidiana y provocar una reflexión sobre su propio uso.",
        quote: "Lo incómodo nos invita a replantear nuestros hábitos."
    },
    {
        category: "Blogs olvidados",
        title: "PostSecret",
        url: "https://postsecret.com/",
        description: "Un blog donde las personas envían secretos anónimamente en forma de postales. Una mirada íntima a las almas humanas.",
        quote: "Los secretos son peonzas que giran en el silencio."
    },
    {
        category: "Performances o exposiciones raras",
        title: "Telematic Dreaming",
        url: "http://www.paolocirio.net/work/telematic-dreaming/",
        description: "Una performance interactiva a distancia, donde los participantes se comunican a través de proyecciones digitales. Un sueño compartido en la era de la conexión virtual.",
        quote: "Soñar es viajar sin moverse del sitio."
    },
    {
        category: "Filosofía digital",
        title: "The Machine Stops",
        url: "http://archive.ncsa.illinois.edu/prajlich/forster.html",
        description: "E.M. Forster anticipó nuestra relación con la tecnología en este cuento corto. Una lectura que desafía a repensar nuestra dependencia digital.",
        quote: "Cuando la máquina se detiene, ¿qué queda de nosotros?"
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com/",
        description: "Una experiencia visual extraña y perturbadora donde un gusano en blanco y negro responde a tus movimientos del ratón con efectos de luz y sonido sorpresivos.",
        quote: "El caos no puede ser contenido, solo guiado brevemente."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Anne Marie Grgich",
        url: "http://www.artbrut.ch/en_GB/author/grgich-anne-marie",
        description: "Artista autodidacta conocida por sus collages vibrantes y figuras coloridas, construyendo mundos surrealistas llenos de detalles fascinantes.",
        quote: "La belleza de la imperfección revela mundos ocultos."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Quiet Place Project",
        url: "https://thequietplaceproject.com/thequietplace",
        description: "Un rincón digital donde el tiempo se detiene. Una invitación para desconectar del ruido de internet y encontrar un momento de calma y reflexión.",
        quote: "En el silencio, las ideas susurran."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Sort The Court!",
        url: "https://graebor.itch.io/sort-the-court",
        description: "Un juego donde, como monarca, decides el destino de tu reino con respuestas simples, revelando lo absurdo y cómico de la política.",
        quote: "A veces, una simple decisión cambia un reino entero."
    },
    {
        category: "Mundos "under", subculturas",
        title: "The Flexing Jugaad",
        url: "https://theflexingjugaad.com/",
        description: "Celebración de la ingeniería improvisada en India. Las fotos muestran soluciones creativas con objetos cotidianos, revelando ingenio y humor.",
        quote: "La creatividad es el arte de lo posible con lo que hay."
    },
    {
        category: "Estéticas raras",
        title: "Digital Ocean",
        url: "https://wavepot.com/",
        description: "Un entorno de creación musical basado en código, permitiendo a los músicos experimentar con sonidos en un espacio infinitamente maleable.",
        quote: "El código es la partitura del futuro."
    },
    {
        category: "Ideas provocadoras",
        title: "HyperNormalisation",
        url: "https://www.youtube.com/watch?v=fh2cDKyFdyU",
        description: "Documental que examina cómo el mundo ha sido organizado y simplificado a lo largo del tiempo, desafiando la percepción de la realidad.",
        quote: "En un mundo de simulacros, la verdad se vuelve extraña."
    },
    {
        category: "Blogs olvidados",
        title: "The Old New Thing",
        url: "https://devblogs.microsoft.com/oldnewthing/",
        description: "Historias del desarrollo de software en Microsoft, una joya escondida llena de anécdotas técnicas y sabiduría geek de tiempos pasados.",
        quote: "En cada línea de código, una historia por contar."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Maybe",
        url: "https://www.swide.com/art-culture/art-history/marina-abramovic-and-uly-an-artistic-relationship-that-changed-the-world/",
        description: "Una exposición única con Marina Abramovic durmiendo en una vitrina en un museo, desafiando las nociones de arte y presencia.",
        quote: "Cuando el artista es el arte, el espectador deviene parte del cuadro."
    },
    {
        category: "Música experimental",
        title: "Disquiet Junto",
        url: "https://disquiet.com/",
        description: "Una comunidad en línea que explora la música experimental, proponiendo desafíos semanales para compositores y creadores sonoros.",
        quote: "El sonido es una frontera infinita, esperando ser explorada."
    }

// Para usar APIs reales, reemplaza getRandomDiscoveries() con:
async function getRandomDiscoveriesFromAPIs() {
    const redditData = await fetchFromReddit('InternetIsBeautiful');
    const hnData = await fetchFromHackerNews();
    
    // Combina con tu base de datos local
    const allDiscoveries = [...discoveriesDatabase, ...redditData, ...hnData];
    
    // Aplica la lógica de no repetición
    // ... (similar a getRandomDiscoveries)
}
*/

// ============================================
// NOTAS PARA EXTENSIÓN
// ============================================

/*
CÓMO EXTENDER ESTA WEB:

1. AÑADIR MÁS FUENTES DE DATOS:
   - Modifica la función getRandomDiscoveries para incluir fetch a APIs
   - APIs sugeridas:
     * Reddit API: https://www.reddit.com/dev/api/
     * Hacker News API: https://github.com/HackerNews/API
     * Are.na API: https://dev.are.na/
     * Internet Archive API: https://archive.org/help/json.php

2. SCRAPING (REQUIERE BACKEND):
   - JavaScript en navegador tiene limitaciones de CORS
   - Considera usar un backend simple (Node.js, Python Flask, etc.)
   - O usa servicios como ScrapingBee, ParseHub

3. MEJORAR PERSISTENCIA:
   - Actualmente usa localStorage (límite ~5MB)
   - Para más datos, considera IndexedDB
   - O sincroniza con un backend simple

4. AÑADIR FILTROS:
   - Por categoría
   - Por "mood" (alegre, triste, filosófico)
   - Por dificultad/accesibilidad

5. COMPARTIR:
   - Añade botones de share en cada tarjeta
   - Genera URLs únicas para colecciones

6. NOTIFICACIONES:
   - Implementa service worker para notificaciones diarias
   - Recordatorios de nuevos descubrimientos

7. COMUNIDAD:
   - Permite a usuarios sugerir nuevas rarezas
   - Sistema de votación
   - Backend necesario (Firebase, Supabase, etc.)
*/
