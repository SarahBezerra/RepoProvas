import { Request, Response } from 'express';
import { badRequest } from '../utils/errorUtils.js';
import * as authService from '../services/authService.js';

async function createUser(req: Request, res: Response){
    const { email, password } = req.body;

    if(!email || !password){
        badRequest("envie email e senha para continuar")
    }

    await authService.insertUser(req.body);

    res.sendStatus(201);
}

async function signIn(req: Request, res: Response){
    const { email, password } = req.body;

    if(!email || !password){
        badRequest("envie email e senha para continuar")
    }

    const userKey = await authService.signIn(req.body);

    res.status(200).send({ userKey });
}

export {
    createUser,
    signIn,
}