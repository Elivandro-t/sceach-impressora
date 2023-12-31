import {Request,Response} from 'express';
import mongoose from "../model/users";
export const home = (req:Request,res:Response)=>{
    res.render("pages/home",{
    })
}

export const registre = async(req:Request,res:Response)=>{
    if(req.body.code&&req.body.code&&req.body.ip&&req.body.ip){
        let erro = "criada com sucesso!"
        let code = req.body.code;
        const use = await mongoose.findOne({
            code
        })
        let errou = "impressora já existe"
        if(!use){
            let {cidade,rua,impressora,code,ip,modelo,status} = req.body;
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
             res.render("pages/erro",{
                errou
            })
           return;
        }
        res.render("pages/erro",{
            erro
        })
        return
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
   res.render("pages/create")
    return;
}
export const search = async (req:Request, res:Response)=>{
    let code = req.body.list;
    
    let use = await mongoose.findOne({
      code
})
console.log(use)
    res.render("pages/search",{
        use
    }
    )
}
export const excluir = async(req:Request,res:Response)=>{
    let id  = req.params.code
    console.log("meu codigo",id)
    await mongoose.findOneAndDelete({id});
    
};
export const atualize = async(req:Request,res:Response)=>{

    let nane = req.body.lis;
    const use = await mongoose.findOne({
         code:nane
        })
        if(use===use){
            let {cidade,rua,impressora,code,ip,modelo,status} = req.body;
            await mongoose.updateMany(
                {cidade,rua,impressora,code,ip,modelo,status}
            )
            res.render("pages/update",{
                use
            });
            return

        }
        
}
export const exclui = async(req:Request,res:Response)=>{
}
export const bal = async(req:Request,res:Response)=>{
    res.render("pages/balanca",{
    })
}
