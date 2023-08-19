export class AlreadyExistsError extends Error {
    constructor(item: string) {
      super(`O(a) ${item} já está registrado(a) no sistema!`);
    }
  }
  