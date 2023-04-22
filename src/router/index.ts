import {Router} from "express";
import * as controls from "../constrols/routscontrol";
import {auth} from '../midleare/author'
const route = Router();


route.get("/search",auth.private,controls.search);
route.post("/search",auth.private,controls.search);
//mostar registro
route.get("/registrar",auth.private,controls.registre);
route.post("/registrar",auth.private,controls.registre);

route.get("/update",auth.private,controls.atualize)
route.post("/update",auth.private,controls.atualize)

route.delete("",controls.exclui)
route.get("/home",auth.private,controls.home)
route.post("/home",auth.private,controls.home)

route.get("/balancas",controls.bal)
route.post("/balancas",controls.bal)

route.post("/search/:id",controls.excluir)
route.get("/excluir")


export default route