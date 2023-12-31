import { useState } from "react"
import "./index.css"
type os = {
    hendl1:()=>void
    hendl2:()=>void
    hendl3:()=>void
}
export const Menubotton = ({hendl1,hendl2,hendl3}:os)=>{
    const [cheked,setchecked] = useState(true)
    const [cheked2,setchecked2] = useState(false)
    const [cheked3,setchecked3] = useState(false)
    const hendle = ()=>{
        setchecked(true)
        setchecked2(false)
        setchecked3(false)
        
    }
    const hendle2 = ()=>{
        setchecked(false)
       
        setchecked2(true)
        setchecked3(false)
    }
    const hendle3 = ()=>{
        setchecked3(true)
        setchecked(false)
        setchecked2(false)
    }
    return(
        <div className="menu">
            <div className="menu-name" onClick={hendle}>
                <div className="menu-name2" onClick={hendl1} style={{background:cheked?"#f4f2f3":"#545887",color:cheked?"#080c36":"#f4f2f3"}}>registro</div>
            </div>
            <div className="menu-name"  onClick={hendle2}>
                <div className="menu-name2" onClick={hendl2} style={{background:cheked2?"#f4f2f3":"#545887",color:cheked2?" #080c36":"#f4f2f3"}}> dados enviados</div>
            </div>
            <div className="menu-name"   onClick={hendle3}>
                <div className="menu-name2" onClick={hendl3} style={{background:cheked3?"#f4f2f3":"#545887",color:cheked3?" #080c36":"#f4f2f3"}}>dados recebidos</div>
            </div>
        </div>
    )
}