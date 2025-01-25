import * as admin from 'firebase-admin';
import { config } from '../utils/config';

const app = admin.initializeApp();
export const db = admin.firestore();

if (config.firebase.useEmulator) {
 db.settings({
   host: 'localhost:8080',
   ssl: false
 });
}