import Express ,{Request,Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from "path";
import router from './router/index';
import routers from './router/rout';
import {conectMongo} from './instances/mongo';
import cors from "cors"
dotenv.config();
conectMongo();
const server = Express();
server.use(cors({
    origin:'*'
}))
//permissoes as pasta via mustache
server.set("view engine", "mustache");
server.set("views",path.join(__dirname,"views"));
server.engine("mustache", mustache());
server.use(Express.static(path.join(__dirname,"../public")));
server.use(Express.urlencoded({extended:true}));
//rotas
server.use(router);
server.use(routers);
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