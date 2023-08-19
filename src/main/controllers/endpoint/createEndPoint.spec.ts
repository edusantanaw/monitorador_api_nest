// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateEndPointController } from './createEndpoint.controller';
// import { CreateService } from '../services/create.service';

// class CreateEndPointServiceMock implements CreateService<IEndPoint, IEndPoint> {
//   error: boolean = false;
//   async execute(data: IEndPoint): Promise<IEndPoint> {
//     if (this.error) throw new Error('Method not implemented.');
//     return data;
//   }
// }

// describe('CreateEndPointController', () => {
//   let appController: CreateEndPointController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [CreateEndPointController],
//       providers: [
//         {
//           useClass: CreateEndPointServiceMock,
//           provide: 'CreateEndPointService',
//         },
//       ],
//     }).compile();

//     appController = app.get<CreateEndPointController>(CreateEndPointController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       const response = appController.handle({ route: 'test', userId: 'test' });
//       console.log(response);
//       expect(response).rejects.toBe({rou});
//     });
//   });
// });
