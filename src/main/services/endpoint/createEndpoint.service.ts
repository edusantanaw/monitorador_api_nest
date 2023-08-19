import { Inject, Injectable } from '@nestjs/common';
import { EndPointEntity } from 'src/domain/entities/endpoint.entity';
import { CreateService } from 'src/main/controllers/services/create.service';
import { AlreadyExistsError } from 'src/main/utils/errors/alreadyExists';
import { NotFoundError } from 'src/main/utils/errors/notFound';
import { LoadByIdRepository } from '../repositories/loadById.repository';
import { CreateEndPointRepository } from './repositories/createEndPoint.repository';

@Injectable()
export class CreateEndPointService extends CreateService<IEndPoint, IEndPoint> {
  constructor(
    @Inject('userRepository')
    private readonly userRepository: LoadByIdRepository<User>,
    @Inject('endPointRepository')
    private readonly endPointRepository: CreateEndPointRepository,
  ) {
    super();
  }
  public async execute(data: IEndPoint) {
    const userExists = await this.userRepository.loadById(data.userId);
    if (!userExists) throw new NotFoundError('Usuario');
    const endPointAlreadyRegisterd = await this.endPointRepository.loadByRoute(
      data.route,
    );
    if (endPointAlreadyRegisterd) throw new AlreadyExistsError('Rota');
    const newRoute = new EndPointEntity(data);
    await this.endPointRepository.create(newRoute.getEndPoint);
    return newRoute.getEndPoint;
  }
}
