const router = require("express").Router();


const {
  
    create_admin,
    get_admin,
    get_admin_by_id,
    admin_login,
    admin_forget_password,
    admin_update_password
} = require("./admin.controller")



router.post("/makeadmin",create_admin);
router.get("/make_admin",get_admin);

router.get("/:admin_id",get_admin_by_id);
router.post("/login",admin_login);
router.post("/admin_forget_password",admin_forget_password)
router.patch("/admin_update_password/:admin_id",admin_update_password)



module.exports = router;