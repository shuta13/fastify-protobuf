import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import { routes } from './routes';
import type { IncomingMessage, Server, ServerResponse } from 'http';
import { CLIENT_PORT } from '../config';

const fastify: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = Fastify({
  logger: true,
});

fastify.register(routes);

fastify.listen(CLIENT_PORT, (error, address) => {
  if (error) {
    fastify.log.error(error.message);
    process.exit(1);
  }
  fastify.log.info(`fastify listening at ${address}`);
});
