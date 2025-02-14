import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSecurityModule } from './app-security/app-security.module';

@Module({
  imports: [AppSecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
