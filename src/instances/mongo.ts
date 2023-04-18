import {connect,connection} from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const conectMongo = async ()=>{
    try {
        console.log("conectando ao mongoDB...");
        await connect(process.env.MONGO_URL as string,{

        });
        console.log("mongodb conectado com sucesso!")


    } catch(erro) {
        console.log("banco de dados mongodb deu erro", erro)

    }
}