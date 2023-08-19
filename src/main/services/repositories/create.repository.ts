export abstract class CreateRepository<In, Out> {
  abstract create(data: In): Promise<Out>;
}
