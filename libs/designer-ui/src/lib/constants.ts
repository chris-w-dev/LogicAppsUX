const CONDITION_RELATIONSHIP_VALUES = {
  CONTAINS: 'contains',
  DOES_NOT_CONTAIN: 'does not contain',
  IS_EQUAL_TO: 'is equal to',
  IS_NOT_EQUAL_TO: 'is not equal to',
  IS_GREATER_THAN: 'is greater than',
  IS_GREATER_THAN_OR_EQUAL_TO: 'is greater than or equal to',
  IS_LESS_THAN: 'is less than',
  IS_LESS_THAN_OR_EQUAL_TO: 'is less than or equal to',
  STARTS_WITH: 'starts with',
  DOES_NOT_STARTS_WITH: 'does not start with',
  ENDS_WITH: 'ends with',
  DOES_NOT_END_WITH: 'does not end with',
};

const WORKFLOW_PARAMETER_TYPE = {
  ARRAY: 'array',
  BOOLEAN: 'boolean',
  BOOL: 'bool',
  FLOAT: 'float',
  INTEGER: 'integer',
  INT: 'int',
  OBJECT: 'object',
  SECURE_OBJECT: 'secureobject',
  SECURE_STRING: 'securestring',
  STRING: 'string',
};

const WORKFLOW_PARAMETER_SERIALIZED_TYPE = {
  ARRAY: 'Array',
  BOOLEAN: 'Boolean',
  BOOL: 'Bool',
  FLOAT: 'Float',
  INTEGER: 'Integer',
  INT: 'Int',
  OBJECT: 'Object',
  SECURE_OBJECT: 'SecureObject',
  SECURE_STRING: 'SecureString',
  STRING: 'String',
};
const PANEL_TAB_NAMES = {
  ABOUT: 'ABOUT',
  CODE_VIEW: 'CODE_VIEW',
  FUNCTION_CREATE: 'FUNCTION_CREATE',
  OPERATION_SELECTOR: 'OPERATION_SELECTOR',
  PARAMETERS: 'PARAMETERS',
  REQUEST_HISTORY: 'REQUEST_HISTORY',
  RETRY_HISTORY: 'RETRY_HISTORY',
  RUN_AFTER: 'RUN_AFTER',
  SETTINGS: 'SETTINGS',
  STATIC_RESULT: 'STATIC_RESULT',
  SWAGGER_ENDPOINT: 'SWAGGER_ENDPOINT',
};

