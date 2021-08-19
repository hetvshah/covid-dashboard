import express from 'express';
import { getPins, createPins } from '../controllers/pins.js';

const router = express.Router();

router.get('/', getPins);
router.post('/', createPins);

export default router;
