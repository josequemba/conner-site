import { useState } from "react";
import HomeBody from "../pages-widgets/homebody";
import HomeFooter from "../pages-widgets/homefooter";
import HomeHeader from "../pages-widgets/homeheader";
import "/src/index.css";
import ServicesBody from "../pages-widgets/servicesbody";
import AboutUsBody from "../pages-widgets/aboutusbody";
import ContactUsBody from "../pages-widgets/contactusbody";
import PrivicyPolicy from "../pages-widgets/pricacypolicy";

function HomePage() {
  const savedPage = parseInt(localStorage.getItem("currentPage") || "0")
  const [currentPage, setCurrentPage] = useState(savedPage);

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
      case 4:
        return <PrivicyPolicy />
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
      <div>{renderPageContent()}</div>

      <span className="footer-in-page">
        <HomeFooter 
          footerLinks={
            (value)=> {
              setCurrentPage(value);
          }}
        />

      </span>
    </>
  );
}

export default HomePage;