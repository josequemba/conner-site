import { useState, useEffect } from "react";
import HomeBody from "../pages-widgets/homebody";
import HomeFooter from "../pages-widgets/homefooter";
import HomeHeader from "../pages-widgets/homeheader";
import "/src/index.css";
import ServicesBody from "../pages-widgets/servicesbody";

function HomePage() {
  const [pageNumber, setPageNumber] = useState(0);
  const [realHeight, setRealHeight] = useState(window.innerHeight);

  const screenHeight = window.screen.height;
  console.log('Screen Height:', screenHeight);

  const viewportHeight = window.innerHeight;
  console.log('Viewport Height:', viewportHeight);

  console.log('Rest of Height:', realHeight);


  useEffect(() => {
    const updateHeights = () => {
      const nav = document.querySelector('nav');
      const footer = document.querySelector('footer');
      const navHeight = nav ? nav.offsetHeight : 80;
      const footerHeight = footer ? footer.offsetHeight : 285;

      setRealHeight(window.innerHeight - navHeight - footerHeight);
    };

    // Update heights initially
    updateHeights();

    // Update heights on window resize
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, [pageNumber]); // Optionally include pageNumber if heights change based on pageNumber

  return (
    <>
      <HomeHeader getPage={(value) => setPageNumber(value)} />

      {
        pageNumber === 0 && <HomeBody /> 
      }

      {
        pageNumber === 1 && <ServicesBody /> 

        /* : <div style={{ height: realHeight }}></div> */
      }
    
      <span className="footer-in-page">
        <HomeFooter />
      </span>
    </>
  );
}

export default HomePage;