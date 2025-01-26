"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHubspotContact = void 0;
const hubspot_1 = require("../../config/hubspot");
const contacts_1 = require("@hubspot/api-client/lib/codegen/crm/contacts");
const findHubspotContact = async (email) => {
    const searchResponse = await hubspot_1.hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [{
                filters: [{
                        propertyName: 'email',
                        operator: contacts_1.FilterOperatorEnum.Eq,
                        value: email
                    }]
            }]
    });
    return searchResponse.results[0] || null;
};
exports.findHubspotContact = findHubspotContact;
