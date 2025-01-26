import { Client } from '@hubspot/api-client';
import { config } from '../utils/config';

// Inicializa el cliente de HubSpot con la API Key
if (!config.hubspot.apiKey) {
  throw new Error('HubSpot API Key is missing.');
}

export const hubspotClient = new Client({ accessToken: config.hubspot.apiKey });
