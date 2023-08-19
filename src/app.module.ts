import { Module } from '@nestjs/common';
import { EndPointModule } from './main/modules/endpoint/endpoint.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './main/modules/auth/auth.module';

@Module({
  imports: [
    EndPointModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
