import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance = Fastify({});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
          },
        },
      },
    },
  },
};

server.get('/hello', opts, async (request, response) => ({ hello: 'world!' }));

(async () => {
  try {
    await server.listen(3000);

    const address = server.server.address();
    address && server.log.info(`listening on ${address}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
})();
