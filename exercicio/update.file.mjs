import { rejects } from "node:assert"
import fs from "node:fs"
import { resolve } from "node:path"


const content = "novo conteudo do arquivo"

export const updateContent=()=>{
  return new Promise((resolve,rejects)=>{
    fs.writeFile("meuarquivo.txt",content,(error)=>{
      if(error){
        console.log("nao foi possivel renomear o arquivo",error.message)
       rejects()
      }else{
        console.log("o conteudo foi atualizado com sucesso")
        resolve()
      }
    })  
  })
}


