import "./erro.css"
type erro = {
    henfle:()=>void,
    mudar:boolean,
    msg:string
}
export const ErroDialog = ({mudar,henfle,msg}:erro)=>{
    return(
        <header className="visible" style={{visibility:mudar?"visible":"hidden"}}>
            <div className="erro"  style={{left:mudar?"43%":"-35%",transition:"1.5s"}}>
            <div className="erroAlert">
                <img src="./erro.png" width={30}/>
                <div className="msg">{msg}</div>
                <button onClick={henfle}>fechar</button>
            </div>
        </div>
        </header>
    )
}