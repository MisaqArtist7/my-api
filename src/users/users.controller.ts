import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/detail')
    getUser(): string {
        return "user detail";
    }
}
