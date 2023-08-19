export abstract class CreateService<In, Out> {
  abstract execute(data: In): Promise<Out>;
}
