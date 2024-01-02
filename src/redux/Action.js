import { ADDMOVIE, DELETEMOVIE, EDITMOVIE } from "./Actiontype"

export const addmovie=(data)=>{
    return {type:ADDMOVIE,payload:data}
}
export const deletemovie=(id)=>{
    return {type:DELETEMOVIE,payload:id}
}
export const editmovie=(data,id)=>{
    return {type:EDITMOVIE,payload:{id,data}}
}
