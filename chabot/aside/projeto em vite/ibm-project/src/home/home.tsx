import { useState } from "react";
import { IsLogued, remove } from "../auth/isLogued";
import InactivityTimer from "../tela-de--login/validation";
import { MainArea } from "./Area-principal/mainArea"
import { Header } from "./herder"
import "./index.css"

export const Home = ()=>{
  const [isLogueds,setLogued ] = useState(true)
  const handleTimeout = () => {
    setLogued(false)
};

if (!isLogueds) {
   remove()
}
    return(
       <div className="container">
         <Header/>
         <MainArea/>
         <InactivityTimer timeout={360000} onTimeout={handleTimeout} />
       </div>
    )
}