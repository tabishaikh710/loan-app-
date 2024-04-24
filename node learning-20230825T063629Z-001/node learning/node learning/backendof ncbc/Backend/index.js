let PORT = process.env.PORT || 5000

const express = require('express');
const app = express();

const multer = require('multer')

const adminRouter = require('./api/admin/admin.router')


app.use(express.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})


app.use("/api/admin",adminRouter);









const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //D:\SZABIST\NCBC_SZABIST_DASHBOARD
      cb(null, '../public_html/FUNDSPROJECTIMAGES')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })


  

  const upload = multer({ storage: storage }).array('file')

  app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(req.file);
    });
  });

 

  app.use(express.static('public'));



app.listen(PORT,()=>{
     console.log(`application is listening on port http://:${PORT}`)
})