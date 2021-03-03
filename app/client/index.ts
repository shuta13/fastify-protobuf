import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import { routes } from './routes';
import type { IncomingMessage, Server, ServerResponse } from 'http';

const fastify: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = Fastify({
  logger: true,
});

fastify.register(routes);

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err.message);
    process.exit(1);
  }
  fastify.log.info(`fastify listening at ${address}`);
});
