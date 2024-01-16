// import styles from './Navbar.module.css';
// import styled from 'styled-components'
// import React from 'react';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import logo from "../../assets/LogoNew.png"
// import { NavLink as Link } from 'react-router-dom';
// import { faBars } from '@fortawesome/free-solid-svg-icons';



// // export const Bars = styled(faBars)
// //   display: none;
// //   color: #fff;

// //   @media screen and (max-width: 768px) {
// //     display: block;
// //     position: absolute;
// //     top: 0;
// //     right: 0;
// //     transform: translate(-100%, 75%);
// //     font-size: 1.8rem;
// //     cursor: pointer;
// //   }
// // ;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   /* Second Nav */
//   /* margin-right: 24px; */

//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// function Navbar() {

//   const [barsIsHovered, setBarsIsHovered] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };


//   const barMediaQueryStyles = {
//       display: 'block',
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       transform: 'translate(-100%, 75%)',
//       fontSize: '1.8rem',
//       cursor: 'pointer',
//   };
    

//   const barsIconStyles = {
//       color: barsIsHovered ? '#F46969' : 'white',
//       fontSize: '61px',
//       display: 'block',
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       transform: 'translate(-100%, 75%)',
//       fontSize: '1.8rem',
//       cursor: 'pointer',

//     };


//   return (
//     <nav className={styles.topnav}>
//         <div className={styles.navButtonContainer}>
//         </div>
//         <div className={styles.navLogoContainer}> 
//             <a href='/'><img className={styles.navbarLogo} src={logo}></img> </a>
//         </div>

//         <div className={styles.navbarToggle} onClick={toggleDropdown}>
//           <FontAwesomeIcon icon={faBars}
//                   // onMouseEnter={() => barsIsHovered(true)}
//                   // onMouseLeave={() => setBarsIsHovered(false)}
//                   style={barsIconStyles}
//           />
//         </div>
          
        
//         {/* {screenWidth > 1300 && ( */}
//           <div className={styles.navLinksContainer}>
//               <Link to='/' className={styles.pageLink}>HOME</Link>
//               <Link to='/contact' className={styles.pageLink}>CONTACT</Link>
              // <a href='mailto:example@example.com' className={styles.pageLink}>REQUEST A QUOTE</a>
              
//           </div>
//         {/* )} */}

//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import styles from './Navbar.module.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/LogoNew.png"


const MyNavbar = () => {
  return (
    <Navbar expand="sm" >
      <Navbar.Brand  className={styles.navLogoContainer} href="/"><img className={styles.navbarLogo} src={logo}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        {/* <div className={styles.pageLinkContainer}> */}
          <Nav.Link className={styles.pageLink} href="/">
            <div className={styles.pageLinkPlacement}>
              HOME
            </div>
          </Nav.Link>
          <Nav.Link className={styles.pageLink} href="/contact">
            <div className={styles.pageLinkPlacement}>
              CONTACT
            </div>
          </Nav.Link>
          <Nav.Link className={styles.pageLink} href='mailto:topitdetailing@gmail.com'>
            <div className={styles.pageLinkPlacement}>
            REQUEST A QUOTE
            </div>
          </Nav.Link>
         

        {/* </div> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item className={styles.pageLink} href="/">HOME</NavDropdown.Item>
            <NavDropdown.Item href="/contact">CONTACT</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

