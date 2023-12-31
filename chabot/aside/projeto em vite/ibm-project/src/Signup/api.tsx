const base = 'http://localhost:8085'
const signup = async(endpoin:string,body:{name:any,password:any,email:any})=>{
    const json = await fetch(base+endpoin,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(body)
    })
    return json

}
const api = {
    signup:async(name:any,password:any,email:any)=>{
        const json = await signup(
            "/registrar",{name:name,password:password,email:email}
        )
        return json;
    }
}
export default api