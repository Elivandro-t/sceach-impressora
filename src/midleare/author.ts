import {Request,Response,NextFunction} from 'express';
import mongoose from "../model/users"
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from '../model/user';
dotenv.config();
export const auth = {
    private:async(req:Request,res:Response,next:NextFunction)=>{
        //fazendo verificacao de login
            //descriptografar
            let pross = false
            if(req.body){
                const user= req.body.listal
               let password = req.body.lista
               const use = await User.findOne(user)
               console.log("senha",use)
               if(use){
                   try{
                      JWT.verify(
                        password,
                        user
                      );
                   }catch(err){

                   }
               };

        if(use){
            next();
            
        }else{
            res.status(403); //not autorized
            res.json({erro:"não autorido"});
        }
                
               }

                /*
                let altent:string = req.headers.authorization.substring(6);
                
            let decode:string = Buffer.from(altent, 'base64').toString();
            //retorna um array
             let datas:string[] = decode.split(":");//fzendo separacao de dados
             console.log(datas)
             if(datas.length === 2){
                 let hesuser = await User.findOne({
                    where:{email:datas[0],password:datas[1]}
                 });
                 if(hesuser){
                    sucess=true;
                 }
             }
             */
    }     
}