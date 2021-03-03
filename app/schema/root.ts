import type { RouteShorthandOptions } from 'fastify';

export const root: RouteShorthandOptions = {
  schema: {
    params: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
        },
      },
    },
  },
};
