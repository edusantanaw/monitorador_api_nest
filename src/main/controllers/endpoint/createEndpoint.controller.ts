import { Body, Controller, Post, HttpException, Inject } from '@nestjs/common';
import { CreateEndPointDto } from './dtos/EndPoint.dto';
import { CreateService } from '../services/create.service';

@Controller('/api/endpoint')
export class CreateEndPointController {
  constructor(
    @Inject('CreateEndPointService')
    private readonly createEndPointService: CreateService<IEndPoint, IEndPoint>,
  ) {}
  @Post()
  public async handle(@Body() data: CreateEndPointDto) {
    try {
      const endPoint = await this.createEndPointService.execute(data);
      return endPoint;
    } catch (error) {
      const { message } = error as Error;
      throw new HttpException(message, 400);
    }
  }
}
