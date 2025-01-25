// config.ts
export const config = {
  hubspot: {
    apiKey: process.env.HUBSPOT_API_KEY
  },
  firebase: {
    useEmulator: process.env.USE_FIREBASE_EMULATOR === 'true'
  }
};