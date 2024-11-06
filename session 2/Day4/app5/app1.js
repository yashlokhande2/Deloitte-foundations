const express = require('express');
const app = express()
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world to express');
});

app.get('/api/users',(req,res)=>{
    const users = [
        {id:1,uname:'vishwas'},
        {id:2,uname:'singh'}
    ]
    res.json(users);
});

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})