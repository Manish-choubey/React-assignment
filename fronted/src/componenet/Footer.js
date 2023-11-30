import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: '#2d2d2d',
  color: '#fff',
  padding: '60px 20px',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
};

const socialLinksStyle = {
  marginBottom: '30px',
};

const sectionStyle = {
  flex: '1',
  margin: '0 20px',
  maxWidth: '300px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '16px',
  transition: 'color 0.3s ease-in-out',
};

const linkHoverStyle = {
  color: '#ffcc00',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '24px',
  verticalAlign: 'middle',
};

const titleStyle = {
  color: '#ffcc00',
  marginBottom: '30px',
  fontSize: '28px',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Company Name</h3>
        <p style={{ fontSize: '14px' }}>A brief description of the company goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec venenatis turpis. Quisque et nunc nec felis fermentum tincidunt vitae id velit.</p>
      </div>

      <div style={sectionStyle}>
        <h3 style={titleStyle}>Quick Links</h3>
        <ul style={listStyle}>
          <li>
            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={titleStyle}>Contact Us</h3>
        <p style={{ fontSize: '14px' }}>
          Address: 123 Main St, Cityville<br />
          Email: info@example.com<br />
          Phone: (123) 456-7890
        </p>
      </div>

      <div style={socialLinksStyle}>
        {/* Social Links with Icons */}
        <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
          <FaFacebook style={iconStyle} />
          Facebook
        </a>
        {' | '}
        <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
          <FaTwitter style={iconStyle} />
          Twitter
        </a>
        {' | '}
        <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
          <FaInstagram style={iconStyle} />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
