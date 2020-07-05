const express = require('express')
const path = require('path');

const app = express()
const publicDirectory = path.join(__dirname, 'public');

app.use(express.static(publicDirectory));

const multer = require('multer')

var storage = multer.diskStorage({
        destination: "images",
        filename: function (req, file, callback)
         {
         const ext = path.extname(file.originalname);
         const new_filenames = "ram" + Date.now() + ext; 
         callback(null, new_filenames);
         }
        
    });
          
       
var upload = multer({ storage: storage });
                 
app.post('/upload', upload.single('files'), (req, res) => {
    res.send("here is the upload brother")
})





app.listen(5000)