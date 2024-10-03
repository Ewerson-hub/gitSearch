import express from "express";
import router from "./public/routes.js"
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`)
})
