import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppSecurityService {
  constructor(private jwtService: JwtService) {}

  private users = [
    { id: 1, username: 'Juan', password: 'password1' },
    { id: 2, username: 'Pedro', password: 'password2' },
    { id: 3, username: 'Ronny', password: 'password3' },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((user) => user.username === username);

    if (user && user.password === password) {
      const userResult  = {id: user.id, username: user.username} ; 
      return userResult;
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }

  async login(username: string, password: string) {
    const validateUser = await this.validateUser(username, password);
    
    return {
      token: this.jwtService.sign(validateUser),
    };
    
  }
}
