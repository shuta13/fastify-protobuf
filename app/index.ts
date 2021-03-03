import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance = Fastify({
  logger: true,
});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
          },
          reply: {
            type: 'object',
          },
        },
      },
    },
  },
};

server.get('/', opts, async (request, reply) =>
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
