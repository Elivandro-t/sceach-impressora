import {Request,Response} from "express";
import {User} from '../model/user'

export const home = async(req:Request,res:Response)=>{
     
    res.render("pages/forme");
}
export const registre = async(req:Request,res:Response)=>{
     res.render("pages/create")
}
export const atualize = async (req:Request,res:Response)=>{
    res.render("");
}
export const exclui = (req:Request,res:Response)=>{
    res.render("");
}
export const search = async(req:Request,res:Response)=>{ 
      let name = req.query.list
    res.render("pages/forme.mustache");
}
export const all = async(req:Request,res:Response)=>{
    res.render("");
}
