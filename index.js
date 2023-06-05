import express from 'express';
import Connection from './Database/conn.js';
import routes from './Routes/route.js';
import cors from 'cors';
const app=express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',routes);
const PORT =9000;
Connection();
app.listen(PORT,()=>{
    console.log(`Server is started on PORT ${PORT}`)
})