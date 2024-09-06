import fs from "node:fs";


export const deleteFile =()=>{
  return new Promise((resolve,reject)=>{
    fs.unlink("./meuarquivo.txt",(error)=>{
      if(error){
        console.log("cannot dele this file",error.message)
        reject()
      }else{
        console.log("file deleted with sucess")
        resolve()
      }
    })
  })
  
}

