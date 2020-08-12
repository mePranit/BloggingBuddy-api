var mongoose = require('mongoose')

const feedback = mongoose.model('feedback', {
    
    feedback:{
        type:String
    },
    userid:{
        type:Object
    }
})


module.exports = feedback