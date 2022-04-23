import { prisma } from "../database.js";

export interface User {
    id: number;
    email: string;
    password: string;
}

export type createUser = Omit<User, "id">;

async function findByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email }
    });
}

async function createUser(userData: createUser) {
    return prisma.user.create({
        data: userData
    });
}

async function findUsers() {
    return prisma.user.findMany();
}

export {
    findUsers,
    findByEmail,
    createUser,
}