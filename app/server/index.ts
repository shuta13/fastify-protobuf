import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js';
import { SERVER_PORT } from '../config';
import { GreeterService } from '../types/proto/helloworld_grpc_pb';
import { HelloReply, HelloRequest } from '../types/proto/helloworld_pb';

const sayHello = (
  call: ServerUnaryCall<HelloRequest, HelloReply>,
  callback: sendUnaryData<HelloReply>
) => {
  const greeter = new HelloReply();
  const name = call.request.getName();
  const message = `Hello ${name}`;

  greeter.setMessage(message);
  callback(null, greeter);
};

(() => {
  const server = new Server();
  server.addService(GreeterService, { sayHello });
  server.bindAsync(
    `0.0.0.0:${SERVER_PORT}`,
    ServerCredentials.createInsecure(),
    (error, SERVER_PORT) => {
      if (error) {
        console.error(error);
      }

      server.start();
      console.log(`server listening at http://localhost:${SERVER_PORT}`);
    }
  );
})();
