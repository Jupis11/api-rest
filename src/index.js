import  express, { request }  from "express";
import employeesRoutes from  './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'



const app = express()



app.use(employeesRoutes)
app.use(indexRoutes)
  





app.listen(3000)
console.log('server runnnig on port 3000');