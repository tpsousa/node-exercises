const fs = require('node:fs');

const filename = "arquivo.csv"

const exists = fs.existsSync(filename)

if(exists){
  fs.readFile(filename,"utf8",(error,data)=>{
    if(error){
      console.log("Erro ao ler o arquivo:",error.message)
      return
    }
    const entries = data.split(",")
    console.log(entries)
    entries.forEach((entry)=> console.log(entry))
  })
}else{
  console.log("o arquivo nao existe")
}