import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';      
import studentRoutes from './routers/StudentRoutes.js'; 
import userRoutes from './routers/UserRoutes.js'; 
import cors from 'cors';  
   

//init app
const app = express();



//Enable cors to fronted
let corsOptions = {
    origin: process.env.ORIGIN
}
 
//middleware
app.use(express.json());
app.use(cors(corsOptions));

//
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
})

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening to port ${process.env.PORT}...`);
    });
} catch (e) {
    console.log(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

