import { credentials } from '@grpc/grpc-js';
import { grpcClientOptions, SERVER_PORT } from '../../config';
import { GreeterClient } from '../../types/proto/helloworld_grpc_pb';
import { HelloRequest } from '../../types/proto/helloworld_pb';
import { SayHelloParams } from './types';

const serverUrl = `localhost:${SERVER_PORT}`;

export const sayHello = ({ name = 'World' }: SayHelloParams) => {
  const request = new HelloRequest();
  const client = new GreeterClient(
    serverUrl,
    credentials.createInsecure(),
    grpcClientOptions
  );
  request.setName(name);

  return async () => {
    client.sayHello(request, (error, response) => {
      if (error) throw new Error(error.message);
      return response?.toObject();
    });
  };
};
