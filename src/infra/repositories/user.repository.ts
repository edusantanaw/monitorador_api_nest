import { Injectable } from '@nestjs/common';
import { LoadByIdRepository } from 'src/main/services/repositories/loadById.repository';
import { PrismaService } from '../prisma.service';
import { CreateRepository } from 'src/main/services/repositories/create.repository';

@Injectable()
export class UserRepository
  implements LoadByIdRepository<User>, CreateRepository<User, User>
{
  constructor(private readonly prisma: PrismaService) {}

  public async loadById(id: string) {
    const item = await this.prisma.users.findFirst({
      where: {
        id,
      },
    });
    return item as User;
  }
  
  public async loadByEmail(email: string) {
    const item = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    return item as User;
  }

  public async create(data: User) {
    const item = await this.prisma.users.create({ data });
    return item as User;
  }
}
