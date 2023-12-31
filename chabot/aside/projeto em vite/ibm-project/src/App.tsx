import React, { useState } from 'react';
import {BrowserRouter,Navigate,Outlet,Route,Routes} from "react-router-dom"
import './App.css';
import { Home } from './home/home';
import { Lista } from './areaColetor/area-principa-lista/Lista';
import { IsLogued } from './auth/isLogued';
import { Create } from './are-de-registro/create';
import { Erro404 } from './pagina-no-encontrada/Erro404';
import { Signin } from './tela-de--login';
import InactivityTimer from './tela-de--login/validation';
import { Signup } from './Signup/signup';
import { AlterPassword } from './Signup/AlterPassword';
function App() {
  

  const [perfil ,setPerfil] = useState("admin");
 const router = ()=>{
  switch(perfil){
    case "admin":
     return(
     <>
         <Route path='/lista' element={<Lista/>}/>
         <Route  path='/signup' element={<Signup/>}/>
     </>
     )
    case "usuario":
     return(
     <>
         <Route path='/registre' element={<Create/>}/>
     </>
     )
     default:
     return(
      <Route path='*' element={<Erro404/>}/>
     )
      
      
  }
 }
  
  return (
         
            <Routes >
                  <Route  path='/' element={IsLogued()? (<Outlet/>):(<Navigate to={"/"} replace/>)}>
                   {router()}
                   <Route  path='/home' element={<Home/>}/>
                  </Route>
                  <Route index path='/' element={<Signin/>}/>
                  <Route  path='/alter' element={<AlterPassword/>}/>
                  <Route path='*' element={<Erro404/>}/>

             </Routes>
  
          
  );
}

export default App;
