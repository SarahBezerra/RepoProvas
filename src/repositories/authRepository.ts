import { prisma } from "../database.js";

export interface User {
    id: number;
    email: string;
    password: string;
}
export type createUser = Omit<User, "id">;

export interface Session {
    id: number;
    userId: number;
}
export type createSession = Omit<Session, "id">;


async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email }
    });
}

async function insertUser(userData: createUser) {
    return prisma.user.create({
        data: userData
    });
}

async function insertSession(sessionData: createSession) {
    return prisma.sessions.create({
        data: sessionData
    })
}

async function findSession(sessionData: createSession) {
    return prisma.sessions.findUnique({
        where: { userId: sessionData.userId }
    })
}

export {
    findUserByEmail,
    insertUser,
    insertSession,
    findSession,
}