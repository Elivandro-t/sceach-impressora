const base = "http://localhost:8080";
const token = localStorage.getItem("token")
const apitList =async (endpoint:string)=>{
    const json = await fetch(base+endpoint,{
        method:"GET",
        headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`}
    });
    return json;

}
const deleteMap = async(endPoint:string)=>{

    const json = await fetch(base+endPoint,{
       method:"DELETE",
       headers:{
           "Content-type": "application/json",
           "Authorization": `Bearer ${token}`
          },
    })
}
const entregue = async(endPoint:string)=>{

    const json = await fetch(base+endPoint,{
       method:"GET",
       headers:{
           "Content-type": "application/json",
           "Authorization": `Bearer ${token}`
          },
    })
}
const api = {
   api:async()=>{
       const json = await apitList(
            "/service/api/lista"
        );
        return json;
   },
   delete:async(id:any)=>{
    const json = await deleteMap(
      `/service/api/${id}`
    )
},
entregue:async(id:any)=>{
    const json = await entregue(
        `/service/api/${id}/entregar`
    )
}
   
}
export default api;