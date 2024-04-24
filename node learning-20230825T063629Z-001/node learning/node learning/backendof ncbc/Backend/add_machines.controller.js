const {
    add_industries_machines_to_database,
    select_machines_names_and_type,
    DepartmentDetails,
    add_machine_status_to_database,
    update_machine_status
} = require("./add_machines.services");


//const {genSaltSync,hashSync,compareSync} = require("bcrypt")
const {sign} =  require("jsonwebtoken")


module.exports={
    add_industries_machines_to_database:(req,res)=>{
        const body = req.body;
        add_industries_machines_to_database(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            
        if(!results){
            return res.json({
                success:0,
                message:"failed to insert machines"
            });
        }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },

    select_machines_names_and_type:(req,res)=>{
        const department_id = req.params.department_id;
        select_machines_names_and_type(department_id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            
            if(!results){
                return res.json({
                    success:0,
                    message:"Unable To Fetch"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Result Successfully Fetched",
                data:results,
            });
        })
    },


    DepartmentDetails:(req,res)=>{
        const industry_id = req.params.industry_id;
        DepartmentDetails(industry_id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            
            return res.status(200).json({
                message:"Machines Successfully Found",
                success:1,
                data:results
            });
        })
    },
    add_machine_status_to_database:(req,res)=>{
        const body = req.body;
        add_machine_status_to_database(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
   
  

    update_machine_status:(req,res)=>{
        const body = req.body;
        const machine_id = req.params.machine_id;
        update_machine_status([body,machine_id],(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            if(results.affectedRows == 0){
                console.log(err)
                return res.json({
                    success:0,
                    message: "Machine Id Not Found ",
                });
            }
            return res.status(200).json({
                success:1,
                message: "Successfully Updated",
                data:results,

            });
        })
    }   
   
}