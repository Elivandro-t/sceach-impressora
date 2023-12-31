import { ChangeEvent, useState } from "react"
import "./chamado.css"
import { TabelaChamado } from "./tabela"
import aps from "./api/api"
import { propsColetor } from "./api/types"
import { ErroDialog } from "./erro/erro"
export const Chamado = () => {
   const [showErro,setShowErro] = useState(true)
   const [patrimonio, setPatrimonio] = useState("")
   const [nova, setnova] = useState("")
   const [setor, setSetor] = useState("")
   const [modelo, setModelo] = useState("")
   const [obs, setObs] = useState("")
   const [solicitante, setSolicitante] = useState("")
   const [defeito,setDefeito] = useState("")
   const [nome,setNome] = useState("")
   const [envios,setEnvio] = useState("")
   const [dadosExib, setdados] = useState<propsColetor>()
   const [erro, seterro] = useState("")
   const henfle = ()=>{
      setShowErro(false)
   }
   const hendlePut = (e: ChangeEvent<HTMLInputElement>) => {
      const novaString = e.target.value
      const cleanedInput = novaString.replace(/[^a-zA-fA-F0-9]/g, '');

      // Adiciona ":" a cada dois caracteres (exceto no final)
      const formattedMac = cleanedInput
         .match(/.{1,2}/g)
         ?.join(':')
         .toUpperCase();

      setnova(formattedMac as string)
   }
   const envio = async () => {
      const response = await aps.input(patrimonio, nova,
         setor,
         modelo,
         obs,
         solicitante);
      const jsons = await response.json();
      try {
         if (jsons.ok) {
            
         } else {
            if (jsons && jsons.msg) {
               seterro(jsons.msg)
               setShowErro(true)
               console.log(jsons.msg)

            } else {
               setdados(jsons)
               console.log(jsons)
            }
         }
         return
      } catch (err) {
         console.log("resposta",erro)
      }

   }
   const clear = ()=>{
   setPatrimonio("")
   setnova("")
   setSetor("")
   setModelo("")
   setObs("")
   setSolicitante("")
   setDefeito("")
   setNome("")
   setEnvio("")
   }


   return (
      // area de cadastro
      <div className="chamado">
        
            {erro&&
              <ErroDialog henfle={henfle} mudar={showErro} msg={erro}/>
            }
      

         <div className="input_names">
            <label className="label_name">setor</label>
            <label className="input-1">
               <input className="input_dados" type="text" value={setor} onChange={e => setSetor(e.target.value)} />
            </label>
            <label className="label_name">solicitante</label>
            <label className="input-2">
               <input className="input_dado" value={solicitante} onChange={e => setSolicitante(e.target.value)} type="text" />
            </label>
         </div>

         <div className="setrutura">
            <div className="input_name">
               <label className="label_name">modelo</label>
               <label>

                  <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} />

               </label>
               <label>ativo</label>
               <label>
                  <input className="label_name" type="checkbox" />
               </label>
            </div>
            <div className="input_name">
               <label className="label_name">mac</label>
               <label>
                  <input className="input_dados" type="text" value={nova} onChange={hendlePut} maxLength={17} />
               </label>
               <label className="label_name" >patrimonio</label>
               <label>
                  <input className="input_dados"value={patrimonio} onChange={e => setPatrimonio(e.target.value)} type="text" maxLength={6} />
               </label>
            </div>
            <div className="input_name">
               <label className="label_name">defeito</label>
               <label>
                  <input className="input_dados" value={defeito} onChange={e=>setDefeito(e.target.value)} type="text" placeholder="nao obrigatorio" />
               </label>
               <label className="label_name" >envio</label>
               <label>
                  <input className="input_dados" value={envios} onChange={e=>setEnvio(e.target.value)} type="text" placeholder="nao obrigatorio" />
               </label>
            </div>
            <div className="input_name">
               <label className="label_name" >descriçao</label>
               <label>
                  <textarea className="input_dados-area" value={obs} onChange={e => setObs(e.target.value)} />
               </label>
               <label className="label_name">name</label>
               <label>
                  <input className="input_dados" type="text" value={nome} onChange={e=>setNome(e.target.value)} placeholder="nao obrigatorio" />
               </label>
            </div>
            <div className="button-envio js">
               <label>
                  <button onClick={envio} className="button-dados">registrar</button>
               </label>
               <label>
                  <button onClick={clear} className="button-dados">limpar</button>
               </label>

            </div>

         </div>

         <div className="tela-exib">
            <div className="tela-exibe-dados">
               <TabelaChamado
                  protocolo={dadosExib?.itens.protocolo}
                  setor={dadosExib?.itens.setor}
                  patrimonio={dadosExib?.patrimonio}
                  mac={dadosExib?.mac}
                  modelo={dadosExib?.itens.modelo}
                  data={dadosExib?.data}
                  solicitante={dadosExib?.itens.solicitante}
                  descricao={dadosExib?.itens.obs}
               />
            </div>
            
         </div>

      </div>
   )
}