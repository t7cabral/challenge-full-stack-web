
'use strict';

import { Router } from 'express';
import * as StudentController from '../controllers/StudentController';
const xss_sanitize = require('../middlewares/xss_sanitize.js');

const router = Router();

router.get('/:id', StudentController.getOne);

router.get('/', StudentController.getAll);

router.post('/', xss_sanitize, StudentController.createOne);

router.put('/:id', xss_sanitize, StudentController.updateOne);

router.delete('/:id', StudentController.deleteOne);

export default router;
