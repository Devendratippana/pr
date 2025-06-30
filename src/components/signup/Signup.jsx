import React, { useState } from 'react'
import "./signup.css"

const Signup = () => {

  const[formData,setFormData] = useState({
    FirstName:'',
    LastName:'',
    EmailID:'',
    PhoneNumber:'',
  })

  const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]:event.target.value})

  }
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting...");

  const queryString = new URLSearchParams({
    firstName: formData.FirstName,
    lastName: formData.LastName,
    email: formData.EmailID,
    phone: formData.PhoneNumber,
  }).toString();

  const url = `https://script.google.com/macros/s/AKfycbyxKw6bs8dpN4Yt3qSe6Ymu2-JngUSHQIzlEhHjwzrrPDBMMysnI6QEMk77-CnodG_W/exec?${queryString}`;

  try {
    const response = await fetch(url, { method: "GET" });
    const result = await response.text();
    console.log("✅ Thank you for submitting!");
    console.log(result);
    alert("✅ Thank you for submitting!")
    setFormData({
      FirstName: "",
      LastName: "",
      EmailID: "",
      PhoneNumber: "",
    });
  } catch (error) {
    console.log(`❌ Submission failed: ${error.message}`);
    alert(`❌ Submission failed: ${error.message}`);
  }
};




  return (
    <div id="form-element" className='sign-up-container'>
        <div className='arrow-item'>
          <div className='arrow-text'>Unlimited Time on Free Plan
Make over $100 From Free Plan
No Card Details Required</div>
          <div className="custom-shape-divider-top-1750777592">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
</div>
        </div>
    
    <div className='second-fold'>
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='input-form'>
                <h4>Registration Here</h4>
                <br />
                <label htmlFor='name'>First name:</label>
                <br />
                <input type="text" name="FirstName"onChange={handleChange} value={formData.FirstName} id="name" placeholder='First Name' required/> <br />
                <label htmlFor='last-name'>Last name:</label> <br />
                <input type="text" name='LastName' value={formData.LastName} onChange={handleChange} id="last-name" placeholder='Last Name' required/> <br />
                <label htmlFor='email'>Email-ID:</label><br />
                <input type="email" name='EmailID' value={formData.EmailID} onChange={handleChange} id="email" placeholder='Email Address' required/> <br />
                <label htmlFor='ph-number'>Phone Number:</label><br />
                <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} id="ph-number" placeholder='Phone Number' required/> <br />
                <div className='btn-el'><br />
                <button className='signup-btn' type="submit">START NOW</button>
                </div>
            </form>
        </div>
        <div className='about-us '>
          <h2 className='h2'>ABOUT US</h2>
         <h4> 
AI Wealth Profit is a cutting-edge platform designed to help individuals and businesses grow their financial potential using the power of artificial intelligence. By combining advanced data analytics, predictive modeling, and smart automation, we make wealth-building smarter, faster, and more accessible.

Whether you're a beginner exploring investment opportunities or a seasoned entrepreneur looking to optimize your income streams, AI Wealth Profit offers intelligent solutions tailored to your financial goals. Our AI algorithms analyze market trends, forecast opportunities, and suggest personalized strategies to help you maximize returns with minimal effort.</h4>

        </div>

    </div>
    </div>
  )
}

export default Signup
