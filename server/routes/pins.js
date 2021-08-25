import express from 'express';
import { getPins, createPins, deletePin } from '../controllers/pins.js';

const router = express.Router();

router.get('/:id', getPins);
router.post('/:id', createPins);
router.delete('/:id/:pin', deletePin);

export default router;
