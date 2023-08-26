import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infra/repositories/reposotories.module';
import { CreateEndPointService } from './createEndpoint.service';
import { LoadEndPointStatusService } from './loadEndPointStatus.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreateEndPointService,
    { useClass: CreateEndPointService, provide: 'CreateEndPointService' },
    {
      useClass: LoadEndPointStatusService,
      provide: 'LoadEndPointStatusService',
    },
  ],
  exports: [
    { useClass: CreateEndPointService, provide: 'CreateEndPointService' },
    {
      useClass: LoadEndPointStatusService,
      provide: 'LoadEndPointStatusService',
    },
    CreateEndPointService,
  ],
})
export class EndPointServiceModule {}
