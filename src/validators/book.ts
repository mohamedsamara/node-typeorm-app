import Joi from 'Joi';

export default {
  create: {
    payload: Joi.object({
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      price: Joi.number().optional()
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
