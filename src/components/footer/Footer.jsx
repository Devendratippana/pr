import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='top-part'>
            <div className='logo'>
                <img src="/memory_80dp_9B5278_FILL0_wght400_GRAD0_opsz48.svg" alt="logo" />
                <div className='text'>
                    <h3>AI Wealth Profit</h3>
                    <p className='text-p'>Automatical income Generation</p>
                </div>
            </div>
            <div className='legal'>
                <h3>Legal</h3>
                <p>Terms&conditions</p>
                <p>privacy  policy</p>
                <p>Earnings Disclaimer</p>
                <p>Refund Policy</p>
            </div>
            <div className='support'>
                <h3>Support</h3>
                <p>Contact us</p>
                <p>FAQ</p>
                <p>HELP Center</p>

            </div>
        </div>
        <div className='bottom-part'>
            <div className='rights'>
               &#169; 2025 AI Weath Profit .All rights reserved
            </div>
            <div className='terms'>
                <p>Support</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        <p className='statement'>
            AI Creators Cashflow provides educational resources and tools to support creators in leveraging AI technologies for income generation. Results may vary based on individual effort and application.
            </p>
        </div>
      
    </div>
  )
}

export default Footer
