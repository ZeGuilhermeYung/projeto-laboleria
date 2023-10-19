function validateSchema (schema) {
  return (req, res, next) => {
    const validation = schema.validate (
      req.body,
      { abortEarly: false }
    );
    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      console.log(errors);
      return res.status(422).send(errors);
    }
    res.locals.body = req.body;
    next();
  };
};

export default validateSchema;