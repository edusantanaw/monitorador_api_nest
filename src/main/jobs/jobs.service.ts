import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(JobsService.name)
  @Cron("*/5 * * * *",{
    name: "EndPointStatus"
  })
  public async  handleCron() {
    const items = await this.prisma.endPoint.findMany();
    for (const item of items) {
      try {
        await axios.get(item.route, {
          headers: JSON.parse(item.headers ?? '{}'),
        });
        await this.prisma.endPointStatus.create({
          data: {
            id: randomUUID(),
            status: 'online',
            idEndPoint: item.id,
          },    
        });
        this.logger.log(`Status atualizado! ${item.id}`);
      } catch (error) {
        await this.prisma.endPointStatus.create({
          data: {
            id: randomUUID(),
            status: 'offline',
            idEndPoint: item.id,
          },
        });
        this.logger.log(`Status atualizado! ${item.id}`);
      }
    }
  }
}

