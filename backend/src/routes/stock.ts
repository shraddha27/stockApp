import { Router } from 'express';
import { getStockData } from '../controllers/index';

const router = Router();

router.get('/:symbol', getStockData);

export default router;
