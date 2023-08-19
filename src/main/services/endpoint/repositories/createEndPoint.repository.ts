import { CreateRepository } from "../../repositories/create.repository";

export abstract class CreateEndPointRepository extends CreateRepository<IEndPoint, IEndPoint> {
    abstract loadByRoute(route: string): Promise<IEndPoint | null>
}