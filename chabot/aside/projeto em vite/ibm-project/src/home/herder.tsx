import { useEffect, useState } from "react"
import { Menu } from "./menu/menu"
import { User } from "./menu/user"
import { remove } from "../auth/isLogued"

export const Header = ()=>{
    return(
        <div className="topo-area">
             <div className="top-left">
                <Menu/>
             </div>
             <div className="top-right">
                <User/>
             </div>
        </div>
    )
}