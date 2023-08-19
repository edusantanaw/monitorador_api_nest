import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HelpersModule } from 'src/main/utils/helpers/helpers.module';
import { RepositoriesModule } from 'src/infra/repositories/reposotories.module';

@Module({
  imports: [HelpersModule, RepositoriesModule],
  providers: [
    { provide: 'AuthService', useClass: AuthService },
    HelpersModule,
    RepositoriesModule,
  ],
  exports: [{ provide: 'AuthService', useClass: AuthService }],
})
export class AuthServiceModule {}
