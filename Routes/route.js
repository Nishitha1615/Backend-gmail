import express from 'express';
import { saveSentEmail ,getEmails, saveDraftEmail,DeleteEmails,StarEmail,DeleteEmail} from '../Controllers/email.controller.js';
const routes=express.Router();

routes.post('/save',saveSentEmail);
routes.get('/emails/:type',getEmails);
routes.post('/draft',saveDraftEmail);
routes.post('/bin',DeleteEmails);
routes.post('/started',StarEmail);
routes.delete('/delete',DeleteEmail);
export default routes;