import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app = express();
app.set('view engine',"pug");
app.set("views",__dirname + "/views");
app.use("/public",express.static(__dirname + "/public"));

app.get("/",(_,res)=>
    res.render("home")
);
app.get("/*",(_,res)=>res.redirect("/"));

const server = http.createServer(app);
const io = SocketIO(server);

io.on("connection",socket=>{
    console.log(socket);
})

app.listen(3000,()=>{
    console.log("start express server on port 3000")
});




