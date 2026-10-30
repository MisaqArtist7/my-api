import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    // @IsString()
    // @IsNotEmpty()
    // mobile: string;
}
