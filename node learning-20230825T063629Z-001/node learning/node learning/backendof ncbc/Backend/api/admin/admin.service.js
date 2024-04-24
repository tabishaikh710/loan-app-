const pool = require("../../config/database");
module.exports={

    create_admin:(data,callBack)=>{
        var query;
query = `insert into loan_detail (Employment_Type,Employee_type,CNIC_Number,
 Landline_Number, Organization_Name, Loan_Amount, Email_Addres, Salary_Credits_at_HBL, 
 Name, Mobile_Number, Nearest_City, Monthly_Net_Income, Repayment) value (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                data.Employment_Type,data.Employee_type, data.CNIC_Number,
                data.Landline_Number, data.Organization_Name, data.Loan_Amount, data.Email_Addres, data.Salary_Credits_at_HBL, 
                data.Name, data.Mobile_Number, data.Nearest_City, data.Monthly_Net_Income, data.Repayment
            ], function (err, results) {
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
    },

    get_admin:callBack=>{
        var query;
        query = `select * from loan_detail`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,null, function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 

    
    },

    get_admin_by_id:(admin_id,callBack)=>{
        var query;
        query = `select * from loan_detail where userid = ?`,
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                [admin_id],
            
            ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results[0]);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
    
    },

     admin_login:(data,callBack)=>{
            var query;
            query ='SELECT * FROM users WHERE username = ? AND password = ?';
            pool.getConnection(function (err, connection) {
                try{
                if (err) {               
                    console.log(err);
                    console.error('Database connection failed:', err);//<-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                    throw err;
                }
                connection.query(query,[ 
                    data.username,
                    data.password
                ], function (err, results) {
                 
                    connection.release();
                     if (err) {
                       callBack(error);
                     } 
                     else {
                        callBack(null, results[0]);
                    }
                });
            }
            catch (e) {
            console.log("entering catch block");
            console.log(e);
                        try{
                        connection.release();
                        }catch(e)
                        {}
            console.log("leaving catch block");
            }
            }); 
           
        },


       admin_forget_password:(data,callBack)=>{
            var query;

            query = `select admin_id from loan_detail where admin_email = ?`;
            pool.getConnection(function (err, connection) {
                try{
                if (err) {               
                    console.log(err);
                    // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                    throw err;
                }
                connection.query(query,[ 
                    data.admin_email,

                ], function (err, results) {
                
                    connection.release();
                    if (err) {
                    callBack(error);
                    } 
                    else {
                        callBack(null, results[0]);
                    }
                });
            }
            catch (e) {
            console.log("entering catch block");
            console.log(e);
                        try{
                        connection.release();
                        }catch(e)
                        {}
            console.log("leaving catch block");
            }
            }); 
                    
        },


        admin_update_password:([data,admin_id],callBack)=>{
            var query;
            query = `update loan_detail set admin_password= ? where admin_id = `+admin_id,
            pool.getConnection(function (err, connection) {
                try{
                if (err) {               
                    console.log(err);
                    // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                    throw err;
                }
                connection.query(query,[ 
                    data.admin_password,

                ], function (err, results) {
                
                    connection.release();
                    if (err) {
                    callBack(error);
                    } 
                    else {
                        callBack(null, results);
                    }
                });
            }
            catch (e) {
            console.log("entering catch block");
            console.log(e);
                        try{
                        connection.release();
                        }catch(e)
                        {}
            console.log("leaving catch block");
            }
            }); 
                    
        },


}



