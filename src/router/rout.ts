import {Router} from "express"
import * as control from "../constrols/control"
const routes= Router();
routes.get("/",control.login)
routes.post("/",control.login)
routes.get("/atualize",control.atualiz)
routes.post("/atualize",control.atualiz)
export default routes