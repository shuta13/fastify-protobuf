import type { FastifyInstance } from 'fastify';
import { sayHello } from '../controller';
import { hello, root } from '../schema';
import { HelloQuery } from './types';

export const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', root, async (request, reply) =>
    reply.code(200).send({
      message: 'it works!',
    })
  );

  // TODO: protoBuf
  fastify.get<{ Querystring: HelloQuery }>(
    '/hello',
    hello,
    async (request, reply) => {
      const { name } = request.query;

      try {
        const result = await sayHello({ name });
        reply.code(200).send({ result });
      } catch (error) {
        reply.code(500).send({ error });
      }
    }
  );
};
