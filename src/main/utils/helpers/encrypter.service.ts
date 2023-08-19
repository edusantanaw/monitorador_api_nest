import { hash, genSalt, compare as comparePassword } from 'bcrypt';

export class EncrypterService {
  private readonly saltRounds = 10;
  public async genHash(pass: string) {
    const salt = await genSalt(this.saltRounds);
    const hashedPassword = await hash(pass, salt);
    return hashedPassword;
  }

  public async compare(pass: string, hashedPass: string) {
    const isEquals = await comparePassword(pass, hashedPass);
    return isEquals;
  }
}
