const {
    create_admin,
    get_admin,
    get_admin_by_id,
    admin_login,
    admin_forget_password,
    admin_update_password

} = require("./admin.service");



module.exports={
    create_admin:(req,res)=>{
        const body = req.body;
        
        create_admin(body,(err,results)=>{
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
    
    get_admin:(req,res)=>{
        get_admin((err,results)=>{
            if(err){
                return res.json({
                    status:0,
                    message:"Error in connection"
                });
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"failed to get any admin"
                });
            }
            return res.json({
                status:1,
                message1:"Admins fetched Successfully",
                message:results
            })
        })
    },

    get_admin_by_id:(req,res)=>{
        const admin_id = req.params.admin_id;
        get_admin_by_id(admin_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Admin Successfully Found",
                data:results
            })
        })
    },
   

 
    admin_login:(req,res)=>{
        const body = req.body;
      //  const salt = genSaltSync(10);
      //  body.admin_password = hashSync(body.admin_password,salt);
       // console.log("adminpassword",body.admin_password)
        admin_login(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            if(!results){
                console.log(err)
                return res.json({
                    success:0,
                    message: "Invalid Email Or Password",
                });
            }
           // const jsontoken = sign({result:results.admin_email+results.admin_password},"SZABIST_NCBC_DASHBOARD",{expiresIn:"1h"});
            return res.status(200).json({
                success:1,
                message: "Successfully Login",
                data:results,
             //   token:jsontoken

            });
        })
    },

    admin_forget_password:(req,res)=>{
        const body = req.body;
      admin_forget_password(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
        
            if(!results){
                console.log(err)
                return res.json({
                    success:0,
                    message: "Invalid Email ",
                });
            }
           // const jsontoken = sign({result:results.admin_email+results.admin_password},"SZABIST_NCBC_DASHBOARD",{expiresIn:"1h"});

            return res.status(200).json({
                success:1,
                message: "Valid Eamil Address",
                data:results,
              //  token:jsontoken

            });
        })
    },


    admin_update_password:(req,res)=>{
        const body = req.body;
        const admin_id = req.params.admin_id;
        admin_update_password([body,admin_id],(err,results)=>{
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
                    message: "Unable To Updatee Password ",
                });
            }
            return res.status(200).json({
                success:1,
                message: "Password Updated Successfully",
                data:results,

            });
        })
    }


}