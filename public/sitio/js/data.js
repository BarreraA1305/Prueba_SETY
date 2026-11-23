/* ==========================================================================
   ARCHIVO ÚNICO DE DATOS PARA FUTURAS AGENDAS (js/data.js)
   --------------------------------------------------------------------------
   Instrucciones: Para crear una nueva agenda (ej. Misión Europa 2027),
   duplica la carpeta del proyecto y edita únicamente este archivo js/data.js.
   Todas las pestañas (.html) se actualizarán automáticamente.
   ========================================================================== */
window.AGENDA_DATA = {
  config: {
    siteSuffix: "Gobierno de Yucatán",
    logoUrl: "assets/gobierno-sety.svg", // Puedes cambiarlo a "assets/gobierno-sety.png"
    logoAlt: "Renacimiento Maya · Yucatán · Gobierno del Estado 2024–2030 · SETY",
    brandEyebrow: "Renacimiento Maya · 2024–2030",
    brandOrg: "Gobierno de Yucatán · SETY",
    delegationEyebrow: "DELEGACIÓN YUCATÁN",
    missionShortTitle: "China 2026",
    missionFullTitle: "Misión Económica a China 2026",
    dateRange: "23 NOV · 07 DIC",
    versionTag: "VF12",
    lastUpdated: "22 nov 2026",
    institutionLines: [
      "GOBIERNO DEL ESTADO DE YUCATÁN",
      "SECRETARÍA DE ECONOMÍA Y TRABAJO"
    ],
    monogram: "Y",
    pdfUrl: "documentos/Agenda_China_2026_VF12.pdf",
    pdfLabel: "Descargar agenda institucional (PDF)"
  },

  /* PESTAÑA 1: INICIO (index.html) */
  inicio: {
    kicker: "Guía Ejecutiva de la Delegación",
    headline: "Misión Económica y de Atracción de Inversiones · China 2026",
    summary: "Agenda oficial de trabajo, reuniones B2B/G2G, material de promoción sectorial y logística integral de traslado y hospedaje para la delegación del Gobierno del Estado de Yucatán.",
    kpis: [
      { value: "15 días", label: "Duración de la gira", sub: "23 nov al 07 dic 2026" },
      { value: "4 ciudades", label: "Sedes estratégicas", sub: "Shanghái · Shenzhen · Pekín · Ningbo" },
      { value: "28+", label: "Reuniones clave", sub: "Corporativos, cámaras y fondos" },
      { value: "5 sectores", label: "Vocaciones prioritarias", sub: "Manufactura, TI, Logística, Agro, Energía" }
    ],
    quickNotes: [
      {
        title: "Protocolo y Vestimenta",
        tag: "Importante",
        body: "Traje formal oscuro para reuniones ministeriales y plenarias; business casual para recorridos en parques industriales y centros logísticos."
      },
      {
        title: "Conectividad y Aplicaciones",
        tag: "Logística",
        body: "Verificar itinerancia internacional (roaming) o eSIM activa antes del abordaje, así como WeChat y Alipay configurados para movilidad local."
      },
      {
        title: "Coordinación SETY",
        tag: "Contacto",
        body: "El equipo técnico de la Secretaría de Economía y Trabajo actualizará en tiempo real cualquier ajuste de sala o traslado."
      }
    ]
  },

  /* PESTAÑA 2: AGENDA DIARIA (agenda.html) */
  agenda: [
    {
      id: "dia-1",
      dateLabel: "Lun 23 Nov",
      city: "Mérida → Escala",
      title: "Salida de la Delegación Oficial",
      events: [
        {
          time: "08:30",
          duration: "Traslado aéreo",
          title: "Salida hacia punto de conexión internacional",
          location: "Aeropuerto Internacional de Mérida (MID)",
          category: "Logística",
          notes: "Presentarse 2 horas antes en mostrador. Confirmar equipaje documentado hasta destino final."
        },
        {
          time: "19:45",
          duration: "Vuelo transpacífico",
          title: "Abordaje de tramo internacional",
          location: "Terminal Internacional",
          category: "Vuelo",
          notes: "Ver detalles de asignación de grupo en la pestaña Vuelos · dos rutas."
        }
      ]
    },
    {
      id: "dia-2",
      dateLabel: "Mié 25 Nov",
      city: "Shanghái",
      title: "Arribo y Reunión Preparatoria de Delegación",
      events: [
        {
          time: "14:00",
          duration: "1h 30m",
          title: "Recepción y traslado al hotel sede en Shanghái",
          location: "Aeropuerto Internacional de Pudong (PVG)",
          category: "Logística",
          notes: "Traslado en autobús ejecutivo asignado a la delegación."
        },
        {
          time: "18:30",
          duration: "1h 00m",
          title: "Briefing interno: revisión de carpetas ejecutivas y protocolo",
          location: "Salón Ejecutivo · Hotel Sede Shanghái",
          category: "Interno",
          notes: "Entrega de tarjetas de presentación bilingües y material de promoción."
        }
      ]
    },
    {
      id: "dia-3",
      dateLabel: "Jue 26 Nov",
      city: "Shanghái",
      title: "Foro de Inversión Yucatán – China y Manufactura Avanzada",
      events: [
        {
          time: "09:30",
          duration: "2h 30m",
          title: "Seminario de Oportunidades de Nearshoring en Yucatán",
          location: "Centro Financiero Lujiazui, Shanghái",
          category: "Promoción",
          notes: "Presentación magistral SETY: infraestructura portuaria de Progreso, parques industriales y certeza jurídica."
        },
        {
          time: "14:30",
          duration: "2h 00m",
          title: "Mesas de trabajo con empresas de electromovilidad y autopartes",
          location: "Sala Pudong B",
          category: "Reunión B2B",
          notes: "Participan empresas Tier 1 interesadas en proveeduría para Norteamérica."
        }
      ]
    },
    {
      id: "dia-4",
      dateLabel: "Vie 27 Nov",
      city: "Shenzhen",
      title: "Ecosistema Tecnológico, Electrónica y Centros de Datos",
      events: [
        {
          time: "10:00",
          duration: "2h 00m",
          title: "Visita técnica a campus de innovación y manufactura inteligente",
          location: "Distrito de Nanshan, Shenzhen",
          category: "Visita Técnica",
          notes: "Enfoque en semiconductores, automatización industrial y talento de ingeniería."
        },
        {
          time: "16:00",
          duration: "1h 30m",
          title: "Reunión bilateral con cámara empresarial tecnológica de Guangdong",
          location: "Shenzhen Convention Center",
          category: "Institucional",
          notes: "Firma de carta de intención para intercambio técnico y atracción de proveedores."
        }
      ]
    }
  ],

  /* PESTAÑA 3: MATERIAL DE PROMOCIÓN (promocion.html) */
  promocion: [
    {
      title: "Presentación Ejecutiva: Yucatán Hub Logístico del Sureste",
      format: "Deck PDF / PPTX · ES / EN / ZH",
      sector: "Logística e Infraestructura",
      description: "Ventajas competitivas de la ampliación del Puerto de Altura de Progreso, conectividad ferroviaria y disponibilidad energética.",
      link: "documentos.html"
    },
    {
      title: "Ficha Sectorial: Manufactura Ligera, Electromovilidad y Aeroespacial",
      format: "One-Pager · EN / ZH",
      sector: "Manufactura Avanzada",
      description: "Disponibilidad de naves industriales en corredores Mérida–Umán–Kanasín, incentivos estatales y costos operativos competitivos.",
      link: "documentos.html"
    },
    {
      title: "Ficha Sectorial: Tecnologías de la Información y Data Centers",
      format: "One-Pager · EN / ZH",
      sector: "Economía Digital",
      description: "Conectividad submarina internacional, seguridad física (estado más seguro de México) y egresados STEM en Yucatán.",
      link: "documentos.html"
    },
    {
      title: "Catálogo Agroindustrial y Exportación Alimentaria",
      format: "Catálogo Digital · ES / EN / ZH",
      sector: "Agroindustria",
      description: "Oferta exportable yucateca con certificaciones fitosanitarias para el mercado asiático.",
      link: "documentos.html"
    }
  ],

  /* PESTAÑA 4: INFORMACIÓN ECONÓMICA (economia.html) */
  economia: {
    intro: "Indicadores clave de posicionamiento económico de Yucatán para presentaciones ejecutivas y mesas de negociación.",
    highlights: [
      { value: "1er lugar", label: "Seguridad y Paz Social", sub: "Índice de Paz México" },
      { value: "+4.2%", label: "Crecimiento económico estatal", sub: "Por encima del promedio nacional" },
      { value: "80 m", label: "Calado proyectado Puerto Progreso", sub: "Modernización portuaria estratégica" },
      { value: "36 horas", label: "Tránsito marítimo a Costa Este EE.UU.", sub: "Acceso preferencial T-MEC" }
    ],
    tableTitle: "Comparativo de Ventajas Competitivas para Inversión",
    tableHeaders: ["Indicador / Factor", "Yucatán (México)", "Ventaja Estratégica"],
    tableRows: [
      ["Acceso a mercados", "T-MEC + 14 tratados internacionales", "Arancel preferencial hacia EE.UU. y Canadá"],
      ["Capital humano", "Más de 95,000 estudiantes universitarios", "Alta especialización en ingeniería y TI"],
      ["Infraestructura industrial", "Corredores Mérida, Umán, Hunucmá y Kanasín", "Parques con factibilidad eléctrica e hídrica"],
      ["Conectividad logística", "Puerto Progreso + Aeropuerto MID + Tren Maya carga", "Intermodalidad marítima, aérea y ferroviaria"]
    ]
  },

  /* PESTAÑA 5: REUNIONES Y EMPRESAS (reuniones.html) */
  reuniones: [
    {
      company: "Corporativo Automotriz & EV Asia",
      sector: "Electromovilidad y Autopartes",
      city: "Shanghái",
      date: "26 Nov · 14:30",
      objective: "Evaluación de planta de ensamble de componentes ligeros para exportación a Norteamérica.",
      status: "Confirmada"
    },
    {
      company: "Shenzhen Smart Tech Group",
      sector: "Electrónica y Automatización",
      city: "Shenzhen",
      date: "27 Nov · 10:00",
      objective: "Exploración de centro de manufactura electrónica y transferencia tecnológica.",
      status: "Confirmada"
    },
    {
      company: "Cámara de Comercio Internacional de Guangdong",
      sector: "Institucional / Multisectorial",
      city: "Shenzhen",
      date: "27 Nov · 16:00",
      objective: "Alianza institucional para misiones empresariales recíprocas 2027.",
      status: "Confirmada"
    },
    {
      company: "Ningbo Port & Logistics Holdings",
      sector: "Logística y Comercio Exterior",
      city: "Ningbo",
      date: "30 Nov · 11:00",
      objective: "Cooperación portuaria y rutas marítimas directas Asia – Golfo de México.",
      status: "Confirmada"
    }
  ],

  /* PESTAÑA 6: DOCUMENTOS (documentos.html) */
  documentos: [
    {
      title: "Agenda Institucional Completa (VF12)",
      type: "PDF Oficial",
      size: "2.4 MB",
      updated: "22 nov 2026",
      description: "Documento maestro con horarios detallados, directorio de comitiva y protocolo oficial.",
      url: "documentos/Agenda_China_2026_VF12.pdf"
    },
    {
      title: "Dossier Económico Yucatán 2026 (Inglés / Chino)",
      type: "Presentación",
      size: "8.1 MB",
      updated: "20 nov 2026",
      description: "Material gráfico de apoyo para reuniones bilaterales con inversionistas.",
      url: "#"
    },
    {
      title: "Guía de Protocolo Empresarial y Etiqueta en China",
      type: "Guía Rápida",
      size: "1.1 MB",
      updated: "18 nov 2026",
      description: "Recomendaciones sobre entrega de tarjetas, precedencias, obsequios institucionales y etiqueta.",
      url: "#"
    },
    {
      title: "Directorio de Emergencia y Asistencia Consular",
      type: "Ficha de Seguridad",
      size: "640 KB",
      updated: "21 nov 2026",
      description: "Teléfonos de la Embajada de México en Pekín, Consulados en Shanghái y Guangzhou, y coordinación SETY.",
      url: "#"
    }
  ],

  /* PESTAÑA 7: VUELOS · DOS RUTAS (vuelos.html) */
  vuelos: [
    {
      routeName: "Ruta 1 · Comitiva Oficial Principal",
      badge: "Ruta A",
      summary: "Mérida (MID) → Ciudad de México (MEX) → Shanghái (PVG) | Regreso vía Pekín (PEK)",
      segments: [
        { leg: "Ida · Tramo 1", flight: "AM 825", route: "MID → MEX", schedule: "23 Nov · 09:15 – 11:25" },
        { leg: "Ida · Tramo 2", flight: "AM 098", route: "MEX → PVG", schedule: "23 Nov · 23:45 – 05:30 (+2 días)" },
        { leg: "Regreso", flight: "CA / AM", route: "PEK → MEX → MID", schedule: "07 Dic · Arribo MID 18:40" }
      ]
    },
    {
      routeName: "Ruta 2 · Equipo Técnico y Avanzada",
      badge: "Ruta B",
      summary: "Mérida (MID) → Houston / Los Ángeles → Shanghái (PVG) | Regreso vía Hong Kong (HKG)",
      segments: [
        { leg: "Ida · Tramo 1", flight: "UA 1420", route: "MID → IAH", schedule: "23 Nov · 11:00 – 13:15" },
        { leg: "Ida · Tramo 2", flight: "UA 835", route: "IAH → SFO → PVG", schedule: "23 Nov · 16:30 – 18:10 (+1 día)" },
        { leg: "Regreso", flight: "CX / UA", route: "HKG → LAX → MID", schedule: "07 Dic · Arribo MID 20:15" }
      ]
    }
  ],

  /* PESTAÑA 8: HOSPEDAJES (hospedajes.html) */
  hospedajes: [
    {
      city: "Shanghái",
      dates: "25 Nov – 27 Nov (2 noches)",
      hotel: "Hotel Sede Shanghái Pudong",
      address: "Lujiazui Ring Road, Pudong New Area, Shanghái",
      localAddress: "上海市浦东新区陆家嘴环路 (Mostrar al taxista)",
      notes: "Desayuno ejecutivo incluido a partir de las 06:30 hrs. Punto de reunión en lobby 15 min antes de cada salida."
    },
    {
      city: "Shenzhen",
      dates: "27 Nov – 30 Nov (3 noches)",
      hotel: "Hotel Sede Shenzhen Futian",
      address: "Fuhua 3rd Road, Futian District, Shenzhen, Guangdong",
      localAddress: "广东省深圳市福田区福华三路",
      notes: "Cercano al Centro de Convenciones de Shenzhen y distrito financiero."
    },
    {
      city: "Pekín",
      dates: "01 Dic – 06 Dic (5 noches)",
      hotel: "Hotel Sede Pekín Chaoyang",
      address: "Jianguomenwai Avenue, Chaoyang District, Pekín",
      localAddress: "北京市朝阳区建国门外大街",
      notes: "Ubicación estratégica en el corredor diplomático y comercial."
    }
  ]
};
