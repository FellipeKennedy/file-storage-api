import { randomUUID } from 'node:crypto'
import { fileTypeFromBuffer } from 'file-type'

const fileHandler = async (request)=>{
  let id = null
  let user_name = null
  let user_id = null
  let file_name = null
  let mime_type = null
  let size = null
  let path = null
  let fileInfsObject = {}

  try {
    let mime_detect = await fileTypeFromBuffer(request.body)

    id = randomUUID()
    user_name = request.get("x-user-name")
    user_id = request.get("x-user-id")
    file_name = request.get("x-file-name")
    mime_type = mime_detect.mime
    size = request.get("content-length")
    path = `/cloud/${user_name}/${file_name}`

    return fileInfsObject = {
      id: id,
      user_name: user_name,
      user_id: user_id,
      file_name: file_name,
      mime_type: mime_type,
      size: Number(size),
      path: path
    }
  } catch (err){
    console.log(err)
  }
}

export default fileHandler
