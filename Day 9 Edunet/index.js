const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', (req, res) => {
  res.send("Hello user")
});

app.get('/student', (req, res) => {
  res.send('Hello Student! good morning')
});


app.get('/error', (req, res) => {
  res.sendStatus(402);//for giving the erro
});

app.get('/download', (req, res) => {
  res.download("index.js")
});

app.get('/json', (req, res) => {
  res.json({
    "id": 1,
    "title": "Shubham Bhau Vishnu Palde",
    "price": 10000000000000000,
    "description": "ekach vada Shubham dada",
    "category": "Shubham bhai ch brand ahe",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  })
});


app.post("/signup",(req,res)=>{
  const username=req.body.username;
  const email=req.body.email;
  const phone = req.body.phone;
  res.send( `user ${username} created `);
  res.send("Data received");

});

app.post("/signin",(req,res)=>{
  res.send("user created")

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})