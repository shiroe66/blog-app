import { inject, injectable } from "inversify";
import * as argon2 from 'argon2'
import { TYPES } from "../constants";
import { UserFactory } from "../factories";
import type { UserDto } from "../validations/auth";

@injectable()
export class AuthService {
  constructor(@inject(TYPES.UserFactory) private userFactory: UserFactory) { }

  async signup(userDto: UserDto) {
    const user = await this.userFactory.findOne('name', userDto.name)

    if (!user) {
      const password = await argon2.hash(userDto.password)
      const { id, name } = await this.userFactory.create({ name: userDto.name, password })
      return { id, name }
    }
    return null
  }

  // FIX
  async signin(userDto: UserDto) {
    const user = await this.userFactory.findOne('name', userDto.name)
    return user
  }
}