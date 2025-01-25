import { findHubspotContact } from '../hubspot/contacts';
import { updateUserHubspotData } from '../firebase/users';

export const syncSingleUser = async (email: string) => {
  const hubspotContact = await findHubspotContact(email);
  if (!hubspotContact) {
    return { success: false, message: 'Contact not found in HubSpot' };
  }
  return await updateUserHubspotData(email, hubspotContact);
};