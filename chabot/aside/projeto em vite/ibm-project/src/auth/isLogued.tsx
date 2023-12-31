export const IsLogued = ()=>{
    const token = localStorage.getItem("token")
    return  true;
}
export const logued = (token:string,name:string)=>{
    localStorage.setItem("name",name)    
    return localStorage.setItem("token",token)
}
export const remove = ()=>{
    
    return localStorage.removeItem("token")
   
}