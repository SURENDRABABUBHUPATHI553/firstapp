const express = require('express')

const app = express()


let name = "Suri"
let password = "Suri"

app.get('/', (req,res) => {
    res.send('This is Home Page');
})

app.use(loginmiddleware)

app.get('/success', (req, res) => {
    res.send("You are Successfully logged in");
})





function loginmiddleware(req, res, next) {
    if(name==password) {
        next();
    }
    else {
        res.send("You are not an user");
    }
}



app.listen(3000, () => {
    console.log("Server is running.........")
})