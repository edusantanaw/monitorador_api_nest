import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const SECRET = process.env.SECRET ?? 'edusantanw';

@Injectable()
export class JWebTokenService {
  private readonly jwt = new JwtService();
  public async genToken(data: Omit<User, 'password'>) {
    const token = new Promise((resolve) => {
      const tk = this.jwt.sign(data, {
        secret: SECRET,
        expiresIn: 5000,
      });
      resolve(tk);
    }) as Promise<string>;
    return token;
  }
}
