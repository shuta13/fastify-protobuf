import { credentials } from '@grpc/grpc-js';
import { rejects } from 'assert';
import { resolve } from 'path';
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

  return new Promise((resolve, reject) => {
    client.sayHello(request, (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error.code,
          message: error.message,
        });
      }

      return resolve(response?.toObject());
    });
  });
};
