import Joi from "@hapi/joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email().lowercase(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data)
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email().lowercase(),
    password: Joi.string().required()
  })
  return schema.validate(data)
}

const walletValidation = (data) => {
  const schema = Joi.object({
    coinName: Joi.string().min(1).required().lowercase(),
    coinPrice: Joi.number().min(1).required(),
    coinQuantity: Joi.number().min(1).required(),
  });
  return schema.validate(data);
};

const bankValidation = (data) => {
  const schema = Joi.object({
    balance: Joi.number().min(1).required(),
  });
  return schema.validate(data);
};

export {
  registerValidation,
  loginValidation,
  walletValidation,
  bankValidation,
};
