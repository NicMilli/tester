const express = require('express');

const app = express();

app.use(express.json({ limit: '25mb' }));

app.post('/payments', (req, res) => {
  console.log('req: ', req);
  console.log('req.body: ', req?.body);

  res.sendStatus(201);
});

app.get('/', (req, res) => res.status(200).send('Hello'))

app.listen(8081);