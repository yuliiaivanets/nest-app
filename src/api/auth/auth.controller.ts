import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwwtAuthGuard } from 'src/common/guards/jwt.guard';
import { CurrenUser } from 'src/common/decorator/current-user.decorator';
import { type User } from '@prisma/client';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/register')
  register(@Body() dto: RegisterDto) {
    return this.service.register(dto);
  }

  @Post('/login')
  login(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }

  @Get('/me')
  @UseGuards(JwwtAuthGuard) // есть ли JWT, и если есть, то сохраняет тек пользователя в req
  me(@CurrenUser() user: User) {
    return user;
  }
}
