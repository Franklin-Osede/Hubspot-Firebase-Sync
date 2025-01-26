"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncAllContacts = void 0;
const hubspot_1 = require("../../config/hubspot");
const users_1 = require("../firebase/users");
const syncAllContacts = async () => {
    let processedCount = 0;
    let errorCount = 0;
    let after;
    try {
        do {
            const response = await hubspot_1.hubspotClient.crm.contacts.basicApi.getPage(25, after, ['email', 'ID de registro']);
            for (const contact of response.results) {
                if (contact.properties.email) {
                    const result = await (0, users_1.updateUserHubspotData)(contact.properties.email, contact);
                    result.success ? processedCount++ : errorCount++;
                }
            }
            after = response.paging?.next?.after;
        } while (after);
        return { success: true, processedCount, errorCount };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        throw new Error(`Bulk sync failed: ${errorMessage}`);
    }
};
exports.syncAllContacts = syncAllContacts;
