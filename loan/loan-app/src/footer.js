import React from "react";

function Footer() {
return(

<div className="footer">
   <footer> 
    <column>
    
<div className="links">
<h1>Links</h1>
<p> home   </p>
<p>Contact us</p>
<p>About us</p>
</div>


<div className="Contact">
<br></br>
<h1>contact</h1>
<p><b>Address:</b></p>
<p> Block 7, F.B.Area, Karachi Pakistan</p>
<p><b>Hours: </b></p>
<p>MON - FRI 9am-5pm</p>
</div>
</column>

<p className="footcompany">
<form>
<h1>lumber1</h1>
 <label> Email </label><br></br>
    <input type="email" placeholder="Enter your Email"></input>
 <button className="footbtn"Send></button>


</form>
</p>

</footer>
</div>




)

}
export default Footer;