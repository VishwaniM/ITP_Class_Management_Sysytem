import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';



import studentRoutes from './routes/students.js';
<<<<<<< HEAD
//importing Exam Models
import resultRouter from './routes/exam/results.js';
import paperRouter from './routes/exam/papers.js';
import scheduleRouter from './routes/exam/schedules.js'

import newuser from './routes/exam/user.js';
=======
//importing Notice Function RouteFiles
import noticeRoutes from './routes/notice-m/notices.js';
import reactRouter from './routes/notice-m/reactions.js';
import commentRouter from './routes/notice-m/comments.js';
import postcomment from './routes/notice-m/postcomment.js';
import newuser from './routes/notice-m/user.js';

>>>>>>> main

const app = express();



app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use('/students',studentRoutes);
//Exam Routes
app.use('/result',resultRouter);
app.use('/paper',paperRouter);
app.use('/schedule',scheduleRouter);
app.use('/newuser',newuser);


//Routing notice function
app.use('/notice',noticeRoutes);
app.use('/reactions',reactRouter);
app.use('/comments',commentRouter);
app.use('/postcomment',postcomment);
app.use('/newuser',newuser);

const CONNECTION_URL = 'mongodb+srv://techdudes:techdudes123@cluster0.sx9rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
    
mongoose.set('useFindAndModify', false);

const connection = mongoose.connection;
connection.once("open",()=>{
   console.log("MongoDb Connection success!");
})
