 function escaperHtmlSpecialCharacters(text){
  return text.replace(/[<>&]/g,(match)=>{
    switch(match){
      case '<' : return '&lt;';
      case '>': return '&gt;';
    case '&' : return '&amp;'; default: return match;     }
  })
}

const fs= require('fs');
const path = require('path');

function escapeHtmlFile(inputFilePath,OutputFilePath){
  try{
    const fileContent = fs.readFileSync(inputFilePath,'utf-8');
    const escapeContent = escaperHtmlSpecialCharacters(fileContent)

    fs.writeFileSync(OutputFilePath,escapedContent,'utf-8');

    console.log('arquivo escapado com sucesso;',OutputFilePath)
  }catch(error){
    console.log('Erro:',error.message);

    process.exit(1);
  }
}

const readLine = require('readLine'
);

async function askFilePath(question){
 const rl = readLine.createInterface({
  input: process.stdin, output : process.stdout,
 })
 return new Promise((resolve)=>{
  rl.question(question,(answer)=>{
    resolve(answer);
    rl.close()
  })
 })
}

async function starUserInteraction(){
  let inputPath = process.argv[2] || (await askFilePath('informe o caminho do arquivo de entrada'));

  inputPath = path.resolve(inputPath);

  const defaultName = `escape_${path.basename(inputPath,path.extname(inputPath)).txt}`;

  let outputPath = process.argv[3] || (await askFilePath(`informe o caminho do arquivo de saida(${defaultName}):`));

  if(outputPath.length){
    outputPath = defaultName;
  }
  outputPath = path.resolve(outputPath);
  escapeHtmlFile(inputPath,outputPath);
} 