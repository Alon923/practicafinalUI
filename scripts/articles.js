const articles = [
  {
    id: "horizon-forbidden-west",
    title: "Horizon Forbidden West: combate y exploración en un mundo salvaje",
    kicker: "ANÁLISIS DE JUEGOS",
    category: "JUEGOS",
    summary: "Analizamos el viaje de Aloy, sus combates contra máquinas y su mundo abierto: una aventura de ciencia ficción que invita a explorar sin prisas.",
    author: "Priya Nair",
    readingTime: "7 min",
    minutesAgo: "HACE 18 MIN",
    date: "5 de noviembre de 2026",
    image: "https://picsum.photos/seed/horizon-world/1200/620",
    imageAlt: "Mundo de fantasía con máquinas y vegetación",
    featured: true,
    body: [
      "Horizon Forbidden West amplía el territorio de Aloy y convierte cada región en una invitación a detenerse, observar y experimentar.",
      "Los combates contra máquinas siguen siendo el eje principal, pero el mundo gana profundidad gracias a sus comunidades, sus secretos y la libertad para elegir el siguiente destino.",
      "Es una aventura que recompensa tanto a quien busca la misión principal como a quien prefiere perderse entre montañas, ruinas y horizontes que parecen no tener final."
    ]
  },
  {
    id: "ghost-of-tsushima",
    title: "Ghost of Tsushima lleva el viaje de Jin Sakai a PC",
    kicker: "DESDE EL CAMPO DE BATALLA",
    category: "JUEGOS",
    summary: "El viaje del samurái llega a PC con combates precisos, paisajes abiertos y duelos que mantienen su fuerza.",
    author: "Kenji Sato",
    readingTime: "8 min",
    minutesAgo: "HACE 14 MIN",
    date: "5 de noviembre de 2026",
    image: "https://picsum.photos/seed/ghost-tsushima/800/480",
    imageAlt: "Paisaje japonés cubierto por el viento",
    body: [
      "Ghost of Tsushima transforma su conflicto histórico en una aventura íntima sobre el honor y las decisiones necesarias para sobrevivir.",
      "La versión para PC conserva la belleza de sus campos abiertos y ofrece una forma cómoda de descubrir sus pueblos, leyendas y misiones secundarias.",
      "Sus mejores momentos llegan cuando el combate deja de sentirse como una obligación y se convierte en una conversación silenciosa con el entorno."
    ]
  },
  {
    id: "gpu-insignia",
    title: "Una nueva GPU insignia promete más rendimiento con menos consumo",
    kicker: "HARDWARE",
    category: "HARDWARE",
    summary: "Los nuevos datos apuntan a ganancias reales, aunque la experiencia seguirá dependiendo del juego y de la resolución.",
    author: "Marta Vega",
    readingTime: "5 min",
    minutesAgo: "HACE 16 MIN",
    date: "5 de noviembre de 2026",
    image: "https://picsum.photos/seed/new-gpu/800/480",
    imageAlt: "Tarjeta gráfica iluminada",
    body: [
      "La nueva GPU insignia combina mejoras de arquitectura con una revisión profunda de su gestión energética.",
      "Las primeras pruebas muestran avances importantes a resoluciones 4K y en escenas con trazado de rayos activo.",
      "La verdadera conclusión dependerá de las comparativas completas, los precios y la disponibilidad en el mercado."
    ]
  },
  {
    id: "age-of-empires-iv",
    title: "Age of Empires IV combina estrategia histórica y batallas exigentes",
    kicker: "ESTRATEGIA",
    category: "JUEGOS",
    summary: "Civilizaciones históricas, campañas memorables y partidas donde cada decisión económica puede cambiar el campo de batalla.",
    author: "Tomás Ferreira",
    readingTime: "6 min",
    minutesAgo: "HACE 2 HORAS",
    date: "5 de noviembre de 2026",
    image: "https://picsum.photos/seed/age-empires/800/480",
    imageAlt: "Ciudad medieval junto a un campo de batalla",
    body: [
      "Age of Empires IV vuelve a las bases del género sin renunciar a una presentación moderna y detallada.",
      "Sus civilizaciones ofrecen ritmos distintos, mientras las campañas explican el contexto de los conflictos sin interrumpir la acción.",
      "La profundidad aparece en cada fase de la partida: la economía inicial, las rutas de transporte y el momento exacto de lanzar el ataque."
    ]
  },
  {
    id: "elden-ring",
    title: "Elden Ring convierte su mundo abierto en una aventura llena de desafíos",
    kicker: "JUEGOS",
    category: "JUEGOS",
    summary: "Las Tierras Intermedias esconden secretos, mazmorras y jefes terribles detrás de cada horizonte.",
    author: "Priya Nair",
    readingTime: "6 min",
    minutesAgo: "HACE 3 HORAS",
    date: "4 de noviembre de 2026",
    image: "https://picsum.photos/seed/elden-ring-landscape/800/480",
    imageAlt: "Paisaje de fantasía de Elden Ring",
    weekend: true,
    body: [
      "Elden Ring construye su libertad a través de rutas abiertas, zonas misteriosas y amenazas que pueden aparecer en cualquier momento.",
      "La exploración es tan importante como el combate: un sendero lateral puede llevar a un jefe difícil, una pieza de equipo útil o una historia inesperada.",
      "Su mayor logro es crear un mundo que comunica peligro y curiosidad sin explicar cada paso que el jugador debe dar."
    ]
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077 nos sumerge en la acción y las historias de Night City",
    kicker: "JUEGOS",
    category: "JUEGOS",
    summary: "Implantes, bandas y decisiones definen a V en una metrópolis donde cada encargo cuenta una historia.",
    author: "Ava Nguyen",
    readingTime: "5 min",
    minutesAgo: "HACE 5 HORAS",
    date: "4 de noviembre de 2026",
    image: "https://picsum.photos/seed/cyberpunk-city/800/480",
    imageAlt: "Ciudad futurista iluminada",
    body: [
      "Night City sigue siendo el verdadero protagonista de Cyberpunk 2077, con calles densas y historias que aparecen detrás de cada contrato.",
      "Las mejoras modernas hacen que la exploración y el combate tengan una mejor continuidad, especialmente en misiones que mezclan infiltración y acción.",
      "La experiencia resulta más memorable cuando se abandona el camino directo y se permite que la ciudad marque el ritmo."
    ]
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3 convierte cada decisión en una nueva historia",
    kicker: "JUEGOS",
    category: "JUEGOS",
    summary: "Combate por turnos, compañeros memorables y decisiones que transforman el viaje de principio a fin.",
    author: "Ethan Park",
    readingTime: "7 min",
    minutesAgo: "HACE 6 HORAS",
    date: "4 de noviembre de 2026",
    image: "https://picsum.photos/seed/baldurs-gate-party/800/480",
    imageAlt: "Grupo de aventureros en un paisaje fantástico",
    body: [
      "Baldur's Gate 3 convierte el rol clásico en un sistema flexible donde casi toda decisión puede abrir una solución distinta.",
      "Sus compañeros aportan conflictos reales y hacen que las relaciones sean tan importantes como las estadísticas de combate.",
      "El resultado es una aventura que invita a empezar de nuevo para descubrir cómo habría cambiado la historia por otra decisión."
    ]
  },
  {
    id: "elden-ring-dlc",
    title: "Las mejores zonas secretas del nuevo contenido de Elden Ring",
    kicker: "GUÍAS",
    category: "GUÍAS",
    summary: "Cinco recorridos opcionales que esconden nuevas armas, jefes y lugares capaces de cambiar una partida.",
    author: "David Nair",
    readingTime: "10 min",
    minutesAgo: "AYER",
    date: "3 de noviembre de 2026",
    image: "https://picsum.photos/seed/elden-secret/800/480",
    imageAlt: "Ruinas fantásticas bajo un cielo oscuro",
    body: [
      "Las nuevas zonas mantienen el lenguaje visual de Elden Ring y esconden sus rutas principales detrás de senderos poco claros.",
      "Cada recorrido contiene enemigos específicos y recompensas que pueden resultar útiles mucho antes del final del contenido.",
      "Conviene explorar sin prisa y llevar diferentes tipos de daño, ya que los nuevos jefes cambian sus patrones con frecuencia."
    ]
  }
];
