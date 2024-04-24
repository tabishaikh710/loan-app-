import React, { useState } from 'react';
// import axios from 'axios';


function Logpage() {
    const [formData, setFormData] = useState({
        Employment_Type: '',
        Employee_type: '',
        CNIC_Number: '',
        Landline_Number: '',
        Organization_Name: '',
        Loan_Amount: '',
        Email_Addres: '',
        Salary_Credits_at_HBL: '',
        Name: '',
        Mobile_Number: '',
        Nearest_City: '',
        Monthly_Net_Income: '',
        Repayment: '',
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate the form data here (add your validation logic)
    
        // Use fetch or Axios to post the data to your API endpoint
        try {
          const response = await fetch('http://localhost:5000/api/admin/makeadmin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSubmitted(true);
          } else {
            console.log('not submited')
          }
        } catch (error) {
          console.log(error.message)
        }
      };
    
      return (
        <div>
          {submitted ? (
            <div>
              <h2>Form submitted successfully!</h2>
             
            </div>
          ) : (
            <form  className='form' onSubmit={handleSubmit}>
                <h3 className='text'><b>Apply For Personal Loan</b></h3><br></br>
       <h1><b>A loan for every dream</b></h1>
              <div>
                <label className='flab'>Employment Type:</label>
                <select
                  name="Employment_Type"
                  value={formData.Employment_Type}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Salaried Individual">Salaried Individual</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
    
              <div>
                <label className='flab'>Employee Type:</label>
                <select
                  name="Employee_type"
                  value={formData.Employee_type}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Government">Government</option>
                  <option value="Private">Private</option>
                  <option value="Pensioner">Pensioner</option>
                </select>
              </div>
    
              <div>
                <label className='flab'>CNIC Number:</label>
                <input
                  type="text"
                  name="CNIC_Number"
                  value={formData.CNIC_Number}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Landline Number:</label>
                <input
                  type="text"
                  name="Landline_Number"
                  value={formData.Landline_Number}
                  onChange={handleChange}
                />
              </div>
    
              <div className='flab'>
                <label>Organization Name:</label>
                <input
                  type="text"
                  name="Organization_Name"
                  value={formData.Organization_Name}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Loan Amount:</label>
                <input
                  type="text"
                  name="Loan_Amount"
                  value={formData.Loan_Amount}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Email Address:</label>
                <input
                  type="email"
                  name="Email_Addres"
                  value={formData.Email_Addres}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Salary Credits at HBL:</label>
                <select
                  name="Salary_Credits_at_HBL"
                  value={formData.Salary_Credits_at_HBL}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
    
              <div>
                <label className='flab'>Name:</label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Mobile Number:</label>
                <input
                  type="text"
                  name="Mobile_Number"
                  value={formData.Mobile_Number}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Nearest City:</label>
                <select
                  name="Nearest_City"
                  value={formData.Nearest_City}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
    
              <div>
                <label className='flab'>Monthly Net Income:</label>
                <input
                  type="text"
                  name="Monthly_Net_Income"
                  value={formData.Monthly_Net_Income}
                  onChange={handleChange}
                />
              </div>
    
              <div>
                <label className='flab'>Repayment:</label>
                <select
                  name="Repayment"
                  value={formData.Repayment}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="12 months (1 year)">12 months (1 year)</option>
                  <option value="24 months (2 years)">24 months (2 years)</option>
                </select>
              </div>
    
              <button className='btn' type="submit">Submit</button>
            </form>
          )}
        </div>
      );
    }

export default Logpage;