const { check } = require("express-validator");
const { validatorResult } = require("./validation-result");

const validationText = [
  check("text")
    .isString()
    .withMessage("Text must be a string")
    .trim()
    .notEmpty()
    .withMessage("Text cannot be empty"),

  validatorResult(),
];

module.exports = {
  validationText,
};
