const Joi = require("joi");

const validateStage = (data) => {

  const schema = Joi.object({

    moduleType: Joi.string()
      .valid("Loan Register", "Receivable Register")
      .required(),

    stageName: Joi.string().required(),

    definitionMethod: Joi.string()
      .valid("DPD", "Manual")
      .required(),

    rangeType: Joi.string().allow("", null),

    startDay: Joi.number().allow(null),

    endDay: Joi.number().allow(null),
  });

  const { error } = schema.validate(data);

  return error ? error.details[0].message : null;
};

module.exports = validateStage;