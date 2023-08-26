type IEndPoint = {
  id?: string;
  route: string;
  userId: string;
  headers?: unknown;
};

type IEndPointStatus = {
  id: string;
  status: 'online' | 'offline';
  createdAt: string;
};
