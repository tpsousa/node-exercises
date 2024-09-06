var path = require('path')

var filename = path.basename('Users/Refsnes/demo_path.js');

console.log(filename);

var os = require('os')
console.log("Platform:" + os.platform())

console.log("architecture:" + os.arch())

console.log("cpus sysmtem:" + os.cpus())

console.log("user:" + os.userInfo())
console.log("memory:" + os.freemem())


const fs = require('fs');

// const readableStream = fs.createReadStream('arquivo_grande.txt',{
//   endcoding : 'utf8',
//   highWaterMark: 16 * 1024
// })

// readableStream.on('data',(chuck)=>{
//   console.log('novo chuck recebido')
//   console.log(chunk);
// })

// readableStream.on('end',()=>{
//   console.log('leitura de arquivo concluida');
// })

// readableStream.on('error',(error)=>{
//  console.log('erro ao ler o arquivo',err);
// })


const readableStream = fs.createReadStream('arquivo_origem.txt');

const writableStream = fs.createWriteStream('arquivo_text');

readableStream.on('data',(chuck)=>{
  console.log('copiando chunk');
  writableStream.write(chunk)
})

readableStream.on('error',(err)=>{
  console.error('erro ao ler o arquivo',err);
})

writableStream.on('error',(error)=>{
  console.error('erro ao escrever no arquivo', err);
})


const buffer = Buffer.from('aprendendo buffers no node.js','utf8');

console.log('buffer em bytes:',buffer);

const texto = buffer.toString('utf8');

console.log('buffer convertido em string:', texto);

fs.writeFile('arquivo_com_buffer.txt',buffer,(err)=>{
  if(err){
    console.error('erro ao escrever o arquivo',err);
  }else{
    console.log('arquivo salvo com sucesso ultilizando buffer')
  }
})

fs.readFile('arquivo_com_buffer.txt',(err,data)=>{
  if(err){
    console.error('erro ao ler o arquivo',err);
    return;
}

 console.log('o conteudo do arquivp lido como buffer',data);

 const textoLido = data.toString('utf8');

 console.log('conteudo convertido para string',textoLido);
})

// const readline = require('readline')

// //let rl = readline.createInterface(process.stdin,process.stdout);

// rl.question('what is your age?',(age)=>{
//   console.log('your ageis :' + age);
//   rl.close();

// })

const rl = readline.createInterface(process.stdin,process.stdout)

rl.setPrompt('what is your age?');
rl.prompt();
rl.on('line',(age)=>{
  console.log(`age received by the user: ${age
  }`)
  rl.close();
})

rl.on('SIGINT',()=>{
  rl.question('exit (y or n)?',(input)=>{
    if(input.match(/^y(es)?$/i)){
      rl.pause()
    }
  })
})

process.stdin.setEnconding('utf8');

process.stdin.on('data',(data)=>{
  console.log(`voce digitou : ${data}`);

  process.exit();
})

process.stdin.on('readable',function (){
  var input = process.stdin.read();

  if(input !== null){
    process.stdout.write(input);

    var command = input.trim();
    if(command ==='exit'){
      process.exit(0)
    }
  }
});

'use strict';

let a = [1,2,3,];
let b = Buffer.from(a)

console.log(b);

let a2 = new Uint8Array([1,2,3,]);
let b2 = Buffer.from(a2);

console.log(b2);
let b3 = Buffer.from(10);
console.log(b3);

let b4 = Buffer.alloc(10);
console.log(b4);

let buf = new Buffer("this is my pretty example");
let json = JSON.stringify(buf);

console.log(json)

var bufe = new Buffer(4);
// escreve os valores no buffer
buf.writeUInt8(0x63,0);
buf.writeUInt8(0x61,1);
buf.writeUInt8(0x74,2);
buf.writeUInt8(0x73,3);
// mostra o buffer em formato string
console.log(bufe.toString());





