var mongoose = require('mongoose')

const blogs = mongoose.model('blogs', {
    
    category: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    username:{
        type:String
    },
    userid:{
        type:Object
    }
})


module.exports = blogs