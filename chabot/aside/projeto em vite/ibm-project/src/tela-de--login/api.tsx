import { json } from "stream/consumers"

const base = "http://localhost:8085"
const login = async (endpoint:string,body:{email:string,password:string})=>{
    const json = await fetch(base+endpoint,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(
           body
        )
    })
    return json

}
const dadosApi = {
    sing:async(email:string,password:string)=>{
        const json = await login(
            "/login",{
               email,password
            }
        )
        return json;
    }
}
export default dadosApi;