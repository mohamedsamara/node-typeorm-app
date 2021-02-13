import * as Joi from '@hapi/joi';

export default {
  create: {
    payload: {
      name: Joi.string().optional()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  },
  updateById: {
    params: {
      id: Joi.string().required()
    }
  },
  deleteById: {
    params: {
      id: Joi.string().required()
    }
  }
};
