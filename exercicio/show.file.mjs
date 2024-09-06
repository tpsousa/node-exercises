import fs from "node:fs"

try{
  const showFile= fs.readFileSync("./meuarquivo.txt","utf-8");
  console.log("o conteudi do arquivo e:",showFile)
}catch(error){
  console.log("nao foi possivel ler o arquivo")
}

module.exports = showFile()