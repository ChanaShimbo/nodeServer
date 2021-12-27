const express = require('express');
const furnitureRouter = require('./Routes/furnitureRoutes');
const categoryRouter = require ('./Routes/categoryRoutes');
const colorRouter = require('./Routes/colorRoutes');
const orderItemRouter = require('./Routes/orderItemRoutes');
const db = require('./connection');
const bodyParser=require('body-parser');
const cors=require('cors')


const app =express();

async function startDB(){
    await db.connectToMongo();
 }
 startDB();
 app.use(express.json());
 app.use(bodyParser.json());
 app.use(cors());
 app.use('/api/furniture',furnitureRouter);
 app.use('/api/category',categoryRouter);
 app.use('/api/color',colorRouter);
 app.use('/api/orderItem',orderItemRouter);

 const port = 3030;

app.listen(port, () => {
    console.log("app is running!!!")
})