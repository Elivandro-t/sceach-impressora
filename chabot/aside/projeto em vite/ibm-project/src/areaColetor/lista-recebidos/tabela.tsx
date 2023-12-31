import "./index.css"
import { useEffect, useState } from "react";
import { dadosColetor } from "../area-principa-lista/types";
import { ColetorRecebidos } from "./types";
type coletores = {
  dbs:any,

}

export const Tabela = ({
  dbs}:coletores) => {
  const [db,setdb]=useState<ColetorRecebidos[]>()
 
 
    const hendle = async()=>{
      try{
      
      setdb(dbs.content)
    }catch(err){console.log(err)}
  }


  useEffect(()=>{
    hendle()
  })

  return (
    <div >
      <table>
        <thead className="tabela">
          <tr>
            <th>protocolo</th>
            <th>setor</th>
            <th>patrimonio</th>
            <th>mac</th>
            <th>modelo</th>
            <th>defeito</th>
            <th>data</th>
            <th>solicitante</th>
            <th>descriçao</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {db?.map((e, index) => (
            <tr className={index % 2 === 0 ? "namess1" : "namess2"} key={index}>
              <td>{e.protocolo}</td>
              <td>{e.setor}</td>
              <td>{e.patrimonio}</td>
              <td>{e.mac}</td>
              <td>{e.modelo}</td>
              <td>{e.data}</td>
              <td style={{backgroundColor:e.status=="ENTREGUE"?"green":"white"}}>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
