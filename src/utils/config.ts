export const config = {
  hubspot: {
    apiKey: process.env.HUBSPOT_API_KEY
  },
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    useEmulator: process.env.USE_FIREBASE_EMULATOR === 'true'
  }
};