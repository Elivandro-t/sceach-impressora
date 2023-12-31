import { dadosColetor } from "../area-principa-lista/types";
import { propsColetor } from "./api/types";
import "./index.css"
type prop = {
  protocolo:any,
  setor:any,
  patrimonio:any,
  mac:any,
  modelo:any,
  data:any,
  solicitante:any,
  descricao:any,
}

export const TabelaChamado = ({protocolo,setor,patrimonio,mac,modelo,data,solicitante,descricao}:prop) => {
  
  return (
    <div >
      <table>
        <thead className="tb">
          <tr>
            <th>protocolo</th>
            <th>setor</th>
            <th>patrimonio</th>
            <th>mac</th>
            <th>modelo</th>
            <th>data</th>
            <th>solicitante</th>
            <th>descriçao</th>
          </tr>
        </thead>
            <tbody>
              <tr className={"names1"}>
              <td className="td">{protocolo}</td>
              <td className="td">{setor}</td>
              <td className="td">{patrimonio}</td>
              <td className="td">{mac}</td>
              <td className="td">{modelo}</td>
              <td className="td">{data}</td>
              <td className="td">{solicitante}</td>
              <td className="td">{descricao}</td>
            </tr>
            </tbody>
      </table>
    </div>
  );
};
