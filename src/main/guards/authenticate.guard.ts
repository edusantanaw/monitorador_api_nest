import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';

const SECRET = process.env.SECRET ?? 'edusantanw';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers.authorization ?? '';
      const [_, token] = authorization.split(' ');
      if (!token) return false;
      verify(token, SECRET);
      return true;
    } catch (error) {
      return false;
    }
  }
}
