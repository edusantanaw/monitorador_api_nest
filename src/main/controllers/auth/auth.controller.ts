import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

abstract class IAuthService {
  signup: (
    data: SignupDto,
  ) => Promise<{ user: Omit<User, 'password'>; token: string }>;
  signin: (
    data: SigninDto,
  ) => Promise<{ user: Omit<User, 'password'>; token: string }>;
}

@Controller('/api')
export class AuthController {
  constructor(
    @Inject('AuthService')
    private readonly authService: IAuthService,
  ) {}
  @Post('/signup')
  public async signup(@Body() data: SignupDto) {
    try {
      const authResponse = await this.authService.signup(data);
      return authResponse;
    } catch (error) {
      const { message } = error as Error;
      throw new HttpException(message, 400);
    }
  }

  @Post('/signin')
  public async signin(@Body() data: SigninDto) {
    try {
      const authResponse = await this.authService.signin(data);
      return authResponse;
    } catch (error) {
      const { message } = error as Error;
      throw new HttpException(message, 400);
    }
  }
}
