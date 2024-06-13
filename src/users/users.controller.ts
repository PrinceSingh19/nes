import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(typeof id);
    return this.usersService.findOne(parseInt(id));
  }

  @Post()
  createUser(@Body() userObject: { name: string; age: number }): object {
    return this.usersService.createUser(userObject);
  }
}
