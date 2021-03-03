import Fastify, { FastifyInstance } from 'fastify';
import { rootOpts } from './opts';

const server: FastifyInstance = Fastify({
  logger: true,
});

server.get('/', rootOpts, async (request, reply) =>
  reply.send({
    hello: 'world!',
  })
);

(async () => {
  try {
    await server.listen(3000);

    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;
    server.log.info(`listening on http://localhost:${port}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
})();
