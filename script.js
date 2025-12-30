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

// Intenta cargar la selección diaria generada por el script de email (daily-selection.json)
async function loadDailyDiscoveriesFromServer() {
    try {
        const res = await fetch('scripts/daily-selection.json', { cache: 'no-store' });
        if (!res.ok) return null;

        const data = await res.json();
        const today = getDayKey();
        if (!data || data.date !== today || !Array.isArray(data.indices) || data.indices.length === 0) {
            return null;
        }

        // Filtra índices inválidos por seguridad
        const validIndices = data.indices.filter(i => i >= 0 && i < discoveriesDatabase.length);
        if (validIndices.length === 0) return null;

        // Actualiza estado local para mantener coherencia con el sistema de historial
        dailySelectionIndices = validIndices;
        shownDiscoveries = [...validIndices];
        historyIndices = Array.from(new Set([...(historyIndices || []), ...validIndices]));
        saveState();

        return validIndices.map(i => discoveriesDatabase[i]);
    } catch (error) {
        console.error('No se pudo cargar scripts/daily-selection.json:', error);
        return null;
    }
}

async function loadDailyDiscoveries() {
    showLoading();

    // Simula tiempo de carga (puedes reemplazar con fetch real/servidor)
    setTimeout(async () => {
        // 1) Intentar usar la misma selección que el email diario
        let items = await loadDailyDiscoveriesFromServer();

        // 2) Si falla o no hay selección válida, usar lógica local existente
        if (!items) {
            const idx = getOrGenerateDailyIndices(6);
            items = idx.map(i => discoveriesDatabase[i]);
        }

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

    // Configura el formulario de Brevo (suscripción sin recargar página)
    setupBrevoForm();
});

// ============================================
// NEWSLETTER: Suscripción con Brevo (frontend)
// ============================================

function setupBrevoForm() {
    const form = document.getElementById('sib-form');
    const msg = document.getElementById('form-message');
    if (!form || !msg) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('EMAIL');
        const email = (emailInput?.value || '').trim();
        if (!email) return;

        msg.textContent = 'Enviando suscripción...';
        msg.style.color = '#8aa';

        const formData = new FormData(form);

        try {
            // No podemos leer la respuesta de Brevo por CORS, así que asumimos éxito
            await fetch(form.action, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });

            msg.textContent = '¡Listo! Revisa tu correo para confirmar la suscripción. Si ya estabas suscrito, no recibirás correos duplicados.';
            msg.style.color = '#00f5ff';
            form.reset();
        } catch (error) {
            console.error('Error enviando suscripción a Brevo:', error);
            msg.textContent = 'Ha habido un problema al suscribirte. Inténtalo de nuevo en unos minutos.';
            msg.style.color = '#ff006e';
        }
    });
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
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com/",
        description: "Un sitio web sorprendentemente inútil pero hipnotizante donde una figura abstracta responde al movimiento de tu ratón con una animación inesperada y vívida.",
        quote: "El absurdo también tiene su coreografía."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Theo Jansen's Strandbeest",
        url: "https://www.strandbeest.com/",
        description: "Theo Jansen crea impresionantes criaturas cinéticas que caminan solas por la playa, fusionando arte e ingeniería en una danza con el viento.",
        quote: "Cuando el viento sopla, la playa cobra vida."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Quiet Place Project",
        url: "http://thequietplaceproject.com/",
        description: "Un refugio digital que te invita a dejar de lado las distracciones del mundo online y disfrutar de instantes de soledad en un espacio virtual tranquilo.",
        quote: "Encuentra el silencio en la maraña del ruido digital."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Neko Atsume: Kitty Collector",
        url: "https://www.nekoatsume.com/",
        description: "Un juego en el que todo lo que haces es colocar juguetes y comida para atraer gatos virtuales a tu jardín, una experiencia tan absurda como encantadora.",
        quote: "A veces, coleccionar momentos de ternura es suficiente."
    },
    {
        category: "Mundos "under", subculturas",
        title: "Cicada 3301",
        url: "https://cicada3301.github.io/",
        description: "Un misterioso colectivo que lanzó complejas pruebas de reclutamiento en internet, desafiando la lógica y atrayendo a criptoanalistas y amantes del misterio.",
        quote: "El camino al conocimiento es laberíntico."
    },
    {
        category: "Estéticas raras",
        title: "Virtual Dream Foundation",
        url: "http://www.virtualdreamfoundation.org/",
        description: "Explora una colección de sueños digitales que evoca las estéticas del net.art y el vaporwave, creando una cartografía onírica del mundo virtual.",
        quote: "Los sueños también se crean con píxeles."
    },
    {
        category: "Ideas provocadoras",
        title: "This is Sand",
        url: "https://thisissand.com/",
        description: "Convierte tu pantalla en un lienzo de arena, dejando que millones de granos virtuales fluyan y formen paisajes únicos. Una idea simple que desafía nuestra percepción de lo tangible.",
        quote: "Cada grano cuenta una historia."
    },
    {
        category: "Blogs olvidados",
        title: "BLDGBLOG",
        url: "https://www.bldgblog.com/",
        description: "Un blog que explora las fronteras de la arquitectura y el paisaje urbano, desenterrando ideas olvidadas y visiones alternativas del espacio construido.",
        quote: "Las ciudades son sueños congelados en concreto."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Museum of Broken Relationships",
        url: "https://brokenships.com/",
        description: "Una exposición itinerante que colecciona objetos donados por gente de todo el mundo para narrar las historias de relaciones pasadas y pérdidas amorosas.",
        quote: "Los fragmentos del corazón son arte en potencia."
    },
    {
        category: "Filosofía digital",
        title: "The Center for Humane Technology",
        url: "https://www.humanetech.com/",
        description: "Un movimiento que busca rediseñar la tecnología poniendo en el centro el bienestar humano, cuestionando la naturaleza de nuestras interacciones digitales.",
        quote: "La verdadera innovación está en humanizar la tecnología."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Bored Button",
        url: "https://www.boredbutton.com/",
        description: "Un botón que te lleva a una serie de webs aleatorias diseñadas para combatir el aburrimiento. Una puerta a lo insólito que no sabías que necesitabas.",
        quote: "En la era del exceso de información, el tedio es un tesoro."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Shintaro Kago",
        url: "https://sakaisei.com/tag/shintaro-kago/",
        description: "Artista japonés del manga ero guro, mezcla de grotesco y erotismo. Sus ilustraciones muestran el lado más oscuro y surrealista de la mente humana.",
        quote: "La belleza emerge de la deformidad interior."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "This Is Sand",
        url: "https://thisissand.com/",
        description: "Una canvas digital donde puedes crear paisajes con arena virtual. La simplicidad se encuentra con la meditación en un collage de colores brillantes.",
        quote: "Cada grano cuenta una historia en el desierto de lo digital."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Neko Atsume",
        url: "http://www.nekoatsume.com/",
        description: "Un juego para coleccionar gatos en tu patio virtual. Simple, fascinante y sutilmente adictivo para los amantes de los felinos.",
        quote: "El arte de la paciencia se aprende esperando un visitante peludo."
    },
    {
        category: "Mundos "under", subculturas",
        title: "Cypherpunks Mailing List",
        url: "http://cypherpunks.venona.com/date/",
        description: "El archivo de una lista de correos donde visionarios discutieron sobre criptografía y la privacidad en Internet. Un vistazo al nacimiento de la libertad digital.",
        quote: "El futuro de la privacidad fue redactado en códigos y correo."
    },
    {
        category: "Estéticas raras",
        title: "Cyberpunk Forum",
        url: "https://cyberpunkforums.com/",
        description: "Un refugio para aquellos interesados en la estética y las ideas del cyberpunk. Aquí la tecnología y el arte se fusionan en un caleidoscopio distópico.",
        quote: "La distopía es el sueño del insomnio tecnológico."
    },
    {
        category: "Ideas provocadoras",
        title: "The Last Message Received",
        url: "https://thelastmessagereceived.tumblr.com/",
        description: "Una colección de mensajes finales enviados por personas que se han ido. Un recordatorio del poder emocional de las palabras que pronunciamos.",
        quote: "Cada despedida es una pequeña eternidad encapsulada."
    },
    {
        category: "Blogs olvidados",
        title: "PostSecret",
        url: "https://postsecret.com/",
        description: "Un blog donde los usuarios envían secretos anonimamente en forma de postales. La vida privada hecha arte colectivo.",
        quote: "Todos guardamos un mar de secretos en el silencio del corazón."
    },
    {
        category: "Performances o exposiciones raras",
        title: "On Kawara - One Million Years",
        url: "https://www.tate.org.uk/art/artworks/kawara-one-million-years-p13097",
        description: "Una obra que lista cada año desde hace un millón hasta dentro de un millón de años. Una exploración del tiempo que transforma la historia en mantra.",
        quote: "El tiempo no corre, nos transforma."
    },
    {
        category: "Música experimental",
        title: "The Conet Project",
        url: "http://www.irdial.com/conet.htm",
        description: "Grabaciones de números estaciones de onda corta, posiblemente usadas para mensajes de espionaje. La inquietante melodía de lo desconocido.",
        quote: "En el aire, las cifras son los susurros de lo invisible."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Endless Horse",
        url: "http://endless.horse/",
        description: "Un sitio que desafía la lógica con un caballo interminable. Desplázate hacia abajo y descubre por cuánto tiempo puedes seguir viendo el caballo sin fin.",
        quote: "La infinitud es un espacio que solo la imaginación puede recorrer."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "The Art of Jeremy Geddes",
        url: "http://www.jeremygeddesart.com/",
        description: "Jeremy Geddes crea mundos etéreos con sus pinturas al óleo, llenos de soledad y misterio. Sus obras evocan un sentimiento de aislamiento surrealista.",
        quote: "El arte es el lenguaje del silencio."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "This Person Does Not Exist",
        url: "https://thispersondoesnotexist.com/",
        description: "Genera rostros humanos realistas de personas que simplemente no existen. Un proyecto que desafía la percepción de la realidad y la identidad.",
        quote: "La ilusión más convincente es aquella que nunca existió."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Frog Fractions",
        url: "http://twinbeard.com/frog-fractions",
        description: "Un juego que empieza siendo sobre fracciones... o eso parece. Pronto, te encontrarás en una travesía surrealista que desafía las expectativas.",
        quote: "Las matemáticas no son lo que parecen en este lío anfibio."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "Dumpster Diving Reddit",
        url: "https://www.reddit.com/r/DumpsterDiving/",
        description: "Un rincón de internet donde se comparte la cultura del reciclaje y la reutilización, convirtiendo la basura en tesoro.",
        quote: "Lo que un hombre tira, otro lo convierte en un arte."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Cyber City Oedo 808 Vaporwave",
        url: "https://cybercityodvapor.neocities.org/",
        description: "Un sitio que encapsula la esencia del vaporwave, con una estética cyberpunk que combina pasado, presente y futuro en un solo golpe visual.",
        quote: "Navega por el ciberespacio; un sueño digital atrapado en un bucle."
    },
    {
        category: "Ideas provocadoras",
        title: "The Last Message Received",
        url: "http://thelastmessagereceived.tumblr.com/",
        description: "Una colección conmovedora de los últimos mensajes recibidos antes de un adiós permanente. Refleja las emociones humanas en su momento más vulnerable.",
        quote: "Las despedidas escritas resuenan en el eco de la eternidad."
    },
    {
        category: "Blogs olvidados",
        title: "The Strange Case of Origami Yoda",
        url: "http://origamiyoda.wordpress.com/",
        description: "Un blog sobre una pequeña figura de origami Yoda, que comparte consejos de vida sinceros y divertidos en una sala de escuela.",
        quote: "Incluso el papel puede doblarse en sabiduría."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Guggenheim's Floating Island",
        url: "https://www.guggenheim.org/exhibition/robert-smithson-floating-island",
        description: "Una isla que se desplaza por el río Hudson en un homenaje al artista Robert Smithson. La obra redefine el concepto de escultura y paisaje.",
        quote: "El arte, como los sueños, a veces necesita flotar libremente."
    },
    {
        category: "Música experimental",
        title: "The Disintegration Loops",
        url: "https://pitchfork.com/reviews/albums/17430-the-disintegration-loops/",
        description: "Una serie de composiciones que capturan el proceso de deterioro magnético de las cintas de audio. La belleza se encuentra en el desvanecimiento y la decadencia.",
        quote: "Hay música en la descomposición, un eco del tiempo desvaneciéndose."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com/",
        description: "Un gusano negro que responde a cada sacudida del mouse, estallando en una danza de colores asombrosamente psicodélica. Una experiencia hipnotizante en su inutilidad.",
        quote: "A veces la belleza reside en la pura incomodidad."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Molly Soda",
        url: "http://mollysoda.exposed/",
        description: "La artista digital Molly Soda crea obras que exploran la identidad y la vulnerabilidad en la era de las redes sociales, desdibujando las líneas entre lo personal y lo público.",
        quote: "La intimidad es un campo de batalla digital."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "PostSecret",
        url: "http://postsecret.com/",
        description: "Un proyecto comunitario donde personas de todo el mundo envían postales anónimas con secretos, revelando la belleza y el dolor universal de la experiencia humana.",
        quote: "Todos guardamos un mar de confesiones en nuestros corazones."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Neko Atsume",
        url: "https://www.nekoatsume.com/",
        description: "Un encantador juego donde coleccionas virtualmente gatos en tu jardín, celebrando la pasividad y la alegría de lo absurdo en la vida digital.",
        quote: "A veces, la felicidad se mide en gatos virtuales."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "Cyborg Nest",
        url: "https://www.cyborgnest.net/",
        description: "Un rincón donde biohackers exploran la fusión del cuerpo humano con lo tecnológico, llevando la noción de humanidad a nuevos horizontes y posibilidades.",
        quote: "El futuro del ser humano está en la unión entre carne y circuito."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Critter & Guitari",
        url: "https://www.critterandguitari.com/",
        description: "Una plataforma de arte modular que combina dispositivos audiovisuales con un toque de estética glitch, permitiendo explorar lo inesperado en cada sonido y pixel.",
        quote: "La imperfección da lugar a la auténtica belleza."
    },
    {
        category: "Ideas provocadoras",
        title: "The Immediate Life",
        url: "http://immediatelife.tumblr.com/",
        description: "Un viaje visual a través de fragmentos de vida, yuxtaponiendo imágenes que desafían y emocionan, permitiendo que el espectador complete su propio significado.",
        quote: "La vida no es más que un mosaico de momentos."
    },
    {
        category: "Blogs olvidados",
        title: "The Last Psychiatrist",
        url: "http://thelastpsychiatrist.com/",
        description: "Un blog provocador y a menudo crítico que explora la psique humana y la cultura moderna, desafiando nuestras suposiciones con un bisturí afilado de ironía.",
        quote: "La locura es solo una medida de discordancia con la norma."
    },
    {
        category: "Música experimental",
        title: "People Like Us",
        url: "https://peoplelikeus.org/",
        description: "La artista Vicki Bennett crea collages sonoros que desafían las categorías tradicionales, llevando al oyente a un viaje de descubrimiento auditivo único.",
        quote: "El sonido es solo una narrativa esperando ser contada."
    },
    {
        category: "Filosofía digital",
        title: "The Digital Beyond",
        url: "https://www.thedigitalbeyond.com/",
        description: "Explora el concepto de la muerte digital y el legado de nuestros 'yo' virtuales en un mundo donde lo temporal se vuelve eterno.",
        quote: "La continuidad de nuestra existencia está enlazada en bits y bytes."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Cyborg Name Generator",
        url: "http://cybernations.wikia.com/wiki/Cyborg_Name_Generator",
        description: "Un sitio que te asigna un nombre de cyborg, con títulos tan curiosos como 'Quantum-C-Unit'. Es inútil, pero irresistiblemente entretenido.",
        quote: "¿Qué nombre tendría tu versión robótica?"
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "The Art of Jolene Lau",
        url: "https://www.jolene-lau.com/",
        description: "Jolene Lau se adentra en lo surrealista con sus coloridas y oníricas ilustraciones que invitan a perderse en mundos de ensueño.",
        quote: "La realidad parece un sueño cuando el arte llama."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Quiet Place Project",
        url: "https://thequietplaceproject.com/",
        description: "Un refugio digital para desconectar del ruido y encontrar paz. Sin notificaciones ni distracciones, un espacio para sólo estar.",
        quote: "La tranquilidad no tiene precio, pero puede tener URL."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Sandspiel",
        url: "https://sandspiel.club/",
        description: "Un juego que simula la física de partículas de manera relajante, creando paisajes únicos con elementos como agua, fuego y plantas.",
        quote: "Construye mundos de arena donde la física es poesía."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "Post-Internet Survival Guide",
        url: "https://pismoresearch.org/guide",
        description: "Una guía para comprender las subculturas digitales que emergen tras el colapso de internet tal como lo conocemos.",
        quote: "Sobreviviendo a lo que viene después del fin digital."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Glitch Art Collective",
        url: "https://glitchart.com/",
        description: "Un colectivo que celebra los errores visuales como forma de arte, transformando fallos digitales en vibrantes obras creativas.",
        quote: "El error en la máquina tiene su propia belleza."
    },
    {
        category: "Ideas provocadoras",
        title: "A Philosophy of Boredom",
        url: "https://philosophyofboredom.com/",
        description: "Un blog dedicado a explorar el concepto de aburrimiento como estímulo intelectual y creativo, más que un estado de apatía.",
        quote: "El aburrimiento es un prisma que refracta la creatividad."
    },
    {
        category: "Blogs olvidados",
        title: "Encyclopedia Obscura",
        url: "http://www.encyclopediaobscura.com/",
        description: "Una colección de entradas que documentan lo extraño y lo maravilloso en tópicos históricos, científicos y culturales.",
        quote: "Explorando los márgenes de la curiosidad."
    },
    {
        category: "Performances o exposiciones raras",
        title: "Invisible Exhibition",
        url: "https://invisibleexhibition.com/",
        description: "Una exposición que desafía los sentidos al explorar el arte desde la ceguera, guiando a los participantes en la oscuridad.",
        quote: "Cuando el arte se siente más allá de lo visible."
    },
    {
        category: "Música experimental",
        title: "Disquiet Junto",
        url: "https://disquiet.com/category/junto/",
        description: "Un colectivo de músicos experimentales que semanalmente crean piezas basadas en instrucciones específicas, desafiando los límites del sonido.",
        quote: "Cuando la música se convierte en un experimento semanal."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Patatap",
        url: "https://patatap.com/",
        description: "Un sitio donde cada tecla del teclado genera un sonido y una animación única. Es una experiencia sensorial que transforma el aburrimiento en un juego audiovisual.",
        quote: "La música es el espacio entre las notas."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Chrisilyst",
        url: "https://chrisilyst.com/",
        description: "Chrisilyst es un artista autodidacta que crea simultáneamente caos y orden usando líneas y patrones repetitivos. Sus obras son embriagadoras y reflejan un universo paralelo de geometría infinita.",
        quote: "Las líneas son universos en expansión."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Infinite Conversation",
        url: "https://infiniteconversation.com/",
        description: "Este proyecto utiliza inteligencia artificial para generar una conversación interminable entre dos filósofos podrían discutir eternamente sobre el universo, el arte y la existencia.",
        quote: "El diálogo sin fin es el eco del pensamiento humano."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "QWOP",
        url: "http://www.foddy.net/Athletics.html",
        description: "En este simulador de atletismo, controlarás a un corredor con las teclas Q, W, O y P, en una experiencia tan frustrante como divertida. El desafío yace en mover las piernas correctamente.",
        quote: "El fracaso está a solo un paso en falso."
    },
    {
        category: "Subculturas",
        title: "Vapor95",
        url: "https://vapor95.com/blogs/vapor95-blog",
        description: "Explora un blog que se sumerge en la cultura vaporwave, una subcultura que mezcla nostalgia, música retro y saturación visual para crear una estética nostálgica y futurista a la vez.",
        quote: "El pasado y el futuro colisionan en la memoria digital."
    },
    {
        category: "Estéticas raras",
        title: "Fractal Lab",
        url: "http://hirnsohle.de/test/fractalLab/",
        description: "Un generador interactivo de fractales en 3D que te permite explorar y crear tus propios patrones fractales. Es un viaje hipnótico hacia el infinito matemático.",
        quote: "Los fractales son las huellas digitales del universo."
    },
    {
        category: "Ideas provocadoras",
        title: "Weird Box",
        url: "https://weirdbox.tv/",
        description: "Weird Box inserta tus fotos de Instagram en un cortometraje interactivo donde las redes sociales se funden con un thriller surrealista.",
        quote: "Cuando la realidad y la ficción colisionan, nace lo extraño."
    },
    {
        category: "Blogs olvidados",
        title: "The Last Blog",
        url: "http://www.thelastblog.com/",
        description: "Un blog encantadoramente anacrónico que continúa publicando reflexiones, poesía y arte en la era de la inmediatez digital. Un refugio para el pensamiento prolongado.",
        quote: "Las palabras escritas son relojes que desafían el tiempo."
    },
    {
        category: "Performances o exposiciones raras",
        title: "Mono-Ha",
        url: "https://www.tate.org.uk/art/art-terms/m/mono-ha",
        description: "Explora la filosofía y obras de Mono-Ha, el movimiento artístico japonés que utilizaba materiales naturales y objetos industriales para desafiar las percepciones tradicionales del arte.",
        quote: "El arte es la danza del orden y el caos."
    },
    {
        category: "Música experimental",
        title: "Radiophonic Workshop",
        url: "https://www.bbc.co.uk/programmes/articles/4LT8Lr8w4m3n8LtqNF04mCz/the-radiophonic-workshop",
        description: "Revive el legado de un colectivo pionero de la BBC, que revolucionó la música experimental y los efectos de sonido en la radio y televisión del siglo XX.",
        quote: "El sonido es la materia prima de la imaginación."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Patatap",
        url: "https://patatap.com/",
        description: "Un sitio interactivo que convierte tu teclado en una máquina de sonidos y animaciones hipnóticas. Cada tecla es una sorpresa visual y auditiva.",
        quote: "¿Cuántos mundos hay en un teclado?"
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Tim Bavington",
        url: "http://www.timbavington.com/",
        description: "Este artista transforma la música en color con un enfoque sinestésico único. Cada obra es una interpretación visual de una canción.",
        quote: "Deja que la música pinte tus sueños."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Museum of Broken Relationships",
        url: "https://brokenships.com/",
        description: "Una colección de objetos cotidianos que cuentan historias de amor perdido, cada pieza es un testimonio de la fragilidad humana.",
        quote: "En las ruinas del amor, encontramos la belleza."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "QWOP",
        url: "http://www.foddy.net/Athletics.html",
        description: "Un juego absurdamente difícil donde controlas un corredor con las teclas QWOP de tu teclado. La física extraña hace de este juego un reto hilarante.",
        quote: "Fracasar nunca fue tan entretenido."
    },
    {
        category: "Mundos "under", subculturas",
        title: "SpaceHey",
        url: "https://spacehey.com/",
        description: "Una red social nostálgica que revive la estética y la comunidad de MySpace. Un viaje al internet de principios de los 2000.",
        quote: "Viajemos al pasado digital, un post a la vez."
    },
    {
        category: "Estéticas raras",
        title: "Cave of Forgotten Dreams",
        url: "https://www.documentarytube.com/videos/cave-of-forgotten-dreams",
        description: "Un documental de Werner Herzog sobre las cuevas de Chauvet, cuyos secretos y arte rupestre antiguo desafían la comprensión del tiempo y el arte.",
        quote: "El arte es el eco de la eternidad."
    },
    {
        category: "Ideas provocadoras",
        title: "Unconsumption",
        url: "http://unconsumption.tumblr.com/",
        description: "Un blog que reimagina el consumo como una actividad consciente, proponiendo formas de reutilizar y repensar nuestros hábitos de compra.",
        quote: "Porque poseer menos es poseer más."
    },
    {
        category: "Blogs olvidados",
        title: "PostSecret",
        url: "https://postsecret.com/",
        description: "Un espacio donde personas anónimas envían sus más profundos secretos en forma de postales. Una ventana al alma humana.",
        quote: "Los secretos unen lo que el silencio separa."
    },
    {
        category: "Performances o exposiciones raras",
        title: "ŠKART",
        url: "https://skart.rs/",
        description: "Un colectivo serbio que combina poesía, diseño gráfico, y activismo social, creando performances que desafían lo cotidiano.",
        quote: "El arte que grita en silencio."
    },
    {
        category: "Filosofía digital",
        title: "The Glass Bead Game",
        url: "https://glassbead.org/",
        description: "Una revista y proyecto filosófico que explora la intersección de la ciencia, el arte y la filosofía. Un juego intelectual de conexiones.",
        quote: "Todo está conectado en el vasto juego del conocimiento."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Zoom Quilt",
        url: "http://zoomquilt.org/",
        description: "Zoom Quilt es una alucinante experiencia visual que parece no tener final. Se trata de una colaboración entre múltiples artistas para crear una imagen infinita y en constante zoom, generando un efecto hipnótico y surreal.",
        quote: "La infinitud del arte no tiene límites ni bordes."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Joel-Peter Witkin",
        url: "https://www.edelmangallery.com/joel-peter-witkin",
        description: "El universo de Joel-Peter Witkin es oscuro y provocador. Sus fotografías desafían las normas del arte convencional, explorando temas de muerte, sexualidad y religión de una manera perturbadora.",
        quote: "Donde existe la controversia, el arte respira."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Pheromone Synthesizer",
        url: "https://www.artlery.com/art/The-Pheromone-Synthesizer-13189",
        description: "Un extraño proyecto que busca replicar feromonas humanas mediante una máquina. Esta obra experimental combina ciencia y arte para hacer visible lo invisible e inaudito.",
        quote: "Los olores también cuentan historias que nadie escucha."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Isle of Tune",
        url: "http://isleoftune.com/",
        description: "Isle of Tune te permite crear música a través de la construcción de una ciudad musical. Cada elemento del entorno genera un sonido, sumergiéndote en un mundo donde la urbanización se convierte en sinfonía.",
        quote: "Edificando melodías en el vasto terreno de la imaginación."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "Furscience",
        url: "https://furscience.com/",
        description: "Furscience es un espacio dedicado al estudio científico de la comunidad 'furry'. Aquí se exploran los aspectos culturales, sociales y psicológicos de esta vibrante subcultura.",
        quote: "En el pelaje se encuentran historias más profundas de lo que se ve."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Hyper Geography",
        url: "https://www.hypergeography.tumblr.com/",
        description: "Un blog visual que desafía la percepción del espacio y la geografía. A través de collages digitales, Hyper Geography crea una experiencia estética única y desorientadora.",
        quote: "El mundo en un collage pixelado y sin fronteras."
    },
    {
        category: "Ideas provocadoras",
        title: "Dead Drops",
        url: "https://deaddrops.com/",
        description: "Dead Drops es una red de intercambio de archivos fuera de línea en espacios públicos. USBs cementados en paredes urbanas invitan a una reflexión sobre la privacidad digital.",
        quote: "Los secretos mejor guardados pueden estar al alcance de todos."
    },
    {
        category: "Blogs olvidados",
        title: "The Obscure Hollow",
        url: "https://theobscurehollow.blogspot.com/",
        description: "Un blog que explora casas antiguas, encantadas y estéticamente inquietantes. The Obscure Hollow te invita a un viaje a través del tiempo y la arquitectura olvidada.",
        quote: "Entre las ruinas yace la memoria de lo que fue."
    },
    {
        category: "Performances o exposiciones raras",
        title: "Ryoji Ikeda's Data-verse",
        url: "https://ryojiikeda.com/project/data-verse/",
        description: "Ryoji Ikeda manipula datos en una serie de performances audiovisuales que transforman información en arte sensorial. Data-verse es una sinfonía moderna de bits y bytes.",
        quote: "En el caos del código, la belleza encuentra su orden."
    },
    {
        category: "Música experimental",
        title: "Plunderphonics by John Oswald",
        url: "http://www.plunderphonics.com/",
        description: "John Oswald desafía la música convencional al remezclar y reorganizar sonidos existentes en nuevas composiciones. Este acto de 'plunderphonics' cuestiona los límites de la autoría musical.",
        quote: "La música es un río en constante remolino."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Zoom Quilt",
        url: "https://zoomquilt.org/",
        description: "Un viaje visual interminable que te sumerge a través de un mundo de imágenes infinitamente conectadas. El arte va más allá de lo convencional, empujándote hacia un abismo onírico de creatividad y detalles.",
        quote: "¿Y si el infinito fuera una serie de sueños interconectados?"
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Jan von Holleben",
        url: "https://www.janvonholleben.com/",
        description: "Fotógrafo que transforma la cotidianidad en obras fantásticas. Su enfoque único desafía la percepción del espacio y el tiempo, creando universos paralelos a partir de objetos comunes.",
        quote: "La magia está donde menos lo esperas, a menudo bajo tus pies."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Quiet Place Project",
        url: "http://thequietplaceproject.com/",
        description: "Un refugio digital para escapar del ruido constante de la vida moderna. Ofrece una serie de experiencias interactivas que invitan a la introspección y a la serenidad.",
        quote: "A veces, el sonido más potente es el silencio."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Pippo",
        url: "https://pippo.phetch.co/",
        description: "Un juego de palabras visuales, donde tu objetivo es identificar lo incorrecto en imágenes cotidianas. Es un test de observación que te hará dudar de la realidad tal como la conoces.",
        quote: "Lo extraño se oculta a plena vista."
    },
    {
        category: "Mundos "under", subculturas",
        title: "Balloon HQ",
        url: "http://balloonhq.com/",
        description: "Un portal inesperado a la comunidad global de arte y escultura con globos. Más que entretenimiento infantil, es un mundo vibrante de creatividad e innovación.",
        quote: "La ligereza del arte solo es superada por la imaginación que lo infla."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Glitche",
        url: "https://glitche.com/",
        description: "Un experimento visual que permite crear arte glitch a partir de tus fotos. Una ruptura con la perfección digital que te invita a explorar la belleza de la imperfección.",
        quote: "A veces, el error es el camino más directo hacia lo hermoso."
    },
    {
        category: "Ideas provocadoras",
        title: "Museum of Endangered Sounds",
        url: "http://savethesounds.info/",
        description: "Una cápsula del tiempo digital que conserva los sonidos emblemáticos de tecnologías obsoletas. Un recordatorio auditivo de cómo el progreso transforma nuestro paisaje cotidiano.",
        quote: "El eco del pasado resuena en el futuro."
    },
    {
        category: "Blogs olvidados",
        title: "Things We Forget",
        url: "https://thingsweforget.blogspot.com/",
        description: "Un blog con notas adhesivas ilustradas que se centran en frases motivadoras y pensamientos introspectivos. Pequeños recordatorios de humanidad dejados al azar en el mundo.",
        quote: "Las palabras que olvidamos dicen más de lo que recordamos."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Museum of Jurassic Technology",
        url: "http://www.mjt.org/",
        description: "Un museo que desafía las expectativas de lo que es o debería ser un museo, exhibiendo artefactos inesperados que invitan a reflexionar sobre la memoria, el conocimiento y la percepción.",
        quote: "En el cruce entre lo real y lo imaginado, florece la maravilla."
    },
    {
        category: "Música experimental",
        title: "Disquiet Junto",
        url: "https://disquiet.com/",
        description: "Comunidad de músicos que participan en desafíos semanales para crear música experimental. Una colmena de creatividad sónica que explora los límites del sonido en la era digital.",
        quote: "Cada nota es un paso hacia lo desconocido."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Zoomquilt",
        url: "http://zoomquilt.org/",
        description: "Un viaje visual interminable a través de un paisaje surrealista que se expande y contrae en un bucle infinito. Cada imagen fluye hacia la siguiente, creando una ilusión hipnótica que desafía la percepción del espacio.",
        quote: "El infinito es un enigma envuelto en la eternidad."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Anne van der Linden",
        url: "http://annevanderlinden.net/",
        description: "Anne van der Linden es una pintora y dibujante cuyo trabajo explora lo grotesco, lo sensual y lo subversivo. Sus obras provocativas desdibujan las fronteras entre el cuerpo y la mente, desafiando las normas artísticas convencionales.",
        quote: "Lo grotesco revela aquello que la belleza esconde."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "The Human Clock",
        url: "http://www.humanclock.com/",
        description: "Una curiosa colección de fotografías que muestran personas sosteniendo el tiempo. Cada minuto del día se representa con una imagen diferente, creando una cápsula del tiempo visual que cambia constantemente.",
        quote: "El tiempo es un mosaico de momentos efímeros."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Neko Atsume",
        url: "http://nekoatsume.com/",
        description: "Un juego encantadormente absurdo donde el objetivo es atraer gatos virtuales a tu jardín con juguetes y comida. Imagina un mundo donde los felinos son la única preocupación, proporcionando una satisfacción inesperadamente serena.",
        quote: "La simplicidad del juego es un refugio de tranquilidad."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "Ghost Town Cafe",
        url: "https://ghosttowncafe.neocities.org/",
        description: "Un rincón digital dedicado a la exploración de lo paranormal y lo inexplicado. Esta comunidad online fomenta el intercambio de historias de encuentros sobrenaturales, avistamientos de ovnis y lo inexplicable.",
        quote: "Lo desconocido es un eco del mundo que no vemos."
    },
    {
        category: "Estéticas raras",
        title: "Glitché App Showcase",
        url: "https://glitche.com/",
        description: "Explora las posibilidades del arte en la era digital con Glitché, una aplicación que transforma las imágenes cotidianas en obras glitch art. Los ejemplos presentados muestran la belleza oculta en el error.",
        quote: "El caos puede ser tan hermoso como el orden."
    },
    {
        category: "Ideas provocadoras",
        title: "PostSecret",
        url: "https://postsecret.com/",
        description: "Un proyecto comunitario donde las personas envían sus secretos de forma anónima en postales. El espacio se convierte en un lienzo para confesiones humanas, desde lo cómico hasta lo trágico.",
        quote: "Los secretos son las sombras del alma."
    },
    {
        category: "Blogs olvidados",
        title: "Things Organized Neatly",
        url: "http://thingsorganizedneatly.tumblr.com/",
        description: "Un blog dedicado a la organización visual, donde los objetos cotidianos se transforman en arte a través del orden y la simetría. Una oda a la armonía en las pequeñas cosas de la vida.",
        quote: "El orden revela lo sublime en lo cotidiano."
    },
    {
        category: "Experimentos sociales",
        title: "We Feel Fine",
        url: "http://www.wefeelfine.org/",
        description: "Este proyecto recopila sentimientos humanos de blogs en todo el mundo, creando una representación visual de las emociones colectivas. Una exploración poética de la humanidad a través de los datos.",
        quote: "Cada sentimiento es un latido en el corazón del mundo."
    },
    {
        category: "Filosofía digital",
        title: "The Cyborg Manifesto",
        url: "https://theanarchistlibrary.org/library/donna-haraway-a-cyborg-manifesto",
        description: "Un ensayo seminal de Donna Haraway que desafía las definiciones tradicionales de naturaleza, cultura y tecnología. Propone una visión radical del futuro posthumano a través del lente del ciborg.",
        quote: "El futuro será híbrido o no será."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Staggering Beauty",
        url: "http://www.staggeringbeauty.com/",
        description: "Un gusano negro se retuerce frenéticamente al movimiento de tu cursor, creando un espectáculo visual que desafía el sentido común. Es una experiencia que combina simpleza y caos en un rincón digital.",
        quote: "A veces, la inutilidad es la más pura forma de diversión."
    },
    {
        category: "Estéticas raras",
        title: "Cameron's World",
        url: "http://www.cameronsworld.net/",
        description: "Un homenaje vibrante al internet de los años 90, donde los gráficos pixelados y los colores llamativos te trasladan a una era de ingenuidad digital. Cada clic es un viaje a la nostalgia más ruidosa.",
        quote: "El pasado digital nunca estuvo tan vivo."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "We Feel Fine",
        url: "http://www.wefeelfine.org/",
        description: "Un proyecto que recopila y visualiza las emociones de millones de personas a través de sus blogs. Una obra de arte colectiva que transforma el sentir humano en colores y formas, revelando patrones de la humanidad.",
        quote: "Más que palabras, somos emociones compartidas."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Dinosaur Polo Club's Mini Metro",
        url: "https://dinopoloclub.com/minimetro/",
        description: "Un juego de simulación de metro minimalista que desafía la lógica y la paciencia mientras intentas mantener una ciudad funcional. Una representación perfecta de cómo el caos y el orden pueden coexistir de manera entretenida.",
        quote: "Construir un sistema perfecto, un ciclo interminable."
    },
    {
        category: "Música experimental",
        title: "Patatap",
        url: "https://www.patatap.com/",
        description: "Una herramienta interactiva que transforma las pulsaciones de teclas en música y arte visual. Cada letra desencadena un sonido único, creando una sinfonía de caos y belleza sincronizada.",
        quote: "La música del teclado, el arte del instante."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Embroidered Digital Commons",
        url: "https://www.hq.uis.no/~signe/idngr_dev/EDC/",
        description: "Signe Lidén borda términos tecnológicos en tela, evocando una era en que las palabras eran rarezas táctiles. Una mezcla de lo antiguo y lo moderno que invita a reflexionar sobre el significado de lo digital.",
        quote: "Tejer conceptos como quien cose un nuevo lenguaje."
    },
    {
        category: "Filosofía digital",
        title: "The Glass Bead Game",
        url: "http://www.holosfind.com/glassbeadgame/",
        description: "Un espacio digital donde las ideas se entrelazan en complejas redes. Inspirado por la obra de Hermann Hesse, es un juego mental que explora el infinito potencial de la mente humana.",
        quote: "En el juego de las ideas, la mente es el tablero."
    },
    {
        category: "Subculturas",
        title: "MyNoise",
        url: "https://mynoise.net/",
        description: "Un sitio que ofrece generadores de ruido ajustables para crear paisajes sonoros personalizables. Es un refugio acústico para aquellos que buscan paz o concentración en un mundo saturado de sonido.",
        quote: "El silencio también tiene su propio sonido."
    },
    {
        category: "Ideas provocadoras",
        title: "This is sand",
        url: "https://thisissand.com/",
        description: "Convierte tu pantalla en un lienzo digital de arena. A través del simple acto de dejar caer granos de colores, se invita a la contemplación y la creación en un mundo donde la simplicidad es revolucionaria.",
        quote: "La eternidad se mide en granos de arena."
    },
    {
        category: "Experimentos sociales",
        title: "The Quiet Place Project",
        url: "http://thequietplaceproject.com/",
        description: "Un espacio virtual diseñado para desconectar del ruido digital, invitando al visitante a un refugio de tranquilidad y meditación sencilla. Aquí, el silencio es un lujo indulgente.",
        quote: "Desconectar para conectarse con uno mismo."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "Patience is a Virtue",
        url: "https://patience-is-a-virtue.org/",
        description: "Un sitio que celebra la paciencia, con una sola página que se carga infinitamente y sin ofrecer nada más que la experiencia de esperar. Una oda a lo inútil en la era de la instantaneidad.",
        quote: "A veces, esperar es lo único que podemos hacer."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Don Porcella",
        url: "http://www.donporcella.com/",
        description: "Don Porcella utiliza limpiapipas para crear esculturas coloridas y absurdas que redefinen el significado de lo efímero y lo cotidiano, mostrando otro ángulo del arte contemporáneo.",
        quote: "El arte es la reimaginación de lo ordinario."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "Weird Box",
        url: "http://weirdbox.tv/",
        description: "Un proyecto interactivo donde puedes ver tus fotos de Instagram en una extraña y surrealista caja de televisión, cuestionando la relación entre tecnología e identidad.",
        quote: "Mira cómo te ve la pantalla."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "A Dark Room",
        url: "http://adarkroom.doublespeakgames.com/",
        description: "Un juego de texto minimalista que comienza con una simple habitación oscura y se convierte en una épica experiencia de supervivencia, exploración y misterio.",
        quote: "En la oscuridad es donde realmente despertamos."
    },
    {
        category: "Mundos 'under', subculturas",
        title: "DeepDream Viewer",
        url: "https://deepdreamviewer.com/",
        description: "Explora el surrealista universo del algoritmo DeepDream, donde las imágenes son reimaginadas con un toque psicodélico y un vistazo a la percepción artificial.",
        quote: "Las máquinas también sueñan."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Glitché Art",
        url: "https://www.glitche.com/",
        description: "Una aplicación que permite crear glitch art en dispositivos móviles, descompone y distorsiona imágenes para transformarlas en obras de arte digital únicas.",
        quote: "La belleza en el error."
    },
    {
        category: "Ideas provocadoras",
        title: "The Quiet Place Project",
        url: "http://thequietplaceproject.com/",
        description: "Un refugio digital del ruido y el caos de internet, ofreciendo espacios de tranquilidad virtual para la reflexión y el silencio en medio de la saturación digital.",
        quote: "Encuentra la calma en un mundo ruidoso."
    },
    {
        category: "Blogs olvidados",
        title: "Hyperbole and a Half",
        url: "http://hyperboleandahalf.blogspot.com/",
        description: "Con humor e ilustraciones crudamente honestas, este blog explora la vida con una mirada irónica y conmovedora, ofreciendo un espacio para la risa y la reflexión.",
        quote: "La vida es una tragicomedia de dibujos."
    },
    {
        category: "Performances o exposiciones raras",
        title: "Luminiferous Aether",
        url: "https://www.luminiferousaether.com/",
        description: "Una exposición virtual que combina arte, ciencia y filosofía para explorar la noción del éter luminífero en un espacio digital envolvente lleno de misterio.",
        quote: "Más allá de lo visible reside la verdadera luz."
    },
    {
        category: "Música experimental",
        title: "Disquiet Junto",
        url: "https://disquiet.com/",
        description: "Una comunidad sonora en línea dedicada a la música experimental, que cada semana propone un desafío creativo para explorar nuevos horizontes musicales.",
        quote: "El sonido es una exploración infinita."
    },
    {
        category: "Webs extrañas o inútiles",
        title: "The Museum of Endangered Sounds",
        url: "http://savethesounds.info/",
        description: "Un museo digital dedicado a preservar los sonidos que podrían perderse en la era digital, como el zumbido del dial-up o el clic de un disquete. Un viaje sonoro nostálgico hacia tiempos más simples.",
        quote: "El silencio no es siempre de oro; a veces, es un sonido olvidado."
    },
    {
        category: "Artistas desconocidos o marginales",
        title: "Jennet Thomas",
        url: "http://www.jennetthomas.co.uk/",
        description: "Artista multimedia que desafía los límites del videoarte con narrativas surrealistas e imágenes de otro mundo. Su trabajo explora la frontera entre lo absurdo y lo inquietante.",
        quote: "En lo extraño habita la verdad."
    },
    {
        category: "Proyectos raros y experimentales",
        title: "Weird Box",
        url: "http://weirdbox.tv/",
        description: "Una experiencia interactiva que convierte tu perfil de Instagram en una caja extraña llena de sorpresas visuales. Un juego inquietante entre lo privado y lo público.",
        quote: "La privacidad es la nueva rareza."
    },
    {
        category: "Juegos absurdos o interactivos",
        title: "Nothing To Hide",
        url: "http://nothing-to-hide.cc/",
        description: "Un juego de sigilo donde ser visto es la clave. En un mundo donde la privacidad no existe, el jugador debe maniobrar entre cámaras siempre vigilantes.",
        quote: "En un mundo de observadores, ¿qué significa realmente ser libre?"
    },
    {
        category: "Mundos "under", subculturas",
        title: "Deep Dream Generator",
        url: "https://deepdreamgenerator.com/",
        description: "Una comunidad de artistas digitales que usan la inteligencia artificial para transformar imágenes normales en visiones surreales y psicodélicas. Un lugar donde la IA y el arte se encuentran.",
        quote: "Los sueños digitales pueden ser más vivos que la realidad."
    },
    {
        category: "Estéticas raras (net.art, glitch, vaporwave)",
        title: "Beeple's Everydays",
        url: "https://www.beeple-crap.com/everydays",
        description: "Elambiente digital de Beeple ofrece una estética de ciencia ficción distópica todos los días, explorando los límites de nuestra existencia tecnológica.",
        quote: "Cada día trae un universo nuevo."
    },
    {
        category: "Ideas provocadoras",
        title: "The Simulation Argument",
        url: "http://www.simulation-argument.com/",
        description: "Un sitio dedicado a explorar la teoría de que vivimos dentro de una simulación computacional, cuestionando la naturaleza de la realidad de manera filosófica y científica.",
        quote: "¿Y si toda la existencia fuese solo un código bien escrito?"
    },
    {
        category: "Blogs olvidados",
        title: "The Dreaming",
        url: "http://thedreaming.com/",
        description: "Un blog arcaico que recopila experiencias personales y anécdotas de sueños vívidos, demostrando que los mundos oníricos pueden ser tan reales como los despiertos.",
        quote: "En los sueños, recordamos lo que en la vigilia olvidamos."
    },
    {
        category: "Performances o exposiciones raras",
        title: "The Quiet Walk",
        url: "https://www.thequietwalk.com/",
        description: "Una performance en línea que invita a los visitantes a dar un paseo virtual mientras meditan sobre sonidos y textos calmantes. Un respiro digital en un mundo ruidoso.",
        quote: "La paz es solo una caminata silenciosa de distancia."
    },
    {
        category: "Música experimental",
        title: "Plunderphonics",
        url: "http://www.plunderphonics.com/",
        description: "John Oswald explora el arte de deconstruir y reconstruir música popular, creando una experiencia auditiva que desafía las convenciones de la autoría musical.",
        quote: "La música no es posesión; es posibilidad."
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
