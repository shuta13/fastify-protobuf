import type { FastifyInstance } from 'fastify';
import { sayHello } from './controller';
import { root } from './schemas';

export const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', root, async (request, reply) =>
    reply.code(200).send({
      message: 'it works!',
    })
  );

  // TODO: protoBuf
  fastify.get('/hello', async (request, reply) => {
    const { name } = request.query;

    try {
      const result = await sayHello({ name });
      reply.code(200).send({ result });
    } catch (error) {
      reply.code(500).send({ error });
    }
  });
};
