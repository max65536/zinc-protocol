import express from 'express';
import bodyParser from 'body-parser';
import {all_process} from './all_process'

import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/userinfo', async (req, res) => {
  console.log(req.body);
  const data = req.body
  res.send('Data received!');
  await all_process(data['sequence'], data['userAddress'], data['amount']);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


