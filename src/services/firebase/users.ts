import { db } from '../../config/firebase';
import * as admin from 'firebase-admin';

export const updateUserHubspotData = async (email: string, hubspotData: any) => {
  try {
    const snapshot = await db.collection('users')
      .where('email', '==', email.toLowerCase())
      .get();

    if (!snapshot.empty) {
      await snapshot.docs[0].ref.update({
        hubspotId: hubspotData.id,
        idRegistroHubspot: hubspotData.properties['ID de registro'],
        lastSyncedWithHubspot: admin.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, userId: snapshot.docs[0].id };
    }
    return { success: false, message: 'User not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};