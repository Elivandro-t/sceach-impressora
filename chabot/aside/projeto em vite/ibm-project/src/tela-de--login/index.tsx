import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./index.css"
import result from "./api"
import { logued } from "../auth/isLogued";
import { Home } from "../home/home";
import { name } from "mustache";
export const Signin = ()=>{
    const [password,setPassword] = useState("")
    const [email,setemail] = useState("")
    const [showpassword,setShowPassword] = useState(false)
    const [erro,setErro] = useState("")
    const hendepassword = ()=>{
        setShowPassword(!showpassword)
    }
    const hl = ()=>{
      return  window.location.href = "/home"
    }
    const hendle = async(e:any)=>{
      e.preventDefault()
        
          const response = await result.sing(email,password);
         const jsons = await response.json();
       
          if(jsons.token){
            logued(jsons.token,jsons.name.split(' ')[0])
            hl()
          }else{
            setErro(jsons.msg)
          }
       
         
    }
  
    return(
       <div className="continer-int">
            <label className="logo">
            
                <img src="./usuario.png" width={40} className="img"/>
                <p></p>
                
            
            </label>
           <div className="Signin">
             <div className="Signin_int">
              {erro&&
                <div>{erro}</div>
              }
                
                <form onSubmit={e=>hendle(e)} className="Signin_int">
                   
                <fieldset className="input-login">
                    <legend>usuario</legend>
                     <label>
                        <input type="email" value={email} onChange={e=>setemail(e.target.value)} className="dados-inut" placeholder="digite seu email"/>
                     </label>
                   </fieldset>
                
                
                 <fieldset className="input-login">
                    <legend>senha</legend>
                        <label className="input-senha">
                            <input type={showpassword ? "text":"password"} value={password} onChange={e=>setPassword(e.target.value)} maxLength={10} className="dados-inut" placeholder="digite sua senha"/>
                            <div onClick={hendepassword}>
                                {showpassword?<FaEyeSlash className="but"/>:<FaEye className="but" />}
                            </div>
                        </label>
                   </fieldset>
                 
                 <label htmlFor="" className="button-name">
                   <button onClick={hendle} className="buttons">enviar</button>
                 </label>
                </form>
             </div>
        </div>
       </div>
    )
}