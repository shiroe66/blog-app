import { PrismaClient, User } from "@prisma/client";
import { inject, injectable } from "inversify";
import { UserDto } from "../validations/auth";

@injectable()
export class UserFactory {
  constructor(@inject(PrismaClient) private prisma: PrismaClient) { }

  async findOne(field: 'id' | 'name', value: string) {
    const user = await this.prisma.user.findUnique({ where: { [field]: value } })
    if (user) {
      return this.excludeField(user, 'password')
    }
  }

  async create(userDto: UserDto) {
    const user = await this.prisma.user.create({ data: userDto })
    return user
  }

  private excludeField(user: User, field: keyof User) {
    delete user[field]
    return user
  }
}