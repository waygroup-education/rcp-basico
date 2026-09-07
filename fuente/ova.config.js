/* =========================================================
   CURSO · RCP Básico · Entrenamiento del primer respondiente
   ---------------------------------------------------------
   Cliente:  [PENDIENTE · actualizar cuando se confirme]
   Audiencia: Primer respondiente (no profesional sanitario)
   Duración: 4 horas
   Preset visual: vital
   Versión template: hibrida
   ========================================================= */

module.exports = {

  brand: {
    // Logo responsive: horizontal (desktop) + W-only (mobile/colapsado). Ya traen marca → name/sub vacíos.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/waygroup-for-education-h.svg',
    logoMobile: 'assets/img/logos/waygroup-w-only.svg',
  },

  course: {
    code:     '',
    name:     'Reanimación Cardiopulmonar Básico (RCP)',
    subtitle: '',
    duration: '4 horas',
    iso:      'ISO 9001:2015',
    preset:   'vital',
    pdf:      'assets/downloads/Curso_RCP.pdf',
    licencia: 'Creative Commons BY-NC-SA 4.0',
    portadaFullBleed: true,   // portada a sangre completa, el estándar Waygroup (TSA)
  },

  /* MENÚ · estándar Waygroup: Portada, Presentación, temas numerados (1, 2…) con
     subtemas como secciones ancladas (1.1, 1.2… las numera el build), Evaluación,
     Glosario y Referencias. Las especiales llevan el icono fijo del motor. */
  menu: [
    { id: 'inicio', titulo: 'Inicio', tipo: 'especial' },
    { id: 'presentacion', titulo: 'Presentación', tipo: 'especial' },
    { id: 'tema1', titulo: 'Conceptos básicos y reconocimiento de la parada cardíaca', tipo: 'tema',
      secciones: [
        { titulo: 'Conceptos básicos de RCP', ancla: 'conceptos-basicos' },
        { titulo: '¿Cómo se identifica una posible parada cardíaca?', ancla: 'identificacion' },
        { titulo: '¿Quién puede presentar una parada cardíaca?', ancla: 'quien-puede' },
        { titulo: 'Tipos de parada cardíaca', ancla: 'tipos-parada' },
      ] },
    { id: 'tema2', titulo: 'Cadena de supervivencia e importancia de la RCP temprana', tipo: 'tema',
      secciones: [
        { titulo: 'Cadena de supervivencia', ancla: 'cadena' },
        { titulo: 'Importancia de la RCP temprana', ancla: 'importancia' },
      ] },
    { id: 'tema3', titulo: 'Atención inicial: seguridad, valoración y activación de emergencias', tipo: 'tema',
      secciones: [
        { titulo: 'Seguridad de la escena', ancla: 'seguridad-escena' },
        { titulo: 'Valoración inicial del paciente', ancla: 'valoracion' },
        { titulo: 'Activación del sistema de emergencias', ancla: 'emergencias' },
      ] },
    { id: 'tema4', titulo: 'RCP de alta calidad: técnica, errores y relevos', tipo: 'tema',
      secciones: [
        { titulo: 'RCP de alta calidad', ancla: 'rcp-calidad' },
        { titulo: 'Errores frecuentes en las compresiones', ancla: 'errores' },
        { titulo: 'Fatiga del reanimador y relevos', ancla: 'relevos' },
      ] },
    { id: 'tema5', titulo: 'Uso del DEA y continuidad de la RCP', tipo: 'tema',
      secciones: [
        { titulo: 'Uso del DEA', ancla: 'uso-dea' },
        { titulo: 'Seguridad durante la desfibrilación', ancla: 'seguridad-dea' },
        { titulo: 'RCP sin DEA disponible', ancla: 'rcp-sin-dea' },
      ] },
    { id: 'tema6', titulo: 'Recuperación, vigilancia y posición lateral de seguridad', tipo: 'tema',
      secciones: [
        { titulo: 'Retorno de circulación espontánea', ancla: 'rosc' },
        { titulo: 'Posición lateral de seguridad y su relación con la RCP', ancla: 'posicion-lateral' },
      ] },
    { id: 'tema7', titulo: 'Obstrucción de vía aérea por cuerpo extraño y su relación con la RCP', tipo: 'tema',
      secciones: [
        { titulo: 'Obstrucción de vía aérea por cuerpo extraño y su relación con la RCP', ancla: 'obstruccion' },
      ] },
    { id: 'tema8', titulo: 'Comunicación, trabajo en equipo y buenas prácticas', tipo: 'tema',
      secciones: [
        { titulo: 'Comunicación y trabajo en equipo', ancla: 'comunicacion' },
        { titulo: 'Conclusiones generales, otros usos y buenas prácticas físicas', ancla: 'conclusiones' },
        { titulo: 'Buenas prácticas y malas prácticas', ancla: 'buenas-practicas' },
      ] },
    { id: 'tema9', titulo: 'Uso del simulador de realidad virtual', tipo: 'tema' },
    { id: 'tema10', titulo: 'Cierre', tipo: 'tema' },
    { id: 'evaluacion', titulo: 'Evaluación', tipo: 'especial' },
    { id: 'glosario', titulo: 'Glosario', tipo: 'especial' },
    { id: 'referencias', titulo: 'Referencias', tipo: 'especial' },
  ],

  /* GLOSARIO · términos clave del curso */
  glosario: [
    { letra: 'A', termino: 'Análisis del ritmo',
      definicion: 'Función del DEA que evalúa el ritmo cardíaco del paciente para determinar si requiere una descarga eléctrica. Durante el análisis nadie debe tocar al paciente.' },
    { letra: 'B', termino: 'Boqueadas',
      definicion: 'Respiraciones aisladas, irregulares y profundas que pueden aparecer durante una parada cardíaca. <strong>No son respiración normal</strong> y no deben confundirse con respiración efectiva.' },
    { letra: 'B', termino: 'Broncoaspiración',
      definicion: 'Paso accidental de saliva, vómito o secreciones hacia la vía aérea. La posición lateral de seguridad ayuda a prevenirla en personas inconscientes que respiran normalmente.' },
    { letra: 'C', termino: 'Cadena de supervivencia',
      definicion: 'Secuencia de acciones que aumentan la posibilidad de sobrevivir a una parada cardíaca: reconocimiento, RCP, desfibrilación, atención avanzada y cuidados posteriores.' },
    { letra: 'C', termino: 'Compresiones torácicas',
      definicion: 'Maniobra principal de la RCP. Consiste en aplicar presión sobre el centro del pecho con frecuencia de 100-120 por minuto y profundidad de 5-6 cm para mantener la circulación.' },
    { letra: 'D', termino: 'DEA · Desfibrilador Externo Automático',
      definicion: 'Equipo que analiza el ritmo del corazón y determina si se requiere una descarga eléctrica. Guía al usuario mediante instrucciones de voz o visuales.' },
    { letra: 'D', termino: 'Desfibrilación',
      definicion: 'Aplicación de una descarga eléctrica para restablecer un ritmo cardíaco efectivo. Solo se realiza si el DEA lo indica, y nadie debe tocar al paciente durante la descarga.' },
    { letra: 'E', termino: 'Esternón',
      definicion: 'Hueso plano ubicado en el centro del pecho. Las compresiones torácicas se aplican sobre la mitad inferior del esternón, no sobre el abdomen ni las costillas.' },
    { letra: 'I', termino: 'Infarto cardíaco',
      definicion: 'Obstrucción de una arteria del corazón que impide que parte del músculo cardíaco reciba oxígeno. La persona puede estar consciente y hablar. Un infarto puede evolucionar a parada cardíaca.' },
    { letra: 'J', termino: 'Jadeos',
      definicion: 'Respiraciones cortas, ruidosas e ineficaces que pueden aparecer durante una parada cardíaca. Como las boqueadas, no son respiración normal y deben considerarse signos de emergencia.' },
    { letra: 'M', termino: 'Maniobra de Heimlich',
      definicion: 'Técnica para expulsar un cuerpo extraño en una persona consciente con obstrucción total de la vía aérea. Consiste en compresiones abdominales rápidas hacia adentro y hacia arriba.' },
    { letra: 'O', termino: 'Obstrucción de vía aérea',
      definicion: 'Bloqueo del paso del aire por un cuerpo extraño, también llamado atragantamiento. Puede ser parcial (la persona puede toser) o total (no puede hablar, toser ni respirar).' },
    { letra: 'P', termino: 'Parada cardíaca',
      definicion: 'Situación en la que el corazón deja de bombear sangre de manera efectiva. El cerebro y los órganos vitales dejan de recibir oxígeno. La persona pierde la conciencia, no responde y no respira normalmente.' },
    { letra: 'P', termino: 'Parches del DEA',
      definicion: 'Electrodos adhesivos que se colocan sobre el pecho del paciente. Uno en la parte superior derecha y otro en el lado izquierdo debajo de la axila. Transmiten información al equipo y aplican la descarga.' },
    { letra: 'P', termino: 'Posición lateral de seguridad',
      definicion: 'Posición que se utiliza cuando una persona está inconsciente pero respira normalmente y no se sospecha trauma grave. Mantiene la vía aérea abierta y previene la broncoaspiración.' },
    { letra: 'P', termino: 'Primer respondiente',
      definicion: 'Persona, no necesariamente profesional de la salud, que actúa primero ante una emergencia. Su intervención durante los primeros minutos es decisiva para la supervivencia.' },
    { letra: 'R', termino: 'RCP · Reanimación Cardiopulmonar',
      definicion: 'Conjunto de maniobras que se realizan para mantener la circulación de sangre cuando el corazón no bombea adecuadamente. Incluye compresiones torácicas y, opcionalmente, ventilaciones.' },
    { letra: 'R', termino: 'Relevo',
      definicion: 'Cambio de reanimador durante la RCP para mantener la calidad de las compresiones. Se recomienda aproximadamente cada 2 minutos, con interrupciones menores a 10 segundos.' },
    { letra: 'R', termino: 'Retorno de circulación espontánea (ROSC)',
      definicion: 'Momento en que, después de la RCP o el uso del DEA, el corazón vuelve a latir de manera efectiva. La persona recupera signos como respiración, tos, movimiento o respuesta.' },
    { letra: 'S', termino: 'SEM · Sistema de Emergencias Médicas',
      definicion: 'Servicio público al que se llama para activar la atención prehospitalaria. Su activación temprana es uno de los eslabones de la cadena de supervivencia.' },
    { letra: 'S', termino: 'Seguridad de la escena',
      definicion: 'Evaluación previa del entorno antes de acercarse al paciente. Verifica riesgos eléctricos, fuego, tránsito, sustancias peligrosas u otros peligros. La seguridad del primer respondiente es prioritaria.' },
    { letra: 'T', termino: 'Tórax',
      definicion: 'Parte superior del cuerpo entre el cuello y el abdomen. Aloja el corazón y los pulmones. Es el área donde se aplican las compresiones torácicas durante la RCP.' },
    { letra: 'V', termino: 'Ventana crítica',
      definicion: 'Período de pocos minutos durante el cual la RCP temprana puede preservar la circulación cerebral. Cada minuto sin RCP reduce significativamente las posibilidades de supervivencia.' },
  ],

  /* REFERENCIAS · bibliografía y guías base */
  referencias: [
    { texto: 'American Heart Association. <em>Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.</em>' },
    { texto: 'International Liaison Committee on Resuscitation (ILCOR). <em>Consenso internacional sobre la ciencia de la RCP.</em>' },
    { texto: 'European Resuscitation Council. <em>Guidelines for Resuscitation.</em>' },
    { texto: 'Ministerio de Salud y Protección Social de Colombia. <em>Lineamientos para atención prehospitalaria de emergencias cardiovasculares.</em>' },
  ],

  /* CRÉDITOS · equipo del curso */
  creditos: {
    bloques: [
      {
        titulo: 'Equipo del curso',
        personas: [
          { nombre: 'Pendiente confirmar', cargo: 'Dirección académica',     area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Diseño instruccional',    area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Validación clínica',      area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Diseño y desarrollo OVA', area: '—' },
        ]
      },
    ],
  },
};
