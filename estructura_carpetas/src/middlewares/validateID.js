// validar que el ID sea un número
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400);
    return res.json({
      error: "el id debe ser un número",
    });
  }
  next();
};

module.exports = { validateId };
