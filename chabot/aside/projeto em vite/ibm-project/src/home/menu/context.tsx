
import { prototype } from "events";
import { ReactNode, createContext, useContext, useState } from "react";

type PropType = {
  show:boolean;
  coletor:boolean;
  setshow: (n:boolean) => void;
  setcoletor: (n:boolean) => void;
  areahome:boolean;
  sethome: (n:boolean) => void;
};

type ChildrenProps = {
  children: ReactNode;
};

export const context = createContext<PropType|null>(null);

export const UseDados= ({ children }:ChildrenProps) => {
  const [show, setshow] = useState(false)
  const [coletor, setcoletor] = useState(false)
  const [areahome, sethome] = useState(true)
return(
  <context.Provider value={{show,setshow,coletor,setcoletor,sethome,areahome}}>
       {children}
  </context.Provider>
);
};