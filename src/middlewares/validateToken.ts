import { NextFunction, Request, Response } from 'express';
import * as authRepository from '../repositories/authRepository.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { Unauthorized } from '../utils/errorUtils.js';
dotenv.config();

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  const errorMessage = "Faça login/cadastro para continuar";

  if(!authorization){
    Unauthorized(errorMessage)
  }

  const token = JSON.parse(authorization?.replace("Bearer ", ""));
  const secretKey = process.env.JWT_SECRET;

  try{
    const userKey = jwt.verify(token.userKey, secretKey);

    const session = await authRepository.findSessionById(userKey);
    if(!session){
      Unauthorized(errorMessage)
    }

    res.locals.userId = session.userId;

  }catch{
    Unauthorized(errorMessage)
  }

  next();
}