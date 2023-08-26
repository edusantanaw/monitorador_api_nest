import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './main/modules/auth/auth.module';
import { EndPointModule } from './main/modules/endpoint/endpoint.module';
import { JobsModules } from './main/jobs/jobs.module';

@Module({
  imports: [
    EndPointModule,
    JobsModules,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
