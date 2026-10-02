import { randomUUID } from 'node:crypto'

const fileHandler = (request)=>{
  let id = null
  let user_name = null
  let user_id = null
  let file_name = null
  let content_type = null
  let content_length = null
  let path = null
  let fileInfsObject = {}

  try {
    id = randomUUID()
    user_name = request.get("x-user-name")
    user_id = request.get("x-user-id")
    file_name = request.get("x-file-name")
    content_type = request.get("content-type")
    content_length = request.get("content-length")
    path = `/cloud/${user_name}/${file_name}`

    return fileInfsObject = {
      id: id,
      user_name: user_name,
      user_id: user_id,
      file_name: file_name,
      content_type: content_type,
      content_length: Number(content_length),
      path: path
    }
  } catch (err){
    throw err
  }
}

export default fileHandler
