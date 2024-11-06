const express = require('express');
const mongoose = require('mongoose')
const app = express()

const PORT = 3000;

app.use(express.json());

//MongoDB connection
const mongoURI = 'mongodb+srv://yashlokhande2:yashL%4016@cluster0.c1wuc.mongodb.net/testDB?retrywrites=true&w=majority'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Mongodb connected.....'))
        .catch(err=> console.log(err));

app.get('/',(req,res)=>{
    res.send('Connected to MongoDB');
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