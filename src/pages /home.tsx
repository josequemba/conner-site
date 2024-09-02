import { useState, useEffect } from "react";
import HomeBody from "../pages-widgets/homebody";
import HomeFooter from "../pages-widgets/homefooter";
import HomeHeader from "../pages-widgets/homeheader";
import "/src/index.css";
import ServicesBody from "../pages-widgets/servicesbody";
import AboutUsBody from "../pages-widgets/aboutusbody";
import ContactUsBody from "../pages-widgets/contactusbody";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [realHeight, setRealHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeights = () => {
      const nav = document.querySelector('nav');
      const footer = document.querySelector('footer');
      const navHeight = nav ? nav.offsetHeight : 80; // Default value if nav is not available
      const footerHeight = footer ? footer.offsetHeight : 285; // Default value if footer is not available

      // Update the height considering nav and footer sizes
      setRealHeight(window.innerHeight - navHeight - footerHeight);
    };

    // Initial height calculation
    updateHeights();

    // Update on window resize
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return <HomeBody />;
      case 1:
        return <ServicesBody />;
      case 2:
        return <AboutUsBody />;
      case 3:
        return <ContactUsBody />;
      default:
        return <HomeBody />;
    }
  };

  return (
    <>
      <HomeHeader
        getPage={(value) => {
          setCurrentPage(value);
        }}
      />

      {/* Render the content based on the current page */}
      <div style={{ minHeight: realHeight }}>{renderPageContent()}</div>

      <span className="footer-in-page">
        <HomeFooter />
      </span>
    </>
  );
}

export default HomePage;