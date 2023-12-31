import { Router } from "express";
import * as control from "../constrols/api";
import * as controls from "../constrols/routscontrol";
import * as validator from "../validator/Authvalidator";
const route = Router();
route.get("/",controls.home);
route.post("/",controls.home);

route.get("/search",controls.search);
route.post("/search",controls.search);
//mostar registro
route.get("/registrar",controls.registre);
route.post("/registrar",controls.registre);

route.get("/update",controls.atualize);
route.post("/update",controls.atualize);

route.get("/signup",validator.singnup,controls.signup);
route.post("/signup",validator.singnup,controls.signup);

route.get("/balancas",controls.bal);
route.post("/balancas",controls.bal);

route.get("/registre-se",controls.balan);
route.post("/registre-se",controls.balan);


route.post("/search/:id",controls.excluir);
route.get("/excluir");

route.get("/searchs",control.search_ba);;
route.post("/searchs",control.search_ba);
route.get("/Scan",controls.balanca_scan);
route.post("/Scan",controls.balanca_scan);

route.get("/sech",control.colect);
route.post("/sech",control.colect);

export default route;