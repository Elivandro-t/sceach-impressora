import {Router} from "express";
import * as controls from "../constrols/routscontrol";
const route = Router();

route.get("/search",controls.search);
route.get("/registrar",controls.registre);
route.get("/update",controls.atualize)
route.delete("",controls.exclui)
route.get("/",controls.home)
/*
route.get("/")
*/


export default route