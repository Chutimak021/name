import React, { useState } from 'react';
import { FaUserCircle, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Profile.css'; // สไตล์ CSS
import MFU from './assets/MFU.png'; // โลโก้ MFU
import profile from './assets/profile.png'; // รูปโปรไฟล์
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// คอมโพเนนต์ Navbar ที่รองรับการเปลี่ยนภาษา
const BasicExample = ({ language }) => {
  return (
    <Navbar expand="lg" className="bg-yellow">
      <Container>
        <NavDropdown title={language === 'TH' ? 'เมนู' : 'Menu'} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">{language === 'TH' ? 'หน้าแรก' : 'Home'}</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{language === 'TH' ? 'เสื้อผ้า' : 'Clothes'}</Nav.Link>
            <Nav.Link href="#link">{language === 'TH' ? 'กระเป๋า' : 'Bag'}</Nav.Link>
            <Nav.Link href="#link">{language === 'TH' ? 'รองเท้า' : 'Shoes'}</Nav.Link>
            <Nav.Link href="#link">{language === 'TH' ? 'หมวก' : 'Hat'}</Nav.Link>
            <Nav.Link href="#link">{language === 'TH' ? 'อื่นๆ' : 'Another'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// คอมโพเนนต์หลักสำหรับหน้าโปรไฟล์
const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false); // สำหรับเปิด/ปิดเมนูโปรไฟล์
  const [language, setLanguage] = useState('EN'); // สำหรับการเปลี่ยนภาษา

  // ฟังก์ชันเปิด/ปิดเมนูโปรไฟล์
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ฟังก์ชันเปลี่ยนภาษา
  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TH' : 'EN');
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="header-content">
          <div className="header-left">
            <img src={MFU} alt="MFU Logo" className="mfu-logo" />
            <h1 style={{ fontSize: '40px' }}>MFU ECOMMERCE</h1>
          </div>
          <div className="header-center">
            <input type="text" placeholder={language === 'TH' ? 'ค้นหา...' : 'Search...'} className="search-input" />
            <FaSearch size={30} className="search-icon" />
          </div>
          <div className="header-right">
            <button className="language-button" onClick={toggleLanguage}>
              {language === 'EN' ? 'TH' : 'EN'}
            </button>
            <FaShoppingCart size={30} className="cart-icon" />
            <div className="user-profile" onClick={toggleMenu}>
              <FaUserCircle size={30} className="profile-icon" />
            </div>
            {menuOpen && (
              <ul className={`user-menu ${menuOpen ? 'show' : ''}`}>
                <li>{language === 'TH' ? 'แดชบอร์ด' : 'Dashboard'}</li>
                <li>{language === 'TH' ? 'สินค้า' : 'Product'}</li>
                <li>{language === 'TH' ? 'ประวัติการสั่งซื้อ' : 'Order History'}</li>
                <li>{language === 'TH' ? 'ออกจากระบบ' : 'Logout'}</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <BasicExample language={language} /> {/* ส่งค่าภาษาไปยังคอมโพเนนต์ BasicExample */}

      

      <section className="profile-wint">
        <h2 style={{ fontSize: '50px', marginBottom: '10px' }}>{language === 'TH' ? 'โปรไฟล์ผู้ใช้' : 'User Profile'}</h2>
        <img src={profile} alt="User Profile" style={{ width: '200px', height: '200px', marginBottom: '40px' }} />
        <p style={{ fontSize: '28px', color: '#333', marginBottom: '-70px' }}>MS. Chutima Khunhon</p>
        <p style={{ fontSize: '28px', color: '#333', marginTop: '100px' }}>{language === 'TH' ? 'รหัสนักศึกษา' : 'Student ID'}: 6531503021</p>
        <p style={{ fontSize: '28px', color: '#333', padding: '20px', borderRadius: '10px', backgroundColor: '#ffffff', marginTop: '50px' }}>
          {language === 'TH' ? 'สถานะ: นักศึกษา' : 'Status: Student'}
        </p>
      </section>

      <footer className="red-bar">
        <img src={MFU} alt="MFU Logo" className="mfu-logo1" />
        <p className="red-bar-text">MFU ECOMMERCE</p>
      </footer>
    </div>
  );
};

export default Profile;
