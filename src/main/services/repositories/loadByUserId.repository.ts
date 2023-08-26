export abstract class ILoadByUserRepository<T> {
  abstract loadByUserId(userId: string): Promise<T[]>;
}
