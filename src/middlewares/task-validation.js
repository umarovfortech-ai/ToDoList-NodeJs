const { check, validationResult } = require("express-validator");

const validationText = [
  check("text")
    .isString()
    .withMessage("Text must be a string")
    .trim()
    .notEmpty()
    .withMessage("Text cannot be empty"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = {
  validationText,
};
