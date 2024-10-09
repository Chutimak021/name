import React, { useState } from 'react';
import { FaUserCircle, FaSearch, FaGlobe, FaShoppingCart } from 'react-icons/fa';
import './Profile.css'; // สไตล์ CSS ที่คุณจะใช้
import MFU from './assets/MFU.png';
import profile from './assets/profile.png'; // เพิ่ม import สำหรับ profile
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const BasicExample = () => {
  return (
    <Navbar expand="lg" className="bg-yellow">
      <Container>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
          
        </NavDropdown>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Clothes</Nav.Link>
            <Nav.Link href="#link">Bag</Nav.Link>
            <Nav.Link href="#link">Shoes</Nav.Link>
            <Nav.Link href="#link">Hat</Nav.Link>
            <Nav.Link href="#link">Another</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="header-content">
          <div className="header-rightt">
            <img src={MFU} alt="MFU Logo" className="mfu-logo" />
            <h1 style={{ fontSize: '40px' }}>MFU ECOMMERCE</h1>

          </div>
          <div className="header-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input" 
            />
            <FaSearch size={30} className="search-icon" />
          </div>
          <div className="header-right">
            <FaGlobe size={30} className="language-icon" />
            <FaShoppingCart size={30} className="cart-icon" />
            <div className="user-profile" onClick={toggleMenu}>
              <FaUserCircle size={30} className="profile-icon" /> 
            </div>
            {menuOpen && (
               <ul className={`user-menu ${menuOpen ? 'show' : ''}`}>
                <li>Dashboard</li>
                <li>Product</li>
                <li>Order history</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <BasicExample /> {/* เรียกใช้ BasicExample ที่นี่ */}

      <section className="profile-section">
        <h2></h2>
      </section>

      <section className="profile-wint">
        <h2 style={{ fontSize: '50px', marginBottom: '10px' }}>User Profile</h2>
        <img src={profile} alt="User Profile" style={{ width: '200px', height: '200px', marginBottom: '40px' }} />
        <p style={{ fontSize: '28px', color: '#333', marginBottom: '-70px' }}>MS. Chutima Khunhon</p>
        <p style={{ fontSize: '28px', color: '#333', marginTop: '100px' }}>Student ID: 6531503021</p>
        <p style={{ fontSize: '28px', 
                     color: '#333',
                     padding: '20px', 
                     borderRadius: '10px',
                     display: 'flex',
                     flexDirection: 'column', 
                     alignItems: 'center',
                     backgroundColor: '#ffffff',
                     marginTop: '50px' }}>Status: NORMAT</p>
      </section>

      <footer className="red-bar">
        <img src={MFU} alt="MFU Logo" className="mfu-logo1" />
        <p className="red-bar-text">MFU ECOMMERCE</p>
      </footer>

    
    </div>
  );
};

export default Profile;
