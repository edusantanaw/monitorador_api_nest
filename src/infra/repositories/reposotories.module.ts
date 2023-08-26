import { Module } from '@nestjs/common';
import { EndPointRepository } from './endpoint.repository';
import { PrismaService } from '../prisma.service';
import { UserRepository } from './user.repository';
import { EndPointStatusRepository } from './EndPointStatus.repository';

@Module({
  providers: [
    PrismaService,
    { useClass: EndPointRepository, provide: 'endPointRepository' },
    { useClass: UserRepository, provide: 'userRepository' },
    {useClass: EndPointStatusRepository, provide: "endPointStatusRepository"}
  ],
  exports: [
    { useClass: EndPointRepository, provide: 'endPointRepository' },
    { useClass: UserRepository, provide: 'userRepository' },
    {useClass: EndPointStatusRepository, provide: "endPointStatusRepository"}
  ],
})
export class RepositoriesModule {}
