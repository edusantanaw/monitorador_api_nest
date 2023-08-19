import { Module } from '@nestjs/common';
import { AuthController } from 'src/main/controllers/auth/auth.controller';
import { AuthServiceModule } from 'src/main/services/auth/auth.module';

@Module({
  imports: [AuthServiceModule],
  providers: [AuthServiceModule],
  controllers: [AuthController],
})
export class AuthModule {}
