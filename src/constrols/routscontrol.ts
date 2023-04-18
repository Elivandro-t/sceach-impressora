import console from 'console';
import {Request,Response} from 'express';
import mongoose from "../model/users";
export const home = async(req:Request,res:Response)=>{
    res.render("pages/home",{
    })
}

export const registre = async(req:Request,res:Response)=>{
    
    if(req.query.code&&req.query.code&&req.query.ip){
        let {cidade,rua,impressora,code,ip,modelo,status} = req.query;
        let use = await mongoose.findOne({
            rua,code,impressora,ip,
        })
        if(!use){
             await mongoose.create({
                cidade,
                rua,
                impressora,
                code,
                ip,
                modelo,
                status
    
            }
            );
        }else{
              console.log("impressora ja está criada")
              return res.redirect("/registrar")
        }
        console.log("nada enviado")
     }

    /*
    let cyt= req.query.cidade;
    let ru = req.query.rua;
    let imp = req.query.impressora;
    let code = req.query.code;
    let ip = req.query.ip;
    let model = req.query.modelo;
    let statu = req.query.status;
    const use = await mongoose.create({
        cidade:cyt,
        rua:ru,
        impressora:imp,
        code:code,
        ip:ip,
        modelo:model,
        status:statu

    });
    res.render("pages/create",{
      use
    })
    */
    res.render("pages/create"
    )
    return;
}
export const search = async (req:Request, res:Response)=>{
    let nane = req.query.list;
    
    let use = await mongoose.findOne({
      code:nane
})
console.log(use)
    res.render("pages/search",{
        use
    }
    )
}
export const excluir = async(req:Request,res:Response)=>{
    let id: string = req.params.id;
    const result = await mongoose.findByIdAndDelete({id});
    
    res.redirect("/");
};
export const atualize = async(req:Request,res:Response)=>{
    let li = req.query.lis
    console.log(li)
    const use = await mongoose.findOneAndUpdate(
        {
            code:li
        }
    )
    res.render("pages/update",{
        use
    })
}
export const exclui = async(req:Request,res:Response)=>{
    res.render("pages/home",{
    })
}