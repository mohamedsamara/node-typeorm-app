import * as Joi from '@hapi/joi';

export default {
  create: {
    payload: {
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      price: Joi.number().optional()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  }
};
