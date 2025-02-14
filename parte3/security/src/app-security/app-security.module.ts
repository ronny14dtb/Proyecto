import { Module } from '@nestjs/common';
import { AppSecurityService } from './app-security.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'appSecurity123*/++', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AppSecurityService],
  exports: [AppSecurityService],
})
export class AppSecurityModule {}
