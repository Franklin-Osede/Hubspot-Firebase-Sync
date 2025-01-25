import { Client } from '@hubspot/api-client';
import { config } from '../utils/config';

export const hubspotClient = new Client({ accessToken: config.hubspot.apiKey })
