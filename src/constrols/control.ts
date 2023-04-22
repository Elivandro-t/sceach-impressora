import {Request,Response} from "express";
import {User} from '../model/user';
import JWT from "jsonwebtoken"
import { json } from "sequelize";
export const login = async(req:Request,res:Response)=>{
        if(req.body.listal&&req.body.lista){
            let user = req.body.listal
            let password = req.body.lista
            let hasuser = await User.findOne({where:{user,password}});
            if(!hasuser){
                 JWT.sign(
                    {user:user.user,password:user.user},
                    process.env.JWTKEY_VER as string,
                )
            }else{
                console.log("enviada pra car")
            }
         }
         res.render("pages/userTela",{
        })
    
};


export const atualiz = async (req:Request,res:Response)=>{
    let uses = req.body.listal;
    let password = req.body.lista;
    const us = await User.findOne({
        where:{user:uses}
    });
    if(!us){
        await User.create({user:uses,password});
    }
    res.render("pages/new");
};
/*
export const exclui = (req:Request,res:Response)=>{
    res.render("");
}
//pesquisa de dados
export const search = async(req:Request,res:Response)=>{ 
    res.render("pages/search",{
    });
    return;
};
*/