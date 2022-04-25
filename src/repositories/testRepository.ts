import { prisma } from "../database.js";

async function findTerms() {
    return prisma.term.findMany({
        include: {
            Discipline: {
                include: {
                    TeacherDiscipline: {
                        include: {
                            Teacher:true,
                            Test: {
                                include: {
                                    Categorie: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

export {
    findTerms,
}