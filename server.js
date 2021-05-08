const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
    origin: true,
    credentials: true
}))

app.get('/', ((req, res) => {
    res.send("어서오세요~~~ 여기는 Server에용~");
}))

app.post('/signup', ((req, res) => {
    // 데이터 받아서 디비에 느면 됨
    console.log(req.body);

    // const con = mysql.createConnection({
    //     host:"localhost",
    //     user:"root",
    //     password:"",
    //     database:"storyplace"
    // });
    // con.connect(function(err){
    //     if(err) throw err;
    //     console.log("Connected!");
    //     const sql="INSERT INTO userinfo(ID, PW, Name, Sex) VALUES()";
    // })
}))

app.listen(3000, ()=>{
    console.log("server On!");
})