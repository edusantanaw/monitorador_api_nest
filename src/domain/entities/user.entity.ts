import { randomUUID } from 'node:crypto';

type data = {
    id?: string;
    name: string;
    email: string;
    password: string;
  };
  
  
export class UserEntity {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
  }

  public set setPassword(newPass: string) {
    this.password = newPass;
  }

  public get getUser(): User {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      password: this.password,
    };
  }
}
