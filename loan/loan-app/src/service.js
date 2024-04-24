import React from "react";
import res from './serv.jpg'

function Services() {
return(
   <div id="Service"> 
<div className="serviceshead">
    <h1> OUR SERVICES</h1>
</div>
<div className="servicecont">
    <div className="servitem">
    <img className='ser-img' src={res}/>
<b>Personal Loans:</b><br></br>
<ul>
<li>Unsecured personal loans</li>
<li>Fixed and variable interest</li>
<li>Flexible repayment terms</li><br></br>
</ul>
</div>
<div className="servitem">
<img className='ser-img' src={res}/>
<b>Personal Loans:</b><br></br>
<ul>
<li>Unsecured personal loans</li>
<li>Fixed and variable interest</li>
<li>Flexible repayment terms</li><br></br>
</ul>
</div>
<div className="servitem">
<img className='ser-img' src={res}/>
<b>Personal Loans:</b><br></br>
<ul>
<li>Unsecured personal loans</li>
<li>Fixed and variable interest</li>
<li>Flexible repayment terms</li><br></br>
</ul>
</div>

</div>
</div>
)

}
export default Services;