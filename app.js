import e from 'express';
import routes from './routes/routes.js'

const app = e()

app.use(routes)

const start = ()=>{
  try {
    app.listen(3000, ()=>{
      console.log("Server running in port 3000")
    })
  } catch (error) {
    console.log(error)
  }
}

start()
