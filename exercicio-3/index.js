const fs = require('node:fs');
const path = require('node:path');
const readline = require("node: readline")

const notesDirectory = path.join(__dirname,'notes');

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
})

function initializeNotesDirectory(){
  if(!fs.existsSync(notesDirectory)){
    fs.mkdirSync(notesDirectory)
  }
}

function listNotes(){
  const notes = fs.readFileSync(notesDirectory)

  if(notes.length ===0){
    console.log('nenhuma nota foi encontrada');
  }else{
    process.stdout.write('notas salvas:');
    notes.forEach((note,index)=>{
      console.log(`${index + 1}. ${note}`)
    })
  }
}

function readNote(){
  listNotes()

  rl.question('digite o numero da nota que deseja ler:',(index)=>{
    const notes = fs.readFileSync(notesDirectory)
    const selectdNote= notes[index-1]

    if(!selectdNote){
      console.log('numero da nota invalido');

    }else{
      const notePath = path.join(notesDirectory,selectdNote)
      const content = fs.readFileSync(notePath,'utf-8');

      console.log(`conteudo da nota ${selectdNote}: \n\n${content}`)
    }
  })
}

function createNote(){
  rl.question('digite o nome da nota:',(noteName)=>{
   const notePath = path.join(notesDirectory,noteName)

   rl.question('digite o conteudo da nota:\n',(content)=>{
    fs.writeFileSync(notePath + '.txt',content,'utf-8')
    console.log(`nota ${noteName} foi criada com sucesso`)

   })
  })
}

function deleteNote(){
  listNotes()

  rl.question('digite o numero da nota que deseja excluir:',(index)=>{
    const notes= fs.readdirSync(notesDirectory)
    const selectedNote = notes[index -1]

    if(!selectedNote){
      console.log('numero da nota invalido');
    }else{
      const notePath = path.join(notesDirectory,selectedNote)
      fs.unlinkSync(notePath)
      console.log(`nota ${selectedNote} excluida com sucesso`)
    }
  })
}

function askForNextQuestion(){
  rl.question("\n deseja atualizar outra acao",(answer)=>{
    if(answer.toLowerCase()==='s'){
      main()
    }else{
      console.log('encerrando....')
      rl.close()
      process.exit(0)
    }
  })
}

function main(){
  initializeNotesDirectory()

  console.clear()

  console.log('------------')
  console.log('nota')

  console.clear()
  console.log("------------------------------")
  console.log("Notas Rápidas no Terminal v1.0")
  console.log("------------------------------\n")

  console.log("Escolha uma opção:")
  console.log("1. Listar notas")
  console.log("2. Ler uma nota")
  console.log("3. Criar uma nova nota")
  console.log("4. Excluir uma nota")
  console.log("5. Sair")

  rl.question('digite o numero da opcao desejada:',(option)=>{
    switch (option) {
      case "1":
        listNotes()
        askForNextAction()
        break;
      case "2":
        readNote()
        break
      case "3":
        createNote()
        break
      case "4":
        deleteNote()
        break;
      case "5":
        console.log("Saindo...")
        rl.close()
        process.exit(0)
      default:
        console.log("Opção inválida!")
        break;
    }
  })
}

main()