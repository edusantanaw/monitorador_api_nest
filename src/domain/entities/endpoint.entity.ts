import { randomUUID } from 'node:crypto';

export class EndPointEntity {
  private id: string;
  private route: string;
  private userId: string;
  private headers: string;

  constructor(data: IEndPoint) {
    this.id = data.id ?? randomUUID();
    this.route = data.route;
    this.userId = data.userId;
    this.headers = JSON.stringify(data.headers);
  }

  public get getEndPoint() {
    return {
      id: this.id,
      route: this.route,
      userId: this.userId,
      headers: this.headers,
    };
  }
}
