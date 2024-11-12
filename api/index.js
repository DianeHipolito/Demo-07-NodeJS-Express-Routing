const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (request, response) => {
    //response.status(200).json({ message: 'API Homepage' });
    response.send('<h1>API Homepage</h1>');
});

const customerRouter = require("./routes/customers");
app.use("/customers", customerRouter);

const orderRouter = require("./routes/orders");
app.use("/orders", orderRouter);

const paymentRouter = require("./routes/payments");
app.use("/payments", paymentRouter);