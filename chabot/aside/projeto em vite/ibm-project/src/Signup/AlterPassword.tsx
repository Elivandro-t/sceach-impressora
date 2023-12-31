import "./index.css"
export const AlterPassword= ()=>{
    const hendle = (e:any)=>{
        e.preventDefault()
    }
    return(
        <div className="alter-password">
            <div className="input-name-password">
                <form className="input-alter "  onSubmit={e=>hendle(e)}>
                    <div>
                        <label className="name-data">
                            senha antiga
                        </label>
                        <label>
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label className="name-data">
                            nova 
                        </label>
                        <label>
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label className="name-data">
                            confirmar
                        </label>
                        <label>
                            <input type="text"/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}