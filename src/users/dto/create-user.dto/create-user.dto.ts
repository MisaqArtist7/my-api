import { isInt, isString } from "class-validator";

export class CreateUserDto {
    @isInt()
    id: number;

    @isString()
    username: string;

    @isInt()
    age: number;

    @isString()
    stack: string;
}
