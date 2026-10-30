import { IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsInt()
    age: number;

    @IsString()
    stack: string;
}
