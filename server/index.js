const { Server} = require('socket.io');
const app = require("express")();
const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://video-chat-poc-1xor.vercel.app",
  },
});

const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("join-room", ({ email, room }) => {
    console.log("user joined room", email, room);

    emailToSocketIdMap.set(email, socket.id);
    socketIdToEmailMap.set(socket.id, email);

    io.to(room).emit("user-joined", { email: email, id: socket.id });

    socket.join(room);
    io.to(socket.id).emit("join-room", { email, room });
  });

  socket.on("call-user", ({ to, offer }) => {
    console.log("calling user", to);
    io.to(to).emit("incomming-call", { offer, from: socket.id });
  });

  socket.on("call-accepted", ({ answer, to }) => {
    console.log("call accepted", to);
    io.to(to).emit("call-accepted", { answer, from: socket.id });
  });

  socket.on("peer-negotiation-needed", ({ offer, to }) => {
    console.log("peer negotiation needed", to);
    io.to(to).emit("peer-negotiation-needed", { offer, from: socket.id });
  });

  socket.on("peer-negotiation-done", ({ answer, to }) => {
    io.to(to).emit("peer-negotiation-final", { answer, from: socket.id });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    const email = socketIdToEmailMap.get(socket.id);
    if (email) {
      emailToSocketIdMap.delete(email);
    }
    socketIdToEmailMap.delete(socket.id);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3001");
});