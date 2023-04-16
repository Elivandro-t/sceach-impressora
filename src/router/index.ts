import {Router} from "express";
import * as controls from "../constrols/control";
const route = Router();

route.get("/",controls.search);
route.get("/registrar",controls.registre);
route.put("",controls.atualize)
route.delete("",controls.exclui)

route.get("",controls.home)
route.get("",controls.all)
/*
route.get("/",controls.home)
route.get("/",controls.home)
*/


export default route