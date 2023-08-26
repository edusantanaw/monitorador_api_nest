import { Module } from '@nestjs/common';
import { CreateEndPointController } from 'src/main/controllers/endpoint/createEndpoint.controller';
import { LoadEndPointStatusController } from 'src/main/controllers/endpoint/loadEndPointStatus.controller';
import { EndPointServiceModule } from 'src/main/services/endpoint/endpoint.module';

@Module({
  imports: [EndPointServiceModule],
  providers: [EndPointServiceModule],
  controllers: [CreateEndPointController, LoadEndPointStatusController],
})
export class EndPointModule {}
