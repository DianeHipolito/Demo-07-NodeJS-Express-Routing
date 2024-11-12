const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (request, response) => {
    //response.status(200).json({ message: 'API Homepage' });
    response.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API Homepage</title>
          <!-- Google Fonts - Roboto -->
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Roboto', sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 90vh;
              margin: 0;
              background-color: #f4f4f4;
            }
  
            .content {
              text-align: center;
              color: #333;
            }
  
            h1 {
              font-size: 3rem;
              margin-bottom: 10px;
            }
  
            h4 {
              font-size: 1.5rem;
              font-weight: 400;
            }
          </style>
        </head>
        <body>
          <div class="content">
            <h1>API Homepage</h1>
            <h4>Hipolito, Diana Lei E.</h4>
          </div>
        </body>
      </html>
    `);
});

const customerRouter = require("./routes/customers");
app.use("/customers", customerRouter);

const orderRouter = require("./routes/orders");
app.use("/orders", orderRouter);

const paymentRouter = require("./routes/payments");
app.use("/payments", paymentRouter);