import express from 'express';
import { getMap } from '../controllers/map';

const router = express.Router();

router.get('/map', getMap);

export { router };
