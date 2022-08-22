///////
///////Made by Sidia
//////
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Wait Some Minutes To See Your RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Syahril Wuna RPC IS READY")});
}
module.exports = keepAlive

///////
///////Made by Sidia
//////