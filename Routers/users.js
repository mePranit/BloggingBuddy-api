const express = require('express');
const router = new express.Router() 
const Auth = require('../Middleware/auth')
//const multer = require('multer');

//require('./db/mongoose')
const users = require('../Models/users') 




//request for register/signup for users

router.post('/registeruser', function(req, res){   
console.log(req.body);
const mydata = new users(req.body)
mydata.save().then(function(){
res.send('register sucessful')
console.log(mydata);
}).catch(function(e){
res.send(e)
})
})

router.get('/getuser/:_id', function(req, res){
    users.findById({_id:req.params._id}).then(function(user_data){

        //this line writes on postman
    res.send(user_data);
    console.log(req.body)
    res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })



//request for getting user information


    
    //request to update user
    
//     router.put('/updateuser/:userid', function(req, res){
//         //console.log("dsfadf");
//         users.findOneAndUpdate({_id :req.params.userid}, req.body).then(function(){
//             res.send("updated")
//         }).catch(function(){ 
//             res.send("error")
//         }) 
//         })

// router.delete('/deleteuser/:userid', function(req, res){
//     console.log(req.params.userid);
//     users.findByIdAndDelete(req.params.userid).then(function(){
//         res.send("deleted")
//     }).catch(function(){ 
//         res.send(e)
//     })
//     })
   
// router.get('/selectuser/:userid', function(req, res){
//     users.findById(req.params.userid).then(function(user_data){
//         //this line writes on postman
//     res.send(user_data);
//     console.log(req.body)
//     res.send("data selected")
//     //console.log(user_data)
//     }).catch(function(e){
//         res.send("error")
//     });
//     })

    router.post("/login",async function (req,res)
        {
            
            var enteredUname=req.body.username;
            var enteredpass=req.body.password;
            console.log(enteredUname, enteredpass);
            const user=await users.checkCredentialsDb(enteredUname,enteredpass);
            if(user){
            const token=await user.generateAuthToken();
            res.json({
                token:token,
                _id:user._id
            }); 
        }
        else{
            res.json({message:"Invalid"});
        }
        })

        router.post("/logout",async function (req,res)
        {
            
            try{
                req.users.tokens=req.users.tokens.filter((token)=> {
                    return tokens.tokens !== req.tokens
                })
                await req.users.save();
                res.send();
                console.log("sucess");
            }
            catch(e){
                
                console.log("error");
                
            }
            
           
        })

        


module.exports = router 