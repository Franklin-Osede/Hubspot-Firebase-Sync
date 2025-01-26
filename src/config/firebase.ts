import * as admin from 'firebase-admin';
import { config } from '../utils/config';

// Inicializa Firebase Admin SDK
admin.initializeApp({
  projectId: config.firebase.projectId
});

export const db = admin.firestore();

// Configura Firestore para usar el emulador si está habilitado
if (config.firebase.useEmulator) {
  db.settings({
    host: 'localhost:8080',
    ssl: false
  });
  console.log('Using Firestore emulator at localhost:8080');
}