export default {
  KEYS: {
    BACKSPACE: 8,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    DELETE: 46,
  },

  MOUSE_BUTTONS: {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
  },

  FORMAT: {
    URI: 'uri',
  },
  FREQUENCY: {
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
    HOUR: 'hour',
    MINUTE: 'minute',
    SECOND: 'second',
  },

  CHECKBOX_OPACITY: 0.2,
  DURATION_OPACITY: 0.3,
  DEFAULT_HEADER_AND_TOKEN_OPACITY: 0.15,

  DARK_BRAND_COLOR: '#3A4148',
  DEFAULT_BRAND_COLOR: '#474747',
  BRAND_COLOR: '#0058AD',
  BRAND_COLOR_LIGHT: '#449DF2',
  BACKGROUND_COLOR_LIGHT: '#F3F2F1',
  BACKGROUND_COLOR_DARK: '#514f4e',
  FIELD_GROUP_BORDER_COLOR: '#c2c2c2',
  FIELD_GROUP_BORDER_COLOR_WARNING: '#ffb900',
  CHEVRON_COLOR: '#8a8886',
  CHEVRON_ROOT_COLOR_LIGHT: '#514f4e',
  SETTING_SEPARATOR_COLOR_DARK: '#323130',
  SETTING_SEPARATOR_COLOR_LIGHT: '#eaeaea',
  PANEL_HIGHLIGHT_COLOR: '#0078D4',
  FX_COLOR: '#AD008C',
  INVERTED_TEXT_COLOR: '#FFFFFF',
  STANDARD_TEXT_COLOR: '#424242',
  INVERTED_EDITOR_BACKGROUND_COLOR: '#1B1A19',
  STANDARD_EDITOR_BACKGROUND_COLOR: '#FFFFFF',

  FOLDER: 'folder',
  FILE: 'file',
  PATH_DELIMITER: '/',

  // Key Codes
  KEY_CODES: {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
  },

  // Run status
  STATUS: {
    ABORTED: 'Aborted',
    CANCELLED: 'Cancelled',
    FAILED: 'Failed',
    FAULTED: 'Faulted',
    IGNORED: 'Ignored',
    NOT_SPECIFIED: 'NotSpecified',
    PAUSED: 'Paused',
    RUNNING: 'Running',
    SKIPPED: 'Skipped',
    SUCCEEDED: 'Succeeded',
    SUSPENDED: 'Suspended',
    TIMEDOUT: 'TimedOut',
    WAITING: 'Waiting',
  },

  // Mock status
  MOCKSTATUS: {
    COMPLETED: 'Completed',
    EMPTY: 'Empty',
  },

  CONDITIONCONTROLPROPS: {
    NAME: 0,
    RELATIONSHIP: 1,
    VALUE: 2,
    ADVANCED: 3,
  },

  CONDITION_RELATIONSHIP_VALUES,

  CONDITION_ENUM_FOR_BOOLEAN: [CONDITION_RELATIONSHIP_VALUES.IS_EQUAL_TO, CONDITION_RELATIONSHIP_VALUES.IS_NOT_EQUAL_TO],
  CONDITION_ENUM_FOR_STRING: [
    CONDITION_RELATIONSHIP_VALUES.CONTAINS,
    CONDITION_RELATIONSHIP_VALUES.DOES_NOT_CONTAIN,
    CONDITION_RELATIONSHIP_VALUES.IS_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_NOT_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_GREATER_THAN,
    CONDITION_RELATIONSHIP_VALUES.IS_GREATER_THAN_OR_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_LESS_THAN,
    CONDITION_RELATIONSHIP_VALUES.IS_LESS_THAN_OR_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.STARTS_WITH,
    CONDITION_RELATIONSHIP_VALUES.DOES_NOT_STARTS_WITH,
    CONDITION_RELATIONSHIP_VALUES.ENDS_WITH,
    CONDITION_RELATIONSHIP_VALUES.DOES_NOT_END_WITH,
  ],
  CONDITION_ENUM_FOR_NUMBER: [
    CONDITION_RELATIONSHIP_VALUES.IS_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_NOT_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_LESS_THAN,
    CONDITION_RELATIONSHIP_VALUES.IS_LESS_THAN_OR_EQUAL_TO,
    CONDITION_RELATIONSHIP_VALUES.IS_GREATER_THAN,
    CONDITION_RELATIONSHIP_VALUES.IS_GREATER_THAN_OR_EQUAL_TO,
  ],

  LIMIT_PROPS_FOR_UNTIL: {
    COUNT: 0,
    TIMEOUT: 1,
  },

  MANAGED_IDENTITY_CREATE_HELP_URL: 'https://aka.ms/create-managed-service-identity',
  NODE: {
    CATEGORY: {
      NOT_SPECIFIED: 'notspecified',
      ACTION: 'action',
      TRIGGER: 'trigger',
      BRANCH: 'branch',
    },
    TYPE: {
      // Special types which are neither actions nor triggers.
      NOT_SPECIFIED: 'notspecified',
      PLACEHOLDER: 'placeholder',
      CONDITION: 'condition',
      CONNECTION_WIZARD: 'connectionwizard',
      ELSE: 'else',
      SWITCH_CASE: 'switchcase',
      SWITCH_DEFAULT: 'switchdefault',
      PLACEHOLDER_TRIGGER: 'builtin:newWorkflowTrigger',
      // Action and trigger types.
      API_CONNECTION_WEBHOOK: 'apiconnectionwebhook',
      API_CONNECTION: 'apiconnection',
      API_CONNECTION_NOTIFICATION: 'apiconnectionnotification',
      API_MANAGEMENT: 'apimanagement',
      APPEND_TO_ARRAY_VARIABLE: 'appendtoarrayvariable',
      APPEND_TO_STRING_VARIABLE: 'appendtostringvariable',
      BATCH: 'batch',
      COMPOSE: 'compose',
      DECREMENT_VARIABLE: 'decrementvariable',
      EXPRESSION: 'expression',
      FLAT_FILE_DECODING: 'flatfiledecoding',
      FLAT_FILE_ENCODING: 'flatfileencoding',
      FOREACH: 'foreach',
      FUNCTION: 'function',
      HTTP_WEBHOOK: 'httpwebhook',
      HTTP: 'http',
      IF: 'if',
      INCREMENT_VARIABLE: 'incrementvariable',
      INITIALIZE_VARIABLE: 'initializevariable',
      INTEGRATION_ACCOUNT_ARTIFACT_LOOKUP: 'integrationaccountartifactlookup',
      JOIN: 'join',
      LIQUID: 'liquid',
      MANUAL: 'manual',
      OPEN_API_CONNECTION: 'openapiconnection',
      OPEN_API_CONNECTION_WEBHOOK: 'openapiconnectionwebhook',
      OPEN_API_CONNECTION_NOTIFICATION: 'openapiconnectionnotification',
      PARSE_JSON: 'parsejson',
      QUERY: 'query',
      RECURRENCE: 'recurrence',
      REQUEST: 'request',
      RESPONSE: 'response',
      SCOPE: 'scope',
      SELECT: 'select',
      SEND_TO_BATCH: 'sendtobatch',
      SET_VARIABLE: 'setvariable',
      SLIDING_WINDOW: 'slidingwindow',
      SWITCH: 'switch',
      TABLE: 'table',
      TERMINATE: 'terminate',
      UNTIL: 'until',
      WAIT: 'wait',
      WORKFLOW: 'workflow',
      XML_VALIDATION: 'xmlvalidation',
      XSLT: 'xslt',
    },
    KIND: {
      ADDTOTIME: 'addtotime',
      APICONNECTION: 'apiconnection',
      BUTTON: 'button',
      CONVERTTIMEZONE: 'converttimezone',
      CURRENTTIME: 'currenttime',
      EVENTGRID: 'eventgrid',
      GEOFENCE: 'geofence',
      GETFUTURETIME: 'getfuturetime',
      GETPASTTIME: 'getpasttime',
      HTTP: 'http',
      JSON_TO_JSON: 'jsontojson',
      JSON_TO_TEXT: 'jsontotext',
      POWERAPP: 'powerapp',
      POWERAPPV2: 'powerappv2',
      SECURITY_CENTER_ALERT: 'securitycenteralert',
      SUBTRACTFROMTIME: 'subtractfromtime',
      TEAMS: 'teams',
      TEAMSWEBHOOK: 'teamswebhook',
      VIRTUALAGENT: 'virtualagent',
      XML_TO_JSON: 'xmltojson',
      XML_TO_TEXT: 'xmltotext',
    },
    PHASE: {
      NOT_SPECIFIED: 'NOTSPECIFIED',
      AUTH: 'AUTH',
      CHOOSE_PREREQUISITE_CONNECTION: 'CHOOSE_PREREQUISITE_CONNECTION',
      CONDITION: 'CONDITION',
      CONNECTION_WIZARD: 'CONNECTION_WIZARD',
      CREATE_CONFIG_CONNECTION: 'CREATE_CONFIG_CONNECTION',
      CREATE_CONNECTION_ASSISTED: 'CREATE_CONNECTION_ASSISTED',
      CREATE_PARAMETERSET_CONNECTION: 'CREATE_PARAMETERSET_CONNECTION',
      CREATE_SIMPLE_CONNECTION: 'CREATE_SIMPLE_CONNECTION',
      ERROR: 'ERROR',
      FUNCTION_CREATE: 'FUNCTION_CREATE',
      HTTP_SWAGGER_ENDPOINT: 'HTTP_SWAGGER_ENDPOINT',
      OPERATION_SELECT: 'OPERATION_SELECT',
      PARAMETERS: 'PARAMETERS',
      STATIC_RESULT: 'STATIC_RESULT',
      PEEK: 'PEEK',
      PROFILE: 'PROFILE',
      RECOMMENDATION: 'RECOMMENDATION',
      RUN_AFTER_SETTINGS: 'RUN_AFTER_SETTINGS',
      SETTINGS: 'SETTINGS',
      SELECT_BATCH_TRIGGER: 'SELECT_BATCH_TRIGGER',
      SELECT_MANUAL_TRIGGER: 'SELECT_MANUAL_TRIGGER',
    },
  },
  PREMIUM: 'Premium',
  PREVIEW: 'Preview',
  RECOMMENDATION_CREATE_OPERATION_HELP_URL: 'https://aka.ms/custom-connectors',
  TOKEN_PICKER_INCLUDING_DYNAMIC_CONTENT_LEARN_MORE_URL: 'https://aka.ms/logicapps-dynamiccontent',

  SERVICE_PRINCIPAL_HELP_LINK: 'https://aka.ms/logicapps-serviceprincipal',

  TELEMETRY_IDENTIFIERS: {
    ACTIONBUTTON: 'actionbutton',
    ACTIONBUTTONV2: 'actionbuttonv2',
    ACTIONPALETTE: 'actionpalette',
    AUTH: 'auth',
    AUTH_CREATE: 'auth_create',
    AUTH_CANCEL: 'auth_cancel',
    AUTH_MANAGED_IDENTITY_INFO: 'auth_managed_identity_info',
    AUTH_MANAGED_IDENTITY_LINK: 'auth_managed_identity_link',
    AUTH_SERVICE_PRINCIPAL_LINK: 'auth_service_principal_link',
    AUTH_SERVICE_PRINCIPAL_INFO: 'auth_service_principal_info',
    AUTH_MANUAL_CONNECTION_LINK: 'auth_manual_connection_link',
    AUTH_CONNECTION_ASSIST_CANCEL: 'auth_connection_assist_cancel',
    AUTH_CONNECTION_ASSIST_CREATE: 'auth_connection_assist_create',
    AUTH_CONNECTION_ASSIST_ROW: 'auth_connection_assist_row',
    AUTH_CONNECTION_ASSIST_NAVBACK: 'auth_connection_assist_navback',
    BASECOMPONENT: 'basecomponent',
    BUTTON: 'button',
    CARD: 'card',
    CARD_HEADER: 'card_header',
    CARD_HEADER_MENU: 'card_header_menu',
    CONFIG: 'config',
    CONFIG_BROWSE_SUBSCRIPTION: 'config_browse_subscription',
    CONFIG_CANCEL: 'config_cancel',
    CONFIG_CREATE: 'config_create',
    CONFIG_SIGNIN: 'config_signin',
    COMMENTBOX: 'CommentBox',
    DOCUMENTATION_LINK_CLICK: 'documentation_link_click',
    FLYOUT: 'flyout',
    FOR_YOU_MRU_CONNECTOR_CLICK: 'MSLA.FOR_YOU_MRU_CONNECTOR_CLICK',
    FOR_YOU_SUGGESTED_CONNECTOR_CLICK: 'MSLA.FOR_YOU_SUGGESTED_CONNECTOR_CLICK',
    FOR_YOU_SUGGESTED_OPERATION_CLICK: 'MSLA.FOR_YOU_SUGGESTED_OPERATION_CLICK',
    FUNCTIONEDITOR: 'FunctionEditor',
    FUNCTIONEDITOR2: 'FunctionEditor2',
    INSERT_BUTTON: 'insert_button',
    LINKPANEL: 'linkpanel',
    MENU: 'Menu',
    MENU_ITEM: 'Menu-item',
    MENU_SUB_ITEM: 'Menu-sub-item',
    MONITOR_INPUTS: 'monitor_inputs',
    MONITOR_INPUTS_MORE: 'monitor_inputs_more',
    MONITOR_INPUTS_RAW: 'monitor_inputs_raw',
    MONITOR_OUTPUTS: 'monitor_outputs',
    MONITOR_OUTPUTS_MORE: 'monitor_outputs_more',
    MONITOR_OUTPUTS_RAW: 'monitor_outputs_raw',
    MONITOR_TRACE: 'monitor_trace',
    PALETTE: 'palette',
    PANEL_CONTAINER_TAB: 'panel_container_tab',
    PANEL_TOGGLE: 'panel_toggle',
    RECOMMENDATIONCANCELBUTTON: 'RecommendationCancelButton',
    RECOMMENDATIONLOADMOREBUTTON: 'RecommendationLoadMoreButton',
    RECOMMENDATIONOPERATION: 'RecommendationOperation',
    RECOMMENDATIONOPERATIONS: 'RecommendationOperations',
    RECOMMENDATIONSEARCHBUTTON: 'RecommendationSearchButton',
    RECOMMENDATIONSERVICE: 'RecommendationService',
    RECOMMENDATIONSERVICES: 'RecommendationServices',
    RUN_AFTER_DELETE_BUTTON_CLICK: 'MSLA.RUN_AFTER_DELETE_BUTTON_CLICK',
    SCOPEV2: 'scopev2',
    TITLE: 'CardTitle',
    TOGGLE: 'Toggle',
    VALUELINK: 'valuelink',
    VALUELIST: 'valuelist',
  },
  // Note: The resources string for category are matching with prefix: TEMPLATE_PICKER_CATEGORY_
  TEMPLATE_CATEGORIES: ['BLOCKCHAIN', 'ENTERPRISE_INTEGRATION', 'GENERAL', 'PRODUCTIVITY', 'SCHEDULE', 'SECURITY', 'SOCIAL', 'SYNC'],
  TEMPLATE_PICKER_SORT: {
    CREATED_TIME: 'TEMPLATE_PICKER_SORT_CREATED_TIME',
    NAME: 'TEMPLATE_PICKER_SORT_NAME',
    CHANGED_TIME: 'TEMPLATE_PICKER_SORT_CHANGED_TIME',
    POPULARITY: 'TEMPLATE_PICKER_SORT_POPULARITY',
  },
  TEMPLATE_PICKER_SORT_KEYS: {
    CHANGED_TIME: 'CHANGED_TIME',
    CREATED_TIME: 'CREATED_TIME',
    NAME: 'NAME',
    POPULARITY: 'POPULARITY',
  },

  ZERO_WIDTH_SPACE: '\u200c',

  Z_INDICES: {
    HIGHEST: 999,
  },

  TOKEN_PICKER_CONTROL_CLASSES: {
    TOKEN_PICKER: 'msla-token-picker',
    DISMISSIBLE: 'msla-token-picker-dismissible-control',
    NON_DISMISSIBLE: 'msla-token-picker-non-dismissible-control',
  },

  TRANSFORM_INTERACTIVE_ZONE_CLASS_NAME: 'msla-transform-interactive-zone',

  SECURE_OUTPUT_DESCRIPTION_ID: 'secure-output-description-id',

  WORKFLOW_PARAMETER_SERIALIZED_TYPE,
  WORKFLOW_PARAMETER_TYPE,
  LANGUAGE_NAMES: {
    WORKFLOW: 'TemplateExpressionLanguage',
    THEME: 'TemplateExpressionLanguageTheme',
  },

  PANEL: {
    PANEL_TAB_NAMES,
    MAX_TITLE_LENGTH: 80,
    MAX_COMMENT_LENGTH: 256,
    DEFAULT_ICON: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1550/1.0.1550.2686/azureblob/icon.png',
  },
  SWAGGER: {
    TYPE: {
      ANY: 'any',
      ARRAY: 'array',
      BOOLEAN: 'boolean',
      FILE: 'file',
      INTEGER: 'integer',
      NUMBER: 'number',
      OBJECT: 'object',
      STRING: 'string',
    },
    FORMAT: {
      BINARY: 'binary',
      BYTE: 'byte',
      DATAURI: 'datauri',
      DATE: 'date',
      DATETIME: 'date-time',
      DOUBLE: 'double',
      EMAIL: 'email',
      FLOAT: 'float',
      HOSTNAME: 'hostname',
      INT32: 'int32',
      INT64: 'int64',
      IPV4: 'ipv4',
      IPV6: 'ipv6',
      HTML: 'html',
      JAVASCRIPT: 'javascript',
      URI: 'uri',
      UUID: 'uuid',
    },
    EXTENSION: {
      CAPABILITIES: 'x-ms-capabilities',
    },
  },

  EXPANDED_DICTIONARY_WIDTH_OFFSET: {
    KEY_OFFSET: -278,
    VALUE_OFFSET: -7,
  },
  DROPDOWN_CALLOUT_MAX_HEIGHT: 380,
};

