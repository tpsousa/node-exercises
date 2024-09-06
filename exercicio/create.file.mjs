import fs from "node:fs"

fs.writeFileSync("meuarquivo.txt","este e o conteudo do arquivo")// -- o data do parametro

export const createFile=()=>{return new Promise((resolve,reject)=>{
  fs.readFile("meuarquivo.txt","utf-8",(error,data)=>{
    if(error){
      console.log("nao foi possivel ler o arquivo",error.message);
      reject()
    }else{
      console.log("o arquivo foi criado com sucesso")
      resolve()
      console.log("conteudo do arquivo",data)
    }
  })
})
}
 module.exports = createFile;

 
