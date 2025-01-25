import * as functions from 'firebase-functions';
import { syncSingleUser } from './services/sync/singleSync';
import { syncAllContacts } from './services/sync/bulkSync';

export const syncUser = functions.https.onRequest(async (req, res) => {
  try {
    const result = await syncSingleUser(req.body.email);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const syncAll = functions.https.onRequest(async (req, res) => {
  try {
    const result = await syncAllContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});