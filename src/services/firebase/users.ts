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
    // Asegúrate de que error es de tipo Error antes de acceder a message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return { success: false, error: errorMessage };
  }
};
