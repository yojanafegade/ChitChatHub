const express =require ('express');
const app=express()
const http=require("http");

const cors = require("cors");
const {Server}=require("socket.io")

app.use(cors());

const server = http.createServer(app);

const io=new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"],
    },
});

io.on("connection",(socket)=>{
      console.log(`User connected successfully : ${socket.id}`);
      
      socket.on("Join_room",(data)=>{
         socket.join(data)
         console.log(`User with ID:${socket.id} joined room ${data} `);
         
      })

      socket.on("Send_message",(data)=>{
        socket.to(data.room).emit("Receive_message",data)
        

      })

      socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
        
      });
});


server.listen(3001,()=>{
    console.log("server started running");
    
});