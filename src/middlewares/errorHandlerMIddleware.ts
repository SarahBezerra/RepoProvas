import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errorUtils.js";

export default function errorHandlerMiddleware(
    err: Error | AppError,
    req: Request, 
    res: Response, 
    next: NextFunction) {

    if('type' in err){
        if     (err.type === 'bad_request') { return res.status(400).send(err.message) }
        else if(err.type === 'unauthorized'){ return res.status(401).send(err.message) }
        else if(err.type === 'not_found')   { return res.status(404).send(err.message) }
        else if(err.type === 'conflict')    { return res.status(409).send(err.message) }
    }
    
    res.sendStatus(500);
}