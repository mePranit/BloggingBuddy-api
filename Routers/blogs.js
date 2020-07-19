const express = require('express');
const router = new express.Router()

//require('./db/mongoose')
const blogs = require('../Models/blogs')

router.post('/createblog', function (req, res) {
    console.log(req.body);
    const mydata = new blogs(req.body)
    mydata.save().then(function () {
        res.send('blog sucesfully created')
    }).catch(function (e) {
        res.send(e)

    })
})


router.get('/selectallblogs', function (req, res) {
    blogs.find().then(function (user_data) {

        //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("all data selected")
        //console.log(user_data)
    }).catch(function (e) {
        res.send("error")
    });
})

router.get('/selectmyblogs/:userid', function (req, res) {
    blogs.find({ userid: req.params.userid }).then(function (user_data) {

        //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("all data selected")
        //console.log(user_data)
    }).catch(function (e) {
        res.send("error")
    });
})
router.get('/selectblogtoedit/:_id', function (req, res) {
    blogs.findOne({ _id: req.params._id }).then(function (user_data) {

        //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("all data selected")
        //console.log(user_data)
    }).catch(function (e) {
        res.send("error")
    });
})



router.delete('/deleteblogs/:_id', function (req, res) {
    console.log(req.params._id);
    blogs.findByIdAndDelete(req.params._id).then(function () {
        res.send("blog deleted")
    }).catch(function () {
        res.send(e)
    })
})

router.put('/updateblog/:_id/:category/:content', function(req, res){
    blogs.updateOne({_id :req.params._id},{ $set: { category: req.params.category,content: req.params.content }}).then(function(){
        res.send("show updated")
    }).catch(function(){ 
        res.send("error")
    }) 
    })

// router.put('/updateblog/:_id/:category', function (req, res) {
//     blogs.updateOne({ _id: req.params._id }, { $inc: { category: + JSON.parse(req.params.category) }  }).then(function () {
//         res.send("blog updated")
//     }).catch(function () {
//         res.send("error")
//     })
// })







//request to update blog


// router.put('/updateshowwithall/:showid', function(req, res){
//     //console.log("dsfadf");
//     shows.findOneAndUpdate({_id :req.params.showid}, req.body).then(function(){
//         res.send("show updated")
//     }).catch(function(){ 
//         res.send("error")
//     }) 
//     })


//          //update show //this will add number of seats in existing
//          //update garxa show but existing seat ra naya add gareko seat duitai lai add garxa 

//     router.put('/updateshowwithseats/:showid/:seats', function(req, res){
//         shows.updateOne({_id :req.params.showid},{ $inc: { seats: + JSON.parse(req.params.seats) } }).then(function(){
//             res.send("show updated")
//         }).catch(function(){ 
//             res.send("error")
//         }) 
//         })

//         //delete show by show id


// router.delete('/deleteshow/:showid', function(req, res){
//     console.log(req.params.showid);
//     shows.findByIdAndDelete(req.params.showid).then(function(){
//         res.send("show deleted")
//     }).catch(function(){ 
//         res.send(e)
//     })
//     })


//     //request for getting user information
//     //get show by show id

// router.get('/selectshow/:showid', function(req, res){
//     shows.findById(req.params.showid).then(function(user_data){

//         //this line writes on postman
//     res.send(user_data);
//     console.log(req.body)
//     res.send("data selected")
//     //console.log(user_data)
//     }).catch(function(e){
//         res.send("error")
//     });
//     })

//     //get all show
//     router.get('/selectallshow/', function(req, res){
//         shows.find().then(function(user_data){

//             //this line writes on postman
//         res.send(user_data);
//         console.log(req.body)
//         res.send("all data selected")
//         //console.log(user_data)
//         }).catch(function(e){
//             res.send("error")
//         });
//         })

//                     //delete my show

//             router.delete('/deleteshow/:userid', function(req, res){
//                 console.log(req.params.userid);
//                 shows.findByIdAndDelete({userid:req.params.userid}).then(function(){
//                     res.send("show deleted")
//                 }).catch(function(){ 
//                     res.send(e)
//                 })
//                 })



//         //getmyshow
//         router.get('/selectmyshow/:userid', function(req, res){
//             shows.find({userid:req.params.userid}).then(function(user_data){

//                 //this line writes on postman
//             res.send(user_data);
//             console.log(req.body)
//             res.send("all data selected")
//             //console.log(user_data)
//             }).catch(function(e){
//                 res.send("error")
//             });
//             })




module.exports = router 