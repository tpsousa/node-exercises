
import { createFile } from "./create.file.mjs";
import {updateContent} from "./update.file.mjs";
import { deleteFile } from "./delete.file.mjs";
import {showFile} from "./show.file.mjs"




async function start (){
  await createFile()
  await showFile()

  console.log("-------")
  await updateContent("Conteudo modificado")
  await showFile()
  console.log("--------")
  await deleteFile()
}

start()