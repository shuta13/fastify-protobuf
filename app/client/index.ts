import Fastify from 'fastify';
import { routes } from './route';
import { CLIENT_PORT } from '../config';

const fastify = Fastify({
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
