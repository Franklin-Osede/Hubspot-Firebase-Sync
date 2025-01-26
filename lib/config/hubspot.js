"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubspotClient = void 0;
const api_client_1 = require("@hubspot/api-client");
const config_1 = require("../utils/config");
// Inicializa el cliente de HubSpot con la API Key
if (!config_1.config.hubspot.apiKey) {
    throw new Error('HubSpot API Key is missing.');
}
exports.hubspotClient = new api_client_1.Client({ accessToken: config_1.config.hubspot.apiKey });
//# sourceMappingURL=hubspot.js.map