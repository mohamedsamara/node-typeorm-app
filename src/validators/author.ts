import Joi from 'Joi';

export default {
  create: {
    payload: Joi.object({
      name: Joi.string().optional()
    })
  },
  getById: {
    params: Joi.object({
      id: Joi.string().required()
    })
  },
  updateById: {
    params: Joi.object({
      id: Joi.string().required()
    })
  },
  deleteById: {
    params: Joi.object({
      id: Joi.string().required()
    })
  }
};
