import { PrismaClient } from "@prisma/client";
import { Container } from "inversify";
import { TYPES } from "./constants";
import { UserFactory } from "./factories";
import { AuthService } from "./services";

export const container = new Container({ defaultScope: 'Singleton' })

container.bind<PrismaClient>(PrismaClient).toConstantValue(new PrismaClient())

container.bind<AuthService>(TYPES.AuthService).to(AuthService)
container.bind<UserFactory>(TYPES.UserFactory).to(UserFactory)