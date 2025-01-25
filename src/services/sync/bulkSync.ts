import { hubspotClient } from '../../config/hubspot';
import { updateUserHubspotData } from '../firebase/users';

export const syncAllContacts = async () => {
  let processedCount = 0;
  let errorCount = 0;
  let after;

  try {
    do {
      const response = await hubspotClient.crm.contacts.basicApi.getPage(25, after, ['email', 'ID de registro']);
      for (const contact of response.results) {
        if (contact.properties.email) {
          const result = await updateUserHubspotData(contact.properties.email, contact);
          result.success ? processedCount++ : errorCount++;
        }
      }
      after = response.paging?.next?.after;
    } while (after);

    return { success: true, processedCount, errorCount };
  } catch (error) {
    throw new Error(`Bulk sync failed: ${error.message}`);
  }
};