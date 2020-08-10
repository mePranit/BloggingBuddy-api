const express = require('express');
const router = new express.Router() 
const Auth = require('../Middleware/auth')
//const multer = require('multer');

//require('./db/mongoose')
const users = require('../Models/users') 

const nodemailer= require ('nodemailer');


//sending mail

    


//request for register/signup for users

router.post('/registeruser', function(req, res){   
console.log(req.body);
const mydata = new users(req.body)
let transporter=nodemailer.createTransport({
    service :'gmail',
    auth :{
        user:'Bloggingbuddy10@gmail.com',
        pass:'BloggingBuddy10'
    }
});

let mailOption={
    from :'Bloggingbuddy10@gmail.com',
    to :mydata.gmail,
    subject : ' BloggingBuddy Account verification',
    text : 'Your code is  '+ mydata.code + ' to verifiy your gmail account'
};

transporter.sendMail(mailOption,function(err,data){
    if(err){
        console.log('error occoured'+err)
        res.send('unsucess')
    }
    else
    {
        console.log('process completed')
        res.send('sucess')
        // mydata.save().then(function(){
        //     res.send('sucess')
        //     console.log(mydata);
        //     }).catch(function(e){
        //     res.send('unsucess')
        //     })
    }
});
})


router.post('/finalregister', function(req, res){   
    console.log(req.body);
    const mydata = new users(req.body)

            mydata.save().then(function(){
                res.send('sucess')
                console.log(mydata);
                }).catch(function(e){
                res.send('unsucess')
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
    router.get('/selectallusers', function(req, res){
        users.find().then(function(user_data){
    
            //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("data selected")
        //console.log(user_data)
        }).catch(function(e){
            res.send("error")
        });
        })


        router.get('/searchuser/:searchvalue', function(req, res){
            users.find({username:req.params.searchvalue}).then(function(user_data){
        
                //this line writes on postman
            res.send(user_data);
            console.log(req.body)
            res.send("data selected")
            //console.log(user_data)
            }).catch(function(e){
                res.send("error")
            });
            })

        router.put('/updateuser/:_id', function(req, res){
        //console.log("dsfadf");
        users.findOneAndUpdate({_id :req.params._id}, req.body).then(function(){
            res.send("updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })
        router.delete('/deleteuser/:_id', function (req, res) {
            console.log(req.params._id);
            users.findByIdAndDelete(req.params._id).then(function () {
                res.send("user deleted")
            }).catch(function () {
                res.send(e)
            })
        })

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
                _id:user._id,
                admin:user.admin
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