import { useState } from "react"
import { remove } from "../../auth/isLogued"
import "./user.css"
export const User = ()=>{
    const name = localStorage.getItem("name")
    const handleLogout = ()=>{
        remove()
        window.location.href = "/"
    }
    const [isOpen,setOpen]=useState(false)
    const toggleMenu = ()=>{
        setOpen(!isOpen)

    }
    return(
       <div className="account-menu">
           
      <div className="name-logued">
        <button onClick={toggleMenu} className="account-menu-button">
          <div className="name-user">olá {name}</div>
        </button>
      </div>

      {isOpen && (
        <ul className="account-menu-dropdown">
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/alter">alter senha</a>
          </li>
          <li>
            <button onClick={handleLogout}>sair</button>
          </li>
        </ul>
      )}
    </div>
       
    )
}