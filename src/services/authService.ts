import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from '../repositories/authRepository.js';
import * as authRepository from '../repositories/authRepository.js';
import { notFound, Unauthorized } from '../utils/errorUtils.js';
import dotenv from "dotenv";
dotenv.config();

async function insertUser(userData: createUser){
    const { email, password } = userData;

    const user = await authRepository.findUserByEmail(email);
    if(user){
        notFound("email já cadastrado")
    }

    const encriptedPassword: string = bcrypt.hashSync(password, 10);

    await authRepository.insertUser({ email, password: encriptedPassword });
}

async function signIn(userData: createUser){
    const { email, password } = userData;

    const user = await authRepository.findUserByEmail(email);
    if(!user){
        notFound("email não cadastrado")
    }

    if(!(bcrypt.compareSync(password, user.password))){
        Unauthorized("senha inválida")
    }

    await authRepository.insertSession({ userId: user.id });

    const userKey = await createuserKey(user.id);

    return userKey;
}

async function createuserKey(userId: number) {
    const session = await authRepository.findSession({ userId });
    const data = { sessionId: session.id }

    const secretKey = process.env.JWT_SECRET;
    const timeoutSetting = { expiresIn: 60*60*24 }
    const userKey = jwt.sign(data, secretKey, timeoutSetting);

    return userKey;
}

export {
    insertUser,
    signIn,
}