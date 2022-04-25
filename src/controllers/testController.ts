import { Request, Response } from 'express';
import * as testService from '../services/testService.js';

async function getTests(req: Request, res: Response){
    const tests = await testService.getTests();

    res.status(200).send(tests);
}

export {
    getTests,
}