import e from 'express';
import 'dotenv/config'
import routes from './routes/routes.js'
import cookieParser from 'cookie-parser';

// configurations
const app = e()
app.use(e.json())
app.use(cookieParser())
app.use(routes)

// enviroiment variables
const PORT = process.env.PORT

const start = ()=>{
  try {
    app.listen(PORT, ()=>{
      console.log("Server running")
    })
  } catch (error) {
    console.log("Error, exiting process...\n")
    console.log(error)
  }
}

start()
