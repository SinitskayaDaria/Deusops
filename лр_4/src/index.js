const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .center-text {
            font-size: 32px;
            font-weight: bold;
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="center-text">Синицкая Дарья, гр. 3343, ЛЭТИ</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
