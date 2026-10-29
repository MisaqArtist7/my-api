import { Body, Controller, Delete, Get, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    Index(){
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    getUser(@Param('id') id : string){
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })) body : CreateUserDto){
        return this.usersService.createUser(body)
    }

    @Patch('/:id')
    updateUser(@Param('id') id : string) {
        return this.usersService.updateUser(Number(id));
    }

    @Put('/:id')
    changeUser(@Param('id') id : string, @Body() body : object){
        return this.usersService.changeUser(Number(id), body)
    }

    @Delete('/:id')
    removeUser(@Param('id') id : string){
        return this.usersService.deleteUser(Number(id))
    }
}

