import Fastify from 'fastify';
import { routes } from './routes';

const server = Fastify({
  logger: true,
});

server.register(routes);

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err.message);
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});
