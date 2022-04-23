import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export default function validateSchemaMiddleware(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => { 
      const validation = schema.validate(req.body);
      if (validation.error) {
        res.status(422).send("Os dados enviados não são válidos")
      }
      
      next();
    }
  }