process.stdout.write("Ola,mundo!");

process.stdin.on("data",(data)=>{
  process.stdout.write(`voce digitou : ${data}`)
})

const readline = require("node:readline")

const rl = readline.createInterface({input: process.stdin,output: process.sdout})

rl.on("line",(input)=>{
  rl.write(`Voce digitou : ${input}`)
})

rl.question ("qual o seu nome?",(answer)=>{
 rl.write(`Ola, ${answer}!\n`)
})

rl.on("close",()=>{
  rl.write("saindo....")
})

rl.on('SIGNT',()=>{
  rl.question('deseja realmente sair',(resposta)=>{
    if(resposta.trim().toLowerCase()==='s'){
      rl.close()
    }else{
      rl.write("voce escolheu continuar")
    }
  })
})

const buffer = Buffer.alloc(10)//cria um buffer de 10bytes

const fs = require('fs');

const ReadableStream = fs.createReadStream('path/to/file.txt',{encoding:'utf8'})

ReadableStream.on('data',(chuck)=>{
  console.log('novo chuck recebido',chuck)
})

ReadableStream.on('end',()=>{
  console.log('leitura do arquivo completa')
})

