import express from 'express';
import {saveSentEmails} from '../controller/email-controller.js'
import { getEmails , moveEmailsToBin, toggleStarredEmail, deleteEmails} from '../controller/email-controller.js';

const routes = express.Router();


routes.post('/save',saveSentEmails);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmails);
routes.post('/bin',moveEmailsToBin)
routes.post('/starred',toggleStarredEmail);
routes.delete('/delete',deleteEmails);

export default routes;