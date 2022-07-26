const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//myAPP
var users = [
    {
        username: "junior",
        age: "21",
        id: 1
    },
    {
        username: "josh",
        age: "17",
        id: 2
    },
    {
        username: "berryallan",
        age: "19",
        id: 3
    }
] 

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/acessUsers.html');
})

app.get('/users',(req,res) => {
    res.send(users);
})

app.get('/users/verify',(req,res)=> {
    let id = req.query.id;
    let foundUser = users.find((user) => user.id == id);

    if(foundUser != undefined){
        res.send(foundUser);
    }
    else{
        res.send("user not found");
       }
    
    

})




//func para ouvir na porta 3000
app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
