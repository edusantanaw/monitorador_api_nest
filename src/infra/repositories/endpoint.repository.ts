import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEndPointRepository } from 'src/main/services/endpoint/repositories/createEndPoint.repository';

@Injectable()
export class EndPointRepository implements CreateEndPointRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async loadByRoute(route: string) {
    const item = await this.prisma.endPoint.findFirst({
      where: {
        route: route,
      },
    });
    return item as IEndPoint;
  }

  public async create(data: IEndPoint) {
    const item = await this.prisma.endPoint.create({
      data: {
        id: data.id!,
        headers: String(data.headers),
        userId: data.userId,
        route: data.route,
      },
    });
    return item as IEndPoint;
  }
}
