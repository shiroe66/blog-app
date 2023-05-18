import { IsNotEmpty, IsString, Length, Matches } from "class-validator"

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 10)
  name: string

  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'Minimum eight characters, at least one letter and one number' })
  password: string
}