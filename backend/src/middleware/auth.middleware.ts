import { inject, injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { NextFunction, Request, Response } from "express";
import * as passport from "passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { TYPES } from "../constants";
import { UserFactory } from "../factories";

@injectable()
export class AuthMiddleware extends BaseMiddleware {
  constructor(@inject(TYPES.UserFactory) private userFactory: UserFactory) {
    super()
  }

  async handler(req: Request, res: Response, next: NextFunction) {
    const opt: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    }

    passport.use(new Strategy(opt, async (payload, done) => {
      const user = await this.userFactory.findOne('id', payload.sub)
      if (!user) {
        return done(null, false)
      }
      return done(null, user)
    }))

    next()
  }
}