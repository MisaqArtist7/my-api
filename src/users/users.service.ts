import { Injectable, NotFoundException, BadRequestException, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto.js';

@Injectable()
export class UsersService {
    private users = [
        {id:1, username: 'misaq'},
        {id:2, username: 'alireza'},
        {id:3, username: 'farshad'},
    ]
    getAllUsers(): object {
        return {
            data: this.users,
            statusCode: 200,
            message: 'Get All users has been successfull',
        }
        
    }

    getUserById(id : number){ 
        const user =  this.users.find((user) => user.id === id);
        if(!user) {
            throw new NotFoundException('User not found');
        }
        return user
    }

    createUser(body : CreateUserDto) : object{
        const user = body

        if (!user || Object.keys(user).length === 0) {
            throw new BadRequestException('Invalid user data');
        }

        const newUser = {
            ...user,
            id: this.users.length + 1
        }

        this.users = [...this.users, newUser]
        return this.users
    }

    updateUser(id : number){
        const user = this.users.find((user) => user.id === id);

        if(!user) {
            throw new NotFoundException('User not found');
        }
        
        user.age = 72;
        return user
    }

    changeUser(id: number, body: object) {
        const user = this.users.find((user) => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        this.users = this.users.map((user) =>
            user.id === id
            ? { ...user, ...body }
            : user
        );

        return this.users.find((user) => user.id === id);
    }

    deleteUser(id : number){
        return this.users = this.users.filter((user) => user.id !== id);
    } 
}

