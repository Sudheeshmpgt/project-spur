const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

require('./server/database/database')();


app.use('/api/user', require('./server/router/userRouter'))
app.use('/api/post', require('./server/router/postRouter'))
app.use('/api/conversations', require('./server/router/conversationRouter'))
app.use('/api/messages', require('./server/router/messageRouter'))


const server = app.listen(PORT, () => {
    console.log("Server started at http://localhost:9000");
})

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: 'http://localhost:3000'
    }
})

io.on("connection", (socket)=>{
    console.log("connected to socket.io")

    socket.on("setup", (userData)=>{ 
        socket.join(userData._id)
        socket.emit("connected")
    });

    socket.on("join chat", (room)=>{
        socket.join(room);
        console.log("joined room "+ room)
    })

    socket.on("new message", (newMessageRecieved)=>{
        var chat = newMessageRecieved.chat;
        if(!chat.members) return console.log("chat.users not defined")

            const x = chat?.members.filter(member => member !== newMessageRecieved._id)
            if(x == newMessageRecieved.senderId){
                return;
            }else{
                socket.in(x).emit("message recieved", newMessageRecieved)   
            }
    });

    socket.off("setup", ()=>{
        console.log("User disconnected");
        socket.leave(userData._id)   
    })
})

