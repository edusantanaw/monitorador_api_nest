export abstract class LoadByIdRepository<T> {
  abstract loadById(id: string): Promise<T | null>;
}
