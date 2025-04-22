import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaInfoCircle, FaPhone } from "react-icons/fa";
import './Topbar.css';
import { FaMoneyBill } from 'react-icons/fa';

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null); // <-- NEW
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // NEW: Close menu if clicking outside sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current &&
        !sidebarRef.current.contains(event.target) && 
        burgerRef.current &&
        !burgerRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="topbar">
      {/* Burger Icon */}
      <div ref={burgerRef} onClick={toggleMenu} className="burger">
        ☰
      </div>

      {/* Website Title */}
      <div className='topbar-center'>
        <Link to="home" className="topbar-title">KONEVUOKRAUS</Link>
      </div>

      <div className="topbar-right"></div>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${menuOpen ? "open" : ""}`}>
        <Link to="home" className="sidebar-link1" onClick={toggleMenu}>
          <GoHomeFill style={{ marginRight: '8px' }} /> Kotisivu
        </Link>
        <Link to="about" className="sidebar-link" onClick={toggleMenu}>
          <FaInfoCircle style={{ marginRight: '8px' }} /> Koneet
        </Link>
        <Link to="hinnasto" className="sidebar-link" onClick={toggleMenu}>
  <FaMoneyBill style={{ marginRight: '8px' }} /> Hinnasto
</Link>
        <Link to="contact" className="sidebar-link" onClick={toggleMenu}>
          <FaPhone style={{ marginRight: '8px' }} /> Yhteystiedot
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
