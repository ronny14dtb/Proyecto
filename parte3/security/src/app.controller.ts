import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppSecurityService } from './app-security/app-security.service';

@Controller()
export class AppController {
  constructor(private readonly appSecurityService: AppSecurityService) {}

  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    return this.appSecurityService.login(body.username, body.password);
  }

  @Post('validateUser')
  validateUser(@Body() body: { username: string; password: string }) {
    return this.appSecurityService.validateUser(body.username, body.password);
  }
}
