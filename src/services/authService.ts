import { createUser } from '../repositories/authRepository.js';
import * as userRepository from '../repositories/authRepository.js';
import { notFound } from '../utils/errorUtils.js';


async function createUser(userData: createUser){
    const user = await userRepository.findByEmail(userData.email);
    if(user){
        notFound("email já cadastrado")
    }

    await userRepository.createUser(userData);
}

export {
    createUser,
}