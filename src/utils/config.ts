import * as dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

if (!process.env.HUBSPOT_API_KEY) {
  throw new Error('HUBSPOT_API_KEY is not defined in the environment variables.');
}

if (!process.env.FIREBASE_PROJECT_ID) {
  throw new Error('FIREBASE_PROJECT_ID is not defined in the environment variables.');
}

export const config = {
  hubspot: {
    apiKey: process.env.HUBSPOT_API_KEY // API Key de HubSpot
  },
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID, // ID del proyecto de Firebase
    useEmulator: process.env.USE_FIREBASE_EMULATOR === 'true' // Booleano para el emulador
  }
};
