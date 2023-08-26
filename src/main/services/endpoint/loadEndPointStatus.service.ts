import { Inject, Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/main/utils/errors/notFound';
import { ILoadByUserRepository } from '../repositories/loadByUserId.repository';
import { LoadByIdRepository } from '../repositories/loadById.repository';

@Injectable()
export class LoadEndPointStatusService {
  constructor(
    @Inject('userRepository')
    private readonly userRepository: LoadByIdRepository<User>,
    @Inject('endPointStatusRepository')
    private readonly endPointRepository: ILoadByUserRepository<IEndPointStatus>,
  ) {}

  public async execute(userId: string) {
    const verifyIsIdValid = await this.userRepository.loadById(userId);
    if (!verifyIsIdValid) throw new NotFoundError('Usuario');
    const endPointStatus = await this.endPointRepository.loadByUserId(userId);
    return endPointStatus;
  }
}
