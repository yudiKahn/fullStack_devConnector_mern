const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }))

app.use('/api/users', require('./routs/users'));
app.use('/api/auth', require('./routs/auth'));
app.use('/api/profile', require('./routs/profile'));
app.use('/api/posts', require('./routs/posts'));

const listener = app.listen(process.env.PORT||8000, ()=>{
    console.log(`Listening on port ${listener.address().port}`)
})

