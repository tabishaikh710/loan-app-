const hostname = '178.18.246.180';
const port = 3000;
require("dotenv").config();

const express = require('express');
const app = express();

const multer = require('multer')

const adminRouter = require('./api/admin/admin.router')
const addindustryRouter = require('./api/industries/add_industries/addindustry.router')
const industryRepresentativeAuthentication = require('./api/industries/industries_representative/industries_representative_authentication.router')
const industries_department = require('./api/add_department/add_department.router')
const industries_machines = require('./api/add_machines/add_machines.router')
const sensors_for_industries = require('./api/sensors_details/sensors.router')
//const product_count = require('./api/view_product_count/view_product_count_router.router')


// new work of new UI
const tickets = require('./api/ticket/ticket.router')
const alerts = require('./api/alerts/alert.router')

const targets = require('./api/industry_targets/targets.router')

//

const fishapis = require('./api/FISHFARMING/fish.router')

const farming = require('./api/poultry_farming/farming.router')

app.use(express.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})


app.use("/api/admin",adminRouter);

app.use("/ncbc/industries_data",addindustryRouter)
app.use("/ncbc/industryrepresentative",industryRepresentativeAuthentication)
app.use("/ncbc/industries_department",industries_department)
app.use("/ncbc/industries_machines",industries_machines)
app.use("/ncbc/sensors",sensors_for_industries)


// NEW WORK

app.use("/ncbc/tickets",tickets)
app.use("/ncbc/alerts",alerts)


app.use("/ncbc/targets",targets)


// fish


app.use("/ncbc/fishfarming",fishapis)




app.use("/ncbc/farming",farming)


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



  app.listen(port, hostname, ()=>{
    console.log(`Server FOR NCBCIOT HOSTNAME AND PORT IS = http://${hostname}:${port}`);
    });