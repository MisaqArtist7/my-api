import { IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsString()
    username: string;

    @IsInt()
    age: number;

    @IsString()
    stack: string;
}
