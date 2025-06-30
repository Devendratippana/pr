import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>

        <div className='bottom-part'>
            <div className='rights'>
               &#169; 2025 AI Weath Profit .All rights reserved
            </div>
            <div className='terms'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Cookies</p>
            </div>
        <h5 className='statement'>
           EARNINGS DISCLAIMER: Any earnings or income statements, or earnings or income examples, are only estimates of what we think you could earn. There is no assurance you'll do as well. Your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic.
            </h5>
        <h5 className='statement'>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK,Inc.
        </h5>
        </div>
      
    </div>
  )
}

export default Footer
