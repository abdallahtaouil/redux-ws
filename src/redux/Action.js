import { ADDMOVIE, DELETEMOVIE } from "./Actiontype"

export const addmovie=(data)=>{
    return {type:ADDMOVIE,payload:data}
}
export const deletemovie=(id)=>{
    return {type:DELETEMOVIE,payload:id}
}
