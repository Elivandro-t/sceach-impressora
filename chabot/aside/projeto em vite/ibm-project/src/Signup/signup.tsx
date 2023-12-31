import "./signup.css"
import signup from "./api"
import { useState } from "react"
import { AlterPassword } from "./AlterPassword"
import { ErroSignup } from "./erro/erro"
import { webcrypto } from "crypto"
export const Signup = ()=>{
    const [name,setname]= useState("")
    const [email,setemail]= useState("")
    const [password,setpassword]= useState("")
    const [replepassword,setreplepassword]= useState("")
    const [erro,setErro] = useState(false)
    const [msg,setMsg] = useState("")

    const hendle = async(e:any)=>{
           e.preventDefault();
           if(password===replepassword){
            const response = await signup.signup(name,password,email);
          const json = await response.json()
          if(json.ok){
            setMsg(json.msg);
            setErro(true)
          }else{
            setMsg(json.msg);
            setErro(true)
          }
           }else{
            setErro(true)
            setMsg("senhas não batem")
           }
          
    }
    const hendleSg = ()=>{
        setErro(false)
    }
    return(
        <div className="alter-signup">
            <div className="logo-signup">signup</div>
            <div className="input-name-signup">
                {
                    erro&&
                    <ErroSignup henfle={hendleSg} msg={msg} mudar={erro}/>
                }
                <form className="input-alter-signup "  onSubmit={e=>hendle(e)}>
                    <div className="data">
                        <label className="name-data-signup">
                            name
                        </label>
                        <label>
                            <input className="input-dados" type="text"value={name} onChange={e=>setname(e.target.value)}/>
                        </label>
                    </div>
                    <div  className="data">
                        <label className="name-data-signup">
                            email
                        </label>
                        <label>
                            <input className="input-dados"value={email} onChange={e=>setemail(e.target.value)} type="email"/>
                        </label>
                    </div>
                    <div  className="data">
                        <label className="name-data-signup">
                            senha
                        </label>
                        <label>
                            <input className="input-dados"  type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                        </label>
                    </div>
                    <div  className="data">
                        <label className="name-data-signup">
                            repetir
                        </label>
                        <label>
                            <input className="input-dados" type="password" value={replepassword} onChange={e=>setreplepassword(e.target.value)}/>
                        </label>
                    </div>
                    <div  className="data">
                        <button onClick={hendle}>enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
