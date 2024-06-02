import express from 'express';
import { Contact } from '../controller/contact.controller.js'; // Update the correct path

const router = express.Router();

router.post("/contact", Contact);

export default router;