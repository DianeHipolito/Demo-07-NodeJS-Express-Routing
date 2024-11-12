const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const customerRouter = require("./routes/customers");
app.use("/customers", customerRouter);

const orderRouter = require("./routes/orders");
app.use("/orders", orderRouter);

const paymentRouter = require("./routes/payments");
app.use("/payments", paymentRouter);