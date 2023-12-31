import { useContext, useEffect, useState } from "react"
import "./main.css"
import {context } from "../menu/context"
import { TelaMenu } from "../../areaColetor/TelaMenu"
import { DadosLista } from "../../areaColetor/lista"
import { AreaHome } from "./areaHome/paginaHome"
export const MainArea = ()=>{
    const ShowAlert = useContext(context)

    return(
        <div className="main-area">
            <div className="container-main">
                {ShowAlert?.areahome&&<AreaHome/>}
                   {ShowAlert?.show&&
                        <TelaMenu/>
                   }
                   {ShowAlert?.coletor&&
                        <DadosLista/>
                   }
                
                
            </div>
        </div>
    )
}