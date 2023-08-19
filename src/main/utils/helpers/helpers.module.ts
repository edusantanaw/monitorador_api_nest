import { EncrypterService } from './encrypter.service';
import { JWebTokenService } from './jwt.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    { provide: 'JwtService', useClass: JWebTokenService },
    { provide: 'Encrypter', useClass: EncrypterService },
  ],
  exports: [
    { provide: 'JwtService', useClass: JWebTokenService },
    { provide: 'Encrypter', useClass: EncrypterService },
  ],
})
export class HelpersModule {}
