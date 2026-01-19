import express from 'express';
import { connectDB } from './database/db.js';
import studentRoute from './routes/student.router.js'


const app = express();
const port = 3000;

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/', studentRoute);


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is started at port ${port}`);
  }
});