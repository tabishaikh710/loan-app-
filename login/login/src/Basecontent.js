import { useState,useEffect } from 'react';
// import Userinfo from './Components/Userinfo';



function Basecontent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/make_admin');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.message);
      } else {
        console.error('Error fetching product data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  

  return (
    
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">User Data</h5>
            <table className="table table-bordered">
              <thead className="table table-border">
                <tr>
                 
                  <th>userid</th>
                  <th>Salary_Credits_at_HBL</th>
                  <th>Employment Type</th>
                  <th>Government/Private Employee</th>
                  <th>CNIC Number</th>
                  <th>Landline Number</th>
                  <th>Organization Name</th>
                  <th>Loan Amount</th>
                  <th>Email Address</th>
                  <th>Salary Credits at HBL</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Nearest City</th>
                  <th>Monthly Net Income</th>
                  <th>Repayment Period</th>
                </tr>
              </thead>
              <tbody>
              {products.map((product) => (
              <tr key={product.userid}>
            <td>{product.userid}</td>
            <td>{product.Salary_Credits_at_HBL}</td>
            <td>{product.CNIC_Number}</td>
            <td>{product.Email_Addres}</td>
            <td>{product.Employee_type}</td>
            <td>{product.Employment_Type}</td>
            <td>{product.Landline_Number}</td>
            <td>{product.Loan_Amount}</td>
            <td>{product.Mobile_Number}</td>
            <td>{product.Monthly_Net_Income}</td>
            <td>{product.Name}</td>
            <td>{product.Nearest_City}</td>
            <td>{product.Organization_Name}</td>
            <td>{product.Repayment}</td>
           
          </tr>  
           ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
  )
}

export default Basecontent;
