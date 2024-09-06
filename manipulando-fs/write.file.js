const fs = require("node:fs")

try {
  fs.writeFileSync("./arquivo.txt", "Ola,mundo!","utf-8")
  console.log("o arquivo foi executado com sucesso")
}catch(error){
  console.log("Erro ao escrever o arquivo :",error.message)
}