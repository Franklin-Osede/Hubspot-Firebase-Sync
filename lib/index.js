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
exports.syncAll = exports.syncUser = void 0;
const functions = __importStar(require("firebase-functions"));
const singleSync_1 = require("./services/sync/singleSync");
const bulkSync_1 = require("./services/sync/bulkSync");
exports.syncUser = functions.https.onRequest(async (req, res) => {
    try {
        const result = await (0, singleSync_1.syncSingleUser)(req.body.email);
        res.json(result);
    }
    catch (error) {
        // Corregido: especificar que 'error' es de tipo 'Error'
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.syncAll = functions.https.onRequest(async (req, res) => {
    try {
        const result = await (0, bulkSync_1.syncAllContacts)();
        res.json(result);
    }
    catch (error) {
        // Corregido: especificar que 'error' es de tipo 'Error'
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
//# sourceMappingURL=index.js.map