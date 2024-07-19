import React from 'react';
import classes from './footer.module.css';

export default function Footer() {

  return (
    <>
         <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerSection}>
          <h2>About Us</h2>
         <p>
         Founder: Rahul Rana <br />
         Sinse: 1997        <br />
         Leadership Team   <br />
         Values In Action   <br />
         Franchise Info     <br />
         Recalls & Alerts   <br />
         Real Estate        <br />
         Accessibility      <br />
         Investor Relations  <br />
         News & Notifications <br /> 
         </p>
        </div>
        <div className={classes.footerSection}>
          <h2>Services</h2>
          <p>
           Services Overview <br />
          Wi-Fi             <br />
          PlayPlaces & Parties<br />
          HungerZ Delivery®<br />
          Mobile Order & Pay<br />
          Trending Now<br />
          HungerZ Merchandise<br />
          Family Fun Hub<br />
          Discount & Rewards<br />
          HungerZ_Café<br /> 
         </p>
        </div>
        <div className={classes.footerSection}>
          <h2>Contact Us</h2>
          <p><a href="mailto:HungerZ@email.com">Email Us: HungerZ@gmail.com</a></p>
          <p><a href="tel:+1234567890">Phone: +91 7018789304</a></p>
        </div>
        <div className={classes.footerSection}>
        <h2>Follow Us</h2>
<div className={classes.socialicons}>
  <ul>
        <li><a href="https://www.linkedin.com/in/rahul-rana-1189b6213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src="https://cdn-icons-png.flaticon.com/128/2626/2626273.png" alt="LinkedIn" /></a></li>
        <li><a href="https://www.instagram.com/rahul.rana01"><img src="https://cdn-icons-png.flaticon.com/128/3621/3621435.png" alt="Instagram" /></a></li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/3665/3665167.png" alt="Facebook" /></li>
        <li><a href="https://youtube.com/@ShivaniThakur92?si=Ene_BRBdLLim3V12"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409936.png" alt="YouTube" /></a></li>
  </ul>
           
          </div>
         
        </div>
  
      </div>
      <div className={classes.footerSectionLast}>
  <p>&copy; 2024 Hunger'Z All rights reserved.</p>
</div>

    </footer>
    
    </>
  )
}
