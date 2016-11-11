import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function checkToNum(a){
  let s = a;
  if (isNaN(s)) s = 0;
  return (+s);
}

function sumAB(a=0,b=0){
return (checkToNum(a))+(checkToNum(b));
}

app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/HW1_2A', (req, res) => {
  const sum = sumAB(req.query.a, req.query.b);
  
  res.send(sum.toString());
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
