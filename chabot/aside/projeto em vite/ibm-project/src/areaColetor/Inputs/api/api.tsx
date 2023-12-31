import { json } from "stream/consumers"
const token = localStorage.getItem("token")
const base = "http://localhost:8080"
const fetchPost = async(endPoint:string,body:{patrimonio:any,mac:any,itens:{
setor:any,
modelo:any,
obs:any,
solicitante:any}})=>{
    const json = await fetch(base+endPoint,{
       method:"POST",
       headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
       },
       body:JSON.stringify(body)
    })
    return json

}
const api = {
    input: async(patrimonio:any,mac:any,
       setor:any,
   modelo:any,
   obs:any,
   solicitante:any
       )=>{
        const json = await fetchPost(
            "/service/api/registrar",{
                patrimonio:patrimonio,
                mac:mac,
                itens:{
                    setor:setor,
                modelo:modelo,
                obs:obs,
                solicitante:solicitante
                }

            }
        )
        return json;}
}
export default api;