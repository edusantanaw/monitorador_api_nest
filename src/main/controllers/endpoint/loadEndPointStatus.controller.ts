import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
} from '@nestjs/common';

abstract class ILoadEndPointStatusService {
  abstract execute(userId: string): Promise<IEndPointStatus[]>;
}

@Controller('/api/endpoint')
export class LoadEndPointStatusController {
  constructor(
    @Inject('LoadEndPointStatusService')
    private readonly loadEndPointStatusService: ILoadEndPointStatusService,
  ) {}

  @Get('/status/:userId')
  public async handle(@Param() data: { userId: string }) {
    try {
      if (!data.userId) return new BadRequestException('User id is required!');
      const endPointStatus = await this.loadEndPointStatusService.execute(
        data.userId,
      );
      return endPointStatus;
    } catch (error) {
      const { message } = error as Error;
      throw new HttpException(message, 400);
    }
  }
}
