const express = require('express');
const router = new express.Router()

//require('./db/mongoose')
const feedback = require('../Models/feedback')

router.post('/addfeedback', function (req, res) {
    console.log(req.body);
    const mydata = new feedback(req.body)
    mydata.save().then(function () {
        res.send('feedback sucesfully created')
    }).catch(function (e) {
        res.send(e)

    })
})


router.get('/selectallfeedback', function (req, res) {
    feedback.find().then(function (user_data) {

        //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("all data selected")
        //console.log(user_data)
    }).catch(function (e) {
        res.send("error")
    });
})

// router.get('/selectmyblogs/:userid', function (req, res) {
//     blogs.find({ userid: req.params.userid }).then(function (user_data) {

//         //this line writes on postman
//         res.send(user_data);
//         console.log(req.body)
//         res.send("all data selected")
//         //console.log(user_data)
//     }).catch(function (e) {
//         res.send("error")
//     });
// })
// router.get('/selectblogtoedit/:_id', function (req, res) {
//     blogs.findOne({ _id: req.params._id }).then(function (user_data) {

//         //this line writes on postman
//         res.send(user_data);
//         console.log(req.body)
//         res.send("all data selected")
//         //console.log(user_data)
//     }).catch(function (e) {
//         res.send("error")
//     });
// })



router.delete('/deletefeedback/:_id', function (req, res) {
    console.log(req.params._id);
    feedback.findByIdAndDelete(req.params._id).then(function () {
        res.send("blog deleted")
    }).catch(function () {
        res.send(e)
    })
})

// router.put('/updateblog/:_id/:category/:content', function(req, res){
//     blogs.updateOne({_id :req.params._id},{ $set: { category: req.params.category,content: req.params.content }}).then(function(){
//         res.send("show updated")
//     }).catch(function(){ 
//         res.send("error")
//     }) 
//     })

module.exports = router 