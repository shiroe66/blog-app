import { inject } from "inversify";
import { BaseHttpController, controller, httpPost, requestBody } from "inversify-express-utils";
import { TYPES } from "../constants";
import { AuthService } from "../services";
import { validateDTO } from "../validations";
import { UserDto } from "../validations/auth";

@controller('/auth')
export class AuthController extends BaseHttpController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {
    super()
  }

  @httpPost('/signup', validateDTO(UserDto, 'body'))
  async signup(@requestBody() userDto: UserDto) {
    const user = await this.authService.signup(userDto)
    if (!user) {
      return this.conflict()
    }
    return this.json(user, 201)
  }
}