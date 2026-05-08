const Joi = require("joi");

const validateCategory = (data) => {

  const schema = Joi.object({

    moduleType: Joi.string()
      .valid("Loan Register", "Receivable Register")
      .required(),

    categoryName: Joi.string().required(),

    subCategory: Joi.string().allow("", null),

    subSub1Category: Joi.string().allow("", null),

    sub2Category: Joi.string().allow("", null),

    subSub2Category: Joi.string().allow("", null),
  });

  const { error } = schema.validate(data);

  return error ? error.details[0].message : null;
};

module.exports = validateCategory;