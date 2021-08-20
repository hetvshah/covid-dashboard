import express from 'express';
import { getPins, createPins } from '../controllers/pins.js';

const router = express.Router();

router.get('/:id', getPins);
router.post('/:id', createPins);

export default router;
