const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("Este id não é válido ou não foi encontrado");
};
module.exports = validateMongoDbId;
