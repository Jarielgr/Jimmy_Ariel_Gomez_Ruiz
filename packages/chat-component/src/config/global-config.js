const globalConfig = {
  BOT_TYPING_EFFECT_INTERVAL: 50, // en ms

  // ¿Se activan las indicaciones predeterminadas?
  IS_DEFAULT_PROMPTS_ENABLED: true,
  // Indicaciones predeterminadas para mostrar en el chat
  DISPLAY_DEFAULT_PROMPTS_BUTTON: '¿No estás seguro de qué preguntar? ¡Prueba nuestras sugerencias!',
  // Estas son las burbujas de chat que se mostrarán en el chat
  CHAT_MESSAGES: [],
  // Estas son las etiquetas para el botón de chat y la entrada
  CHAT_BUTTON_LABEL_TEXT: 'Preguntar Soporte',
  CHAT_CANCEL_BUTTON_LABEL_TEXT: 'Cancelar Generación',
  CHAT_VOICE_BUTTON_LABEL_TEXT: 'Entrada de Voz',
  CHAT_VOICE_REC_BUTTON_LABEL_TEXT: 'Escuchando la entrada de voz',
  CHAT_INPUT_PLACEHOLDER: '¿En qué consiste el proyecto D-SAFE?',
  USER_IS_BOT: 'Asistente de Soporte',
  RESET_BUTTON_LABEL_TEXT: 'X',
  RESET_BUTTON_TITLE_TEXT: 'Restablecer pregunta actual',
  RESET_CHAT_BUTTON_TITLE: 'Restablecer chat',
  // Copiar respuesta al portapapeles
  COPY_RESPONSE_BUTTON_LABEL_TEXT: 'Copiar Respuesta',
  COPIED_SUCCESSFULLY_MESSAGE: '¡Respuesta copiada!',
  // Texto de preguntas de seguimiento
  FOLLOW_UP_QUESTIONS_LABEL_TEXT: 'También puedes preguntar...',
  SHOW_THOUGH_PROCESS_BUTTON_LABEL_TEXT: 'Mostrar proceso de pensamiento',
  HIDE_THOUGH_PROCESS_BUTTON_LABEL_TEXT: 'Ocultar proceso de pensamiento',
  LOADING_INDICATOR_TEXT: 'Por favor espera. Estamos buscando y generando una respuesta...',
  LOADING_TEXT: 'Cargando...',
  // MANEJO DE ERRORES DE API EN LA INTERFAZ DE USUARIO
  API_ERROR_MESSAGE: 'Lo siento, estamos teniendo algunos problemas. Por favor, inténtalo de nuevo más tarde.',
  INVALID_REQUEST_ERROR:
    'No se puede generar una respuesta para esta consulta. Por favor, modifica tu pregunta e inténtalo de nuevo.',
  // Configuración relacionada con el formato de respuesta
  THOUGHT_PROCESS_LABEL: 'Proceso de Pensamiento',
  SUPPORT_CONTEXT_LABEL: 'Contexto de Soporte',
  CITATIONS_LABEL: 'Más Información:',
  CITATIONS_TAB_LABEL: 'Citas',
  // Personalización de Marca
  IS_CUSTOM_BRANDING: true,
  // Detalles de Personalización de Marca
  // Todos estos deberían provenir de la configuración de persistencia
  BRANDING_URL: '#',
  BRANDING_LOGO_ALT: 'Logotipo de Marca',
  BRANDING_HEADLINE: 'Bienvenido al soporte estrella de D-SAFE',
  SHOW_CHAT_HISTORY_LABEL: 'Mostrar Historial de Chat',
  HIDE_CHAT_HISTORY_LABEL: 'Ocultar Historial de Chat',
  CHAT_MAX_COUNT_TAG: '{MAX_CHAT_HISTORY}',
  CHAT_HISTORY_FOOTER_TEXT: 'Mostrando conversaciones pasadas {MAX_CHAT_HISTORY}',
};

const teaserListTexts = {
  TEASER_CTA_LABEL: 'Tienes dudas ?',
  HEADING_CHAT: 'Chat nuestro Dream Team',
  HEADING_ASK: 'preguntanos!',
  DEFAULT_PROMPTS: [
    {
      description: 'Que es D-SAFE?',
    },
    {
      description: 'Cuales son los principales stakeholders?',
    },
    {
      description: 'Porque D-SAFE es diferente a las soluciones actuales?',
    },
  ],
};

const NEXT_QUESTION_INDICATOR = 'Siguiente pregunta:';

const requestOptions = {
  approach: 'rrr',
  overrides: {
    retrieval_mode: 'hybrid',
    semantic_ranker: true,
    semantic_captions: false,
    suggest_followup_questions: true,
  },
};

const chatHttpOptions = {
  // API URL for development purposes
  url: 'http://localhost:3000',
  method: 'POST',
  stream: true,
};

const MAX_CHAT_HISTORY = 5;

const APPROACH_MODEL = ['rrr', 'rtr'];

export {
  globalConfig,
  requestOptions,
  chatHttpOptions,
  NEXT_QUESTION_INDICATOR,
  APPROACH_MODEL,
  teaserListTexts,
  MAX_CHAT_HISTORY,
};
