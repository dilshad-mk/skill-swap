import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer-wrapper'>
         <div className="cta-section">
            <h3>Ready to Start Your Learning Journey?</h3>
            <p>
Join thousands of people exchanging skills every day. No credit card required.</p>
<div className="buttons_footer">
    <button>Get Started Free <i class="bi bi-arrow-right"></i></button>
    <button>Watch Demo</button>
</div>
         </div>

         <footer>
            <div className='upper-footer'>
                <div className="grid-footer">
                    <div className="grid-item-logo">
                        <div><img src="images/skill-swap-logo.png" alt="" /></div>
                        <p>The world's leading peer-to-peer skill exchange platform.</p>
                    </div>
                    <div className="grid-item">
                        <div><h6>Product</h6></div>
                          <div className='lists'>
                            <ul>
                                
                                <li>Features</li>
                                <li>How It Works</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                            </ul>
                          </div>
                    </div>
                    <div className="grid-item">
                        <div><h6>Company</h6></div>
                          <div className='lists'>
                            <ul>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                          </div>
                    </div>
                    <div className="grid-item">
                        <div><h6>Legal</h6></div>
                          <div className='lists'>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                                <li>Guidelines</li>
                            </ul>
                          </div>
                    </div>
                </div>
            </div>


            <div className='lower-footer'>
                <div><h6>© 2026 SkillSwap. All rights reserved.</h6></div>
                <div className='social_links'><ul>
                    
                    <li> Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    </ul>
                    </div>
            </div>
         </footer>
    </div>
  )
}

export default Footer