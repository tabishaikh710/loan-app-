const hostname = '81.4.106.140';
const port = 3000;

const express = require('express');
const app = express();
const adminRouter = require('./api/admin/admin.router')
const addindustryRouter = require('./api/industries/add_industries/addindustry.router')
const industryRepresentativeAuthentication = require('./api/industries/industries_representative/industries_representative_authentication.router')
const industries_department = require('./api/add_department/add_department.router')
const industries_machines = require('./api/add_machines/add_machines.router')
const sensors_for_industries = require('./api/sensors_details/sensors.router')
app.use(express.json());
first_nodeapi
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


app.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}`);
    });