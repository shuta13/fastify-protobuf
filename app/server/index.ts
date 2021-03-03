import { sendUnaryData, Server, ServerUnaryCall } from '@grpc/grpc-js';
import { GreeterService } from './protos-gen/helloworld_grpc_pb';
import { HelloReply, HelloRequest } from './protos-gen/helloworld_pb';

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

// (async () => {
//   const server = new Server();
//   server.addService(GreeterService, { sayHello });
//   server.bindAsync()
// })();
