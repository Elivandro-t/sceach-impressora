export const DadosBuscaEnviados = ()=>{
    const hendleBottn = (e:any)=>{
        e.preventDefault()
        alert("enviando dados..")
    }
    
    const hendleClear = (e:any)=>{
        e.preventDefault()
        alert("limpando dados..")
    }
    return(
        <div className="input-dados">
           <form onSubmit={hendleBottn}>
            <div  className="inputs-int">
                <label htmlFor="">
                    <input type="text" placeholder="buscar..." />
                </label>
                <label htmlFor="">
                    <label>por mac</label>
                    <input type="checkbox" />
                </label>
            </div>
            <div className="inputs-botton">
                    <label htmlFor="">
                        <input type="date" />
                    </label>
                    <label htmlFor="">
                        <input type="date" />
                    </label>
                </div>
                <label htmlFor="">
                    <button onClick={hendleBottn}>enviar</button>
                </label>
                <label htmlFor="">
                    <button onClick={hendleClear}>limpar</button>
                </label>

           </form>
        </div>
    )
}