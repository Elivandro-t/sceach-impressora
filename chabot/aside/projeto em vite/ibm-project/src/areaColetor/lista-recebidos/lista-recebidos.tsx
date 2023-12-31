import { Tabela } from "./tabela"
import "./index.css"
import { useEffect, useState } from "react"
import { ColetorRecebidos } from "./types"
export const ListaRecebidos = ()=>{
    const [mac,setMac]= useState("")
    const [macEnd,setMacEnd]= useState(false)
    const [dbs,setDbs] = useState<ColetorRecebidos[]>()
    const [dataAntes,setDataAntes]=useState("")
    const [dataDepois,setDataDepois]=useState("")
    const [api,setapi]=useState("")
    const token = localStorage.getItem("token");

    const hendleBottn = async(e:any)=>{  
        e.preventDefault()
        let base ;
        base = "http://localhost:8081/lista?"
        let filter = macEnd?`patrimonio=${mac}`:`dataAntes=${dataAntes}&dataDepois=${dataDepois}`
        const result = await fetch(`${base}${filter}`,{
            method:"GET",
            headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`}
        })
        const json = await result.json();
        setDbs(json)
    }  
    const hendleClear = (e:any)=>{
        e.preventDefault()
        setDataAntes("")
        setDataDepois("")
    }

    return(
        <div className="dados-lista">
            <div className="tela-exibe-dado12" >
            <div className="input-dados">
           <div >
            <div  className="inputs-int">
                <label htmlFor="">
                    <input type="text"value={mac} onChange={e=>setMac(e.target.value)} placeholder="buscar..." />
                </label>
                <label htmlFor="">
                    <label>pat</label>
                    <input checked={macEnd} onChange={()=>setMacEnd(!macEnd)} type="checkbox" />
                </label>
            </div>
            <div className="inputs-botton">
                    <label htmlFor="" >
                        <input  value={dataAntes}  onChange={e=>setDataAntes(e.target.value)} type="date" />
                    </label>
                    <label htmlFor="">
                        <input  value={dataDepois} onChange={e=>setDataDepois(e.target.value)} type="date" />
                    </label>
                </div>
                <label >
                    <button onClick={hendleBottn}>enviar</button>
                </label>
                <label htmlFor="">
                    <button onClick={hendleClear}>limpar</button>
                </label>

           </div>
        </div>
            </div>
             <h2>lista de coletores recebidos</h2>
             <div className="tela-exibe-dado22" >
                <Tabela dbs={dbs}/>
             </div>
        </div>
    )
}