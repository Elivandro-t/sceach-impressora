import express ,{Request,Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from "path";
import router from './router/index';
import {conectMongo} from './instances/mongo';
dotenv.config();
conectMongo();
const server = express();
//permissoes as pasta via mustache
server.set("view engine", "mustache");
server.set("views",path.join(__dirname,"views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname,"../public")));
server.use(express.urlencoded({extended: true}));
//rotas
server.use(router);
server.use((req: Request, res: Response)=>{
    res.status(404).send("PAGINA NÃO ENCONTRADA")
});
//porta server
server.listen(process.env.PORT,()=>{
    try {
        console.log("servidor rodando");
    }catch(erro){
        console.log("servidor off",erro);

    }
});