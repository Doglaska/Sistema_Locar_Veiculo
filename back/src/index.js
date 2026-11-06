require("dotenv/config");
const cors = require("cors");
const express = require("express")
const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());

app.use((req, res, next)=>{
    console.log("Executando antes das rotas");
    next();
});

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});