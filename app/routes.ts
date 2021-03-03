import type { FastifyInstance } from 'fastify';
import { root } from './schema';

export const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', root, async (request, reply) =>
    reply.code(200).send({
      message: 'it works!',
    })
  );

  // TODO: protoBuf
  fastify.get('/protobuf', async (request, reply) => {
    reply.code(200).send({
      message: 'WIP',
    });
  });
};
