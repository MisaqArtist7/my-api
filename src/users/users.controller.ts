import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
    createUser(@Body() body : any){
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

}

