import { inject } from "inversify";
import { BaseHttpController, controller, httpPost, request, requestBody } from "inversify-express-utils";
import { EXCEPTIONS, TYPES } from "../constants";
import { AuthService } from "../services";
import { validateDTO } from "../middleware";
import { UserDto } from "../validations/auth";
import { Request } from "express";
import * as jwt from "jsonwebtoken";

@controller('/auth')
export class AuthController extends BaseHttpController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {
    super()
  }

  @httpPost('/signup', validateDTO(UserDto, 'body'))
  async signup(@requestBody() userDto: UserDto) {
    const user = await this.authService.signup(userDto)
    if (!user) {
      return this.json(EXCEPTIONS.Conflict)
    }
    return this.json(user, 201)
  }

  @httpPost('/signin', validateDTO(UserDto, 'body'))
  async signin(@request() req: Request, @requestBody() userDto: UserDto) {
    const user = await this.authService.signin(userDto)
    if (!user) {
      return this.json(EXCEPTIONS.Forbidden, 403)
    }

    // FIX: return token in httpOnly cookies
    const payload = { sub: user.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return this.json(token, 201)
  }
}