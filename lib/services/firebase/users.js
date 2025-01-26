"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHubspotData = void 0;
const firebase_1 = require("../../config/firebase");
const admin = __importStar(require("firebase-admin"));
const updateUserHubspotData = async (email, hubspotData) => {
    try {
        const snapshot = await firebase_1.db.collection('users')
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
    }
    catch (error) {
        // Asegúrate de que error es de tipo Error antes de acceder a message
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return { success: false, error: errorMessage };
    }
};
exports.updateUserHubspotData = updateUserHubspotData;
//# sourceMappingURL=users.js.map