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



function test(arr){
  let result = true; 
  if (arr == null)  result = false;
  if (arr.length == 1 && arr[0]=='')  result = false;
  if (arr.length > 3) result=false;

  arr.forEach((text) => {if (/[^а-яА-ЯёЁa-zA-Zó]+/.test(text)) result = false});

  return result;
}

app.get('/HW1_2B', (req, res) => {
  try {
    const fio = req.query.fullname;


    let fioMatch = fio.split(/[\ ]+/);
    console.log(fioMatch);
    if (!test(fioMatch)) throw(1);

    let result = fioMatch[fioMatch.length-1];
    console.log(fioMatch);

    if (fioMatch.length>1) {
      fioMatch.forEach((text, i) => {
        console.log(text+" "+i);
      if (i<(fioMatch.length-1)) result = result + " "+ text[0]+".";
      });
    }

    return res.send(result);
  }
  catch (err) {
    return res.send("Invalid fullname");
  }
});


function getuser (url){

  const re = new RegExp('@?(https?:)?(\/\/)?((www\.)?)((medium|xn--80adtgbbrh1bc.xn--p1ai|github|twitter|telegram|vk)[^\/]*\/)?([@a-zA-Z0-9\.\_]*)','i');
  const username = url.match(re);

  let resultt = username[7];

  if  (resultt[0]!='@') resultt = '@'+resultt; 

  return resultt;
}

function testUrl (url){
 
 let result = true; 
  if (url == null) result = false; 
  return result;
}

app.get('/HW1_2C', (req, res) => {
  try {
    const userhttp = req.query.username;

    return res.send(getuser(userhttp));

  }
  catch (err) {
    return res.send("Invalid username");
  }
});



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
