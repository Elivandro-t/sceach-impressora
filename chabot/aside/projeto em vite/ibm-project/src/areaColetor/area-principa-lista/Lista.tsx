
import { TabelAdmin } from "./tabela"
import { DadosBuscaEnviados } from "./dadosInput/input"

export const Lista = ()=>{
    return(
        <div className="dados-listas">
              <div className="tela-exibe-dado2" >
                <DadosBuscaEnviados/>
            </div>
            <h2>lista de coletores enviados</h2>
            <div className="tela-exibe-dado3" >
               <TabelAdmin/>
            </div>            
        </div>
    )
}