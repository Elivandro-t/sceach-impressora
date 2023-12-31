import { useEffect, useState } from "react";
import "./index.css"
import { dadosColetor } from "./types";
import result from "./api/api"

export const TabelAdmin = () => {
  useEffect(()=>{
    dados()
  })
  const [lista,setLista] = useState<dadosColetor[]>()
  const deletes = (id:any)=>{
    
    if(id){
      alert("deseja realmente exluir")
      result.delete(id)
      return
    }
 
}
const entregar = (id:any)=>{
    
  if(id){
    result.entregue(id)
    return
  }

}
  const dados = async ()=>{
     try{
      const response= await result.api()
      const json = await response.json();
     console.log(json.content)
     setLista(json.content)
     }catch(er){
      console.log(er);
     }
       
  }
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
            <th>data</th>
            <th>descriçao</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {
            lista?.map((dados, index) => (
              <tr className={index % 2 === 0 ? "namess1" : "namess2"} key={index}>
                <td>{dados.itens.protocolo}</td>
                <td>{dados.itens.setor}</td>
                <td>{dados.patrimonio}</td>
                <td>{dados.mac}</td>
                <td>{dados.itens.modelo}</td>
                <td>{dados.data}</td>
                <td>{dados.itens.obs}</td>
                <td style={{backgroundColor:dados.status=='EM_MANUTENCAO'?"red":"yellow"}}>{dados.status}</td>
                <button>editar</button>
                <button onClick={e=>entregar(dados.id)}>entregar</button>
                <button onClick={e=>deletes(dados.id)}>excluir</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
