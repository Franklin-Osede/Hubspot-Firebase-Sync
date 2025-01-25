import { hubspotClient } from '../../config/hubspot';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts';

export const findHubspotContact = async (email: string) => {
  const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
    filterGroups: [{
      filters: [{
        propertyName: 'email',
        operator: FilterOperatorEnum.Eq,
        value: email
      }]
    }]
  });
  return searchResponse.results[0] || null;
};