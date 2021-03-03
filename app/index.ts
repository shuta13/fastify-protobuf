import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import { routes } from './routes';
import type { IncomingMessage, Server, ServerResponse } from 'http';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = Fastify({
  logger: true,
});

server.register(routes);

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err.message);
    process.exit(1);
  }
  server.log.info(`server listening at ${address}`);
});
