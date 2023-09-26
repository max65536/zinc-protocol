import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

// 使用 body-parser 中间件来解析 JSON 请求体
app.use(bodyParser.json());

app.post('/userinfo', (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.send('Data received!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


