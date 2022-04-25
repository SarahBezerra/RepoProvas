import * as testRepository from '../repositories/testRepository.js';

async function getTests(){
    const tests = await testRepository.findTerms();

    return tests;
}

export {
    getTests,
}