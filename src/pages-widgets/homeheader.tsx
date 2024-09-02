import { useState } from 'react';
import '/src/index.css';
import { useEffect } from 'react';

interface Props {
  getPage (params: any): void;
}

function HomeHeader({getPage}: Props) {
  const menuOptions = ['Home', 'Services', 'About Us', 'Contact Us'];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavButtonClick = (index: any) => {
    setSelectedIndex(index);
    getPage(index);
  };

  const handleClickHumMenu = () => {
    return document.querySelector(".menu-bar")?.classList.add("menu-bar-active");
  };

  const handlePageClick = (event: MouseEvent) => {
    const menuBar = document.querySelector(".menu-bar");
    const menuBarActive = document.querySelector(".menu-bar-active");
    const humMenu = document.querySelector(".menu-icon");

    // Check if the click is outside the menu-bar and if menu-bar-active class is present
    if (event.target !== menuBar && menuBarActive && humMenu) {
      menuBar?.classList.remove("menu-bar-active");
    }
    if (event.target === humMenu) {
      document.querySelector(".menu-bar")?.classList.add("menu-bar-active");
    }

  };

  // Adding the event listener on component mount and cleaning up on unmount
  useEffect(() => {
    // Add event listener to the document to detect clicks
    document.addEventListener('click', handlePageClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <nav className='container-nav'>
        <a className="logo-custom navbar-brand logo-name d-flex align-items-center" href="#">
          <img
            src="../logo.webp"
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block"
            onClick={() => handleNavButtonClick(0)}
          />
          <span className="ms-2" onClick={() => handleNavButtonClick(0)}>
            Utah PowerSport Pros
          </span>
        </a>

        <div className='menu-icon' onClick={handleClickHumMenu}>☰</div>

        <>
          {menuOptions.map((item, index) => (
            <button className='btn-menu' style={{color: index === selectedIndex ? 'blue' : 'black'}}
              key={index}
              onClick={() => handleNavButtonClick(index)}>
              {item}
            </button>
          ))}

          <button className='btn-appointment-1' onClick={() => console.log('Appointment Now')}>
            Appointment Now
          </button>
        </>
        
        <div className='menu-bar'>
          {menuOptions.map((item, index) => (
            <div className='hum-menu-item' style={{color: index === selectedIndex ? 'blue' : 'black'}}
              key={index}
              onClick={() => handleNavButtonClick(index)}>
              {item}
            </div>
          ))}

          <button className='btn-appointment-2' key={5} onClick={() => console.log(5)}>
            Appointment Now
          </button>
        </div>
        
  
      </nav>
    </>
  );
}

export default HomeHeader;
