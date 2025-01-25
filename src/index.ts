import * as functions from 'firebase-functions';
import { syncSingleUser } from './services/sync/singleSync';
import { syncAllContacts } from './services/sync/bulkSync';

export const syncUser = functions.https.onRequest(async (req, res) => {
  try {
    const result = await syncSingleUser(req.body.email);
    res.json(result);
  } catch (error) {
    // Corregido: especificar que 'error' es de tipo 'Error'
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

export const syncAll = functions.https.onRequest(async (req, res) => {
  try {
    const result = await syncAllContacts();
    res.json(result);
  } catch (error) {
    // Corregido: especificar que 'error' es de tipo 'Error'
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});
