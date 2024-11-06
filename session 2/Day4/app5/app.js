const express = require('express');
const app = express()
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world to express');
});

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})