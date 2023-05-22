import { Transform } from "class-transformer";
import { IsNotEmpty, IsPositive } from "class-validator";

export class GetAll {
  @IsPositive()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  page: number
}