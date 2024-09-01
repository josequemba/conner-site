import { useState } from "react";
import HomeBody from "../pages-widgets/homebody";
import HomeFooter from "../pages-widgets/homefooter";
import HomeHeader from "../pages-widgets/homeheader";
import "/src/index.css";

function HomePage () {
    const Spacer = () => <div style={{ flex: 1 }} />;
    const [pageNumber, setPageNumber] = useState(0);

    return <>
        <HomeHeader getPage={(value) => setPageNumber(value)}/>

        {pageNumber === 0 ? <HomeBody/> : <Spacer />}

        <span className="fotter-in-page">
            <HomeFooter/>
        </span>
    </>
}

export default HomePage;