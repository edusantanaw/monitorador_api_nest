import { Inject, Injectable } from '@nestjs/common';
import { SignupDto } from 'src/main/controllers/auth/dto/signup.dto';
import { CreateRepository } from '../repositories/create.repository';
import { AlreadyExistsError } from 'src/main/utils/errors/alreadyExists';
import { UserEntity } from 'src/domain/entities/user.entity';
import { SigninDto } from 'src/main/controllers/auth/dto/signin.dto';

abstract class IUserRepository extends CreateRepository<User, User> {
  loadByEmail: (email: string) => Promise<User | null>;
}

abstract class IGenerateHash {
  genHash: (pass: string) => Promise<string>;
  compare: (pass: string, hashedPass: string) => Promise<boolean>;
}

abstract class ITokenGenerator {
  genToken: (user: Omit<User, 'password'>) => Promise<string>;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject('userRepository')
    private readonly userRepository: IUserRepository,
    @Inject('JwtService')
    private readonly tokenGenerator: ITokenGenerator,
    @Inject('Encrypter')
    private readonly encrypter: IGenerateHash,
  ) {}
  public async signup(data: SignupDto) {
    const emailAlreadyExists = await this.userRepository.loadByEmail(
      data.email,
    );
    if (emailAlreadyExists) throw new AlreadyExistsError('Email');
    const user = new UserEntity(data);
    const hashedPassword = await this.encrypter.genHash(data.password);
    user.setPassword = hashedPassword;
    await this.userRepository.create(user.getUser);
    const { password, ...rest } = user.getUser;
    const token = await this.tokenGenerator.genToken(rest);
    return { user: user.getUser, token };
  }

  public async signin(data: SigninDto) {
    const userExists = await this.userRepository.loadByEmail(data.email);
    if (!userExists) throw new Error('Email/password invalidos!');
    const isPasswordEquals = await this.encrypter.compare(
      data.password,
      userExists.password,
    );
    if (!isPasswordEquals) throw new Error('Email/password invalidos!');
    const { password, ...rest } = userExists;
    const token = await this.tokenGenerator.genToken(rest);
    return {
      user: userExists,
      token,
    };
  }
}
