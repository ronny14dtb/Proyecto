import { Test, TestingModule } from '@nestjs/testing';
import { AppSecurityService } from './app-security/app-security.service';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppSecurityService', () => {
  let appSecurityService: AppSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppSecurityService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('mocked-token'),
          },
        },
      ],
    }).compile();

    appSecurityService = module.get<AppSecurityService>(AppSecurityService);
  });

  it('Usuario Correcto', async () => {
    const result = await appSecurityService.validateUser('Juan', 'password1');
    expect(result).toEqual({ id: 1, username: 'Juan' });
  });

  it('Credenciales inválidas', async () => {
    await expect(appSecurityService.validateUser('Juan', 'wrongpassword')).rejects.toThrow();
  });

  it('Generación Token', async () => {
    const loginResult = await appSecurityService.login('Juan', 'password1');
    expect(loginResult).toHaveProperty('token');
    expect(typeof loginResult.token).toBe('string');
  });
});