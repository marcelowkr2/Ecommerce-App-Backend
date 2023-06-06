const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);
const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
    useNewUrlParser: true
    }, console.log("Banco de Dados conectado com sucesso🚀"));
  

  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
