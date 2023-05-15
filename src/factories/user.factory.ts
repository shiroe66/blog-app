import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { UserDto } from "../validations/auth";

@injectable()
export class UserFactory {
  constructor(@inject(PrismaClient) private prisma: PrismaClient) { }

  async findOne(name: string) {
    const user = await this.prisma.user.findUnique({ where: { name } })
    return user
  }

  async create(userDto: UserDto) {
    const user = await this.prisma.user.create({ data: userDto })
    return user
  }
}