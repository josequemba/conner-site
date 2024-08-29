import HomeFooter from "../pages-widgets/homefooter";
import HomeHeader from "../pages-widgets/homeheader";
import "/src/index.css";

function HomePage () {
    return <>
        <HomeHeader/>
        
        <span className="fotter-in-page">
            <HomeFooter/>
        </span>
    </>
}

export default HomePage;