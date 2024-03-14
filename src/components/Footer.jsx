import React from 'react';
const thisYear = new Date().getFullYear();

 function Footer() {
    return (
      <footer>
        <p>copyright @{thisYear}</p>
      </footer>
    );
 }
 export default Footer;
