require('dotenv').config();

const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./src/middlewares/errorHandler");
const app = express();
const PORT = 3333;
const authRouter = require("./src/routes/authRoute");
const productRouter = require("./src/routes/productRoute");
const categoryRouter = require("./src/routes/prodcategoryRoute");
const brandRouter = require("./src/routes/brandRoute");
const colorRouter = require("./src/routes/colorRoute");
const couponRouter = require("./src/routes/couponRoute");
const uploadRouter = require("./src/routes/uploadRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/user", authRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/brand", brandRouter);
app.use("/coupon", couponRouter);
app.use("/color", colorRouter);
app.use("/upload", uploadRouter);

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server iniciado na PORTA ${PORT}😁👍`);
});
