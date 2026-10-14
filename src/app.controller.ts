import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
    interface userType {
      id: number,
      title: string,
      age: number
    }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Stay hard";
  }

  @Get('/dashboard')
  showData() {

    const user : userType = {
      id: 1,
      title: 'misaq',
      age: 23,
    };
    return user
  }

  @Post('/register')
  sendData() : (string | number)[]{
    const name = 'reza';
    const password = 777;
    const data = [
      name,
      password,
    ]
    return data;
  }
  
}
