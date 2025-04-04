import express from 'express';

const PORT = process.env.PORT || 3030;

const app = express();

app.get('/',(req,res) =>{
    res.send('Hello')
})



app.listen(PORT,() => console.log(`Server is running on Port ${PORT}.`))