import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from "class-validator";
import { NextFunction, Request, Response } from 'express';

export const validateDTO = (dto: ClassConstructor<object>, type: 'body' | 'query' | 'param') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const value = plainToInstance(dto, req[type])
    const errors = await validate(value)

    if (errors.length) {
      const changed = errors.map((error) => ({
        property: error.property,
        constrains: error.constraints
      }))

      return res.status(400).json(changed)
    }

    next()
  }
}