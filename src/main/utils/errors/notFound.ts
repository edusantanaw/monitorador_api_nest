export class NotFoundError extends Error {
  constructor(item: string) {
    super(`${item} não encontrado(a)!`);
  }
}
