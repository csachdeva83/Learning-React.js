const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
const cors=require("cors");

const app=express();
const port=4500 || process.env.PORT;

const {addUser,removeUser,getUser,getUsersInRoom}=require("./users");

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Server is running");
})

const server=http.createServer(app);

const io=socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");
    socket.on('joined',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin',text: `${user.name}, has joined!`});

        console.log(`${name} has joined at ${room}`);

        callback();
    });

    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text:message});

        callback(); 
    });

    socket.on('disconnect',()=>{
        console.log("User had left!!!")
    })
})

server.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

