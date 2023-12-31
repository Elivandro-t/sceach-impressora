import { ReactNode, useContext, useEffect, useState } from "react"
import "./index.css"
import { Link } from "react-router-dom"
import { context } from "./context"
export const Menu = () => {
    const contexts = useContext(context)
    const [alet, setale] = useState(false)
    const [alets, setales] = useState(false)
    const [showAlert, setAlert] = useState(false)
    const [showColetor, setcoletor] = useState(false)
    const hendle = () => {
        contexts?.sethome(false)
        setale(true)
        setAlert(false)
        contexts?.setcoletor(false)
        contexts?.setshow(!showAlert)
        setales(false)
    }
    const hendleColetor = () => {
        contexts?.sethome(false)
        setale(false)
        contexts?.sethome(false)
        setales(true)
        setcoletor(false)
        contexts?.setcoletor(!showColetor)
        contexts?.setshow(false)
    }
    const [isadm, setIsadm] = useState("admin");
    const raw = () => {
        switch (isadm) {
            case "admin":
                return (
                    <>
                        <li className="name-menu" style={alet ? { color: " rgb(211, 110, 28" } : { color: "white" }} onClick={hendle} >
                            Area de Registro
                        </li>
                        <li className="name-menu" style={alets ? { color: " rgb(211, 110, 28" } : { color: "white" }} onClick={hendleColetor}>
                            auditoria
                        </li>
                        <li className="name-menu" style={alets ? { color: " rgb(211, 110, 28" } : { color: "white" }} onClick={hendleColetor}>
                          <Link to={"/signup"} >signup</Link>
                        </li>
                    </>
                )
            case "usuario":
                return (
                    <li className="name-menu" style={alets ? { color: " rgb(211, 110, 28" } : { color: "white" }} onClick={hendleColetor}>
                        registro de coletores
                    </li>
                )
        }
    }
    return (
        <div className="menu-left">
            <nav>
                <ul >
                    {raw()}
                </ul>
            </nav>
        </div>
    )
}