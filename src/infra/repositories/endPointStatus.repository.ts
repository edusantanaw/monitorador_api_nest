import { Injectable } from '@nestjs/common';
import { EndPointStatus } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EndPointStatusRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async loadByUserId(userId: string) {
    const items = (await this.prisma.$queryRaw`
           SELECT "EndPointStatus".* FROM "EndPointStatus" 
           INNER JOIN "EndPoint" ON "EndPoint".id = "EndPointStatus"."idEndPoint"
           WHERE "userId" = ${userId}
        `) as EndPointStatus[];
    return items;
  }
}
