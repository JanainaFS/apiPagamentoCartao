const express = require('express');
const cors = require('cors');

const brandsRoutes = require('./src/routes/brands.routes');
const operatorsRoutes = require('./src/routes/operators.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/ws-brands/v1/', brandsRoutes);
app.use('/ws-operators/v1/', operatorsRoutes);

app.listen(3333, () => {
  console.log(`Servidor rodando na porta 3333`);
});