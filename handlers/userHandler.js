import { randomUUID } from 'crypto'

const userHandler = (request)=>{
  let user_id = null
  let email = null
  let password = null

  try{
    user_id = randomUUID()
    email = request.body.email
    password = request.body.password


    return {
      handling_success: true,
      user_id: user_id,
      email: email,
      password: password
    }

  } catch (err){
    return {
      handling_success: false,
      error: err
    }
  }
}

export default userHandler
