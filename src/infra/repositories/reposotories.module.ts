import { Module } from '@nestjs/common';
import { EndPointRepository } from './endpoint.repository';
import { PrismaService } from '../prisma.service';
import { UserRepository } from './user.repository';

@Module({
  providers: [
    PrismaService,
    { useClass: EndPointRepository, provide: 'endPointRepository' },
    { useClass: UserRepository, provide: 'userRepository' },
  ],
  exports: [
    { useClass: EndPointRepository, provide: 'endPointRepository' },
    { useClass: UserRepository, provide: 'userRepository' },
  ],
})
export class RepositoriesModule {}