export const FxBrandColor = '#AD008C';
export const FxIcon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNCAzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8cmVjdCB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9IiNhZDAwOGMiLz4NCiA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTMuNDg3LDEzLjI0OGE3LjA1NCw3LjA1NCwwLDAsMSwxLjg0OS0zLjY5QTUuMyw1LjMsMCwwLDEsMTguNTkzLDcuOWMuOTg1LDAsMS40NjcuNTg1LDEuNDQ3LDEuMDY5YTEuNTUxLDEuNTUxLDAsMCwxLS43NDQsMS4xNDkuNDA2LjQwNiwwLDAsMS0uNTQzLS4wNjFjLS41NDMtLjY2NS0xLjAwNS0xLjA2OS0xLjM2Ny0xLjA2OS0uNC0uMDItLjc2NC4yODItMS40MDcsNC4yNTVoMi4zMzJsLS40MjIuODA3LTIuMDkuMTYxYy0uMzQyLDEuODM1LS42LDMuNjMtMS4xNDYsNS45MDgtLjc4NCwzLjMyNy0xLjY4OCw0LjY1OC0zLjEsNS44MjdBMy43NDYsMy43NDYsMCwwLDEsOS4zNDcsMjdDOC42ODMsMjcsOCwyNi41NTYsOCwyNi4wMzJhMS42OTIsMS42OTIsMCwwLDEsLjcyNC0xLjE0OWMuMTYxLS4xMjEuMjgxLS4xNDEuNDIyLS4wNGEyLjg3MywyLjg3MywwLDAsMCwxLjU2OC43MDYuNjc1LjY3NSwwLDAsMCwuNjYzLS41LDI3LjQyNywyNy40MjcsMCwwLDAsLjg0NC00LjE3NGMuNDYyLTIuNzYyLjc0NC00LjY1OCwxLjA4NS02LjY1NEgxMS43bC0uMS0uMi42ODMtLjc2NloiLz4NCiA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTcuMzIxLDE4LjljLjgxMi0xLjE4MywxLjY1NC0xLjg3NCwyLjIzNi0xLjg3NC40OSwwLC43MzUuNTIyLDEuMDU3LDEuNDlsLjIzLjcyMmMxLjE2NC0xLjY3NSwxLjczMS0yLjIxMiwyLjQtMi4yMTJhLjc0Mi43NDIsMCwwLDEsLjc1MS44NDUuOTIyLjkyMiwwLDAsMS0uOC44NzYuNDE0LjQxNCwwLDAsMS0uMjkxLS4xNjkuNDc3LjQ3NywwLDAsMC0uMzY4LS4xODRjLS4xNTMsMC0uMzM3LjEwOC0uNjEzLjM4NGE4LjU0Nyw4LjU0NywwLDAsMC0uODczLDEuMDc1bC42MTMsMS45NjZjLjE4NC42My4zNjcuOTUyLjU2Ny45NTIuMTg0LDAsLjUwNi0uMjQ2LDEuMDQyLS44OTFsLjMyMi4zODRjLS45LDEuNDI5LTEuNzYxLDEuOTItMi4zNDMsMS45Mi0uNTIxLDAtLjg1OC0uNDMtMS4xOC0xLjQ5bC0uMzUyLTEuMTY4Yy0xLjE3OSwxLjkyLTEuNzQ2LDIuNjU4LTIuNTQzLDIuNjU4YS44MTUuODE1LDAsMCwxLS44MTItLjg3NS45LjksMCwwLDEsLjc2Ni0uOTIyLjQ5My40OTMsMCwwLDEsLjI5MS4xNTQuNTE0LjUxNCwwLDAsMCwuMzY4LjE2OWMuMzM3LDAsLjk1LS42NzYsMS43MTUtMS44NTlsLS40LTEuMzY3Yy0uMjc2LS45MDYtLjQxNC0xLjAxNC0uNTY3LTEuMDE0LS4xMzgsMC0uNDE0LjItLjg4OC44MTRaIi8+DQo8L3N2Zz4NCg==';
