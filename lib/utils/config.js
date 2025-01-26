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
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
// Cargar las variables de entorno desde el archivo .env
dotenv.config();
if (!process.env.HUBSPOT_API_KEY) {
    throw new Error('HUBSPOT_API_KEY is not defined in the environment variables.');
}
if (!process.env.FIREBASE_PROJECT_ID) {
    throw new Error('FIREBASE_PROJECT_ID is not defined in the environment variables.');
}
exports.config = {
    hubspot: {
        apiKey: process.env.HUBSPOT_API_KEY // API Key de HubSpot
    },
    firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        useEmulator: process.env.USE_FIREBASE_EMULATOR === 'true' // Booleano para el emulador
    }
};
//# sourceMappingURL=config.js.map