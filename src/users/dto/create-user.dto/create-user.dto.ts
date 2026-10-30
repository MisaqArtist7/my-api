import { IsInt, IsString } from "class-validator";

export class CreateUserDto {
    username: string;

    @IsInt()
    age: number;

    @IsString()
    stack: string;
}
