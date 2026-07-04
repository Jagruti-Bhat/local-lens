import Joi from "joi";

export const createTripSchema = Joi.object({
  destination: Joi.string().trim().required(),

  days: Joi.number().integer().min(1).max(30).required(),

  budget: Joi.number().positive().required(),

  interests: Joi.array().items(Joi.string()).min(1).required(),
});
