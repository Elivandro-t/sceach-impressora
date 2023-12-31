import { useState } from "react"
import { Chamado } from "./Inputs/chamados"
import { Menubotton } from "./menu_botton/menubotton"
import "./telaMenu.css"
import { ListaRecebidos } from "./lista-recebidos/lista-recebidos"
import { Lista } from "./area-principa-lista/Lista"


export const TelaMenu = ()=>{
  const [show1,setshow1] = useState(true)
  const hendle1 = ()=>{
    setshow1(true)
    setshow2(false)
    setshow3(false)
  }
  const [show2,setshow2] = useState(false)
  const hendle2 = ()=>{
    setshow2(true)
    setshow3(false)
    setshow1(false)

  }
  const [show3,setshow3] = useState(false)
  const hendle3 = ()=>{
    setshow3(true)
    setshow2(false)
    setshow1(false)
  }
     
    return(
        <div className="tela-menu">
               <div className="registro">
                  <div className="logos">
                    <h4 className="h4">IBM system</h4>
                    <p className="p">
                    </p>
                  </div>
                  <Menubotton hendl1={hendle1} hendl2={hendle2} hendl3={hendle3}/>
               </div>
               <div className="tela-main_registro">
                  {show1&&<Chamado/>}
                  {show2&&<Lista/>}
                  {show3&&<ListaRecebidos/>}
               </div>
        </div>
    )
}