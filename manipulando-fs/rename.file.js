const fs = require("node:fs")

fs.rename("arquivo.txt","arquivo.csv",(error)=>{
  if(error){
    console.log("erro ao renomear o arquivo:",error.message)
    return 
  }

  console.log("arquivo renomeado com sucesso!")
})