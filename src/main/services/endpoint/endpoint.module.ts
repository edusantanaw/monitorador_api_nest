import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infra/repositories/reposotories.module';
import { CreateEndPointService } from './createEndpoint.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreateEndPointService,
    { useClass: CreateEndPointService, provide: 'CreateEndPointService' },
  ],
  exports: [
    { useClass: CreateEndPointService, provide: 'CreateEndPointService' },
    CreateEndPointService,
  ],
})
export class EndPointServiceModule {}
