import { isInt } from "class-validator";

export class CreateUserDto {
    @isInt()
    id: number;
    username: string;
    age: number;
    stack: string;
}
