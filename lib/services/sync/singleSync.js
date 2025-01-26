"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncSingleUser = void 0;
const contacts_1 = require("../hubspot/contacts");
const users_1 = require("../firebase/users");
const syncSingleUser = async (email) => {
    const hubspotContact = await (0, contacts_1.findHubspotContact)(email);
    if (!hubspotContact) {
        return { success: false, message: 'Contact not found in HubSpot' };
    }
    return await (0, users_1.updateUserHubspotData)(email, hubspotContact);
};
exports.syncSingleUser = syncSingleUser;
//# sourceMappingURL=singleSync.js.map