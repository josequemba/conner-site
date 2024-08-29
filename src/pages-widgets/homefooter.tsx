import '/src/index.css';

function HomeFooter () {
    return <footer>
        <div className="container">
            <div className="footer-section">
                <h2>Utah PowerSport Pros</h2>
                <p>© 2024 PowerSport Pros</p>
                <a href="#" className="footer-link" onClick={()=>"handleLinkClick('privacy')"}>Privacy Policy</a>
            </div>
            <div className="footer-section">
                <h2>Quick Links</h2>
                <a href="#" className="footer-link" onClick={()=>"handleLinkClick('about')"}>About Us</a>
                <a href="#" className="footer-link" onClick={()=>"handleLinkClick('services')"}>Services</a>
                <a href="#" className="footer-link" onClick={()=>"handleLinkClick('contact')"}>Contact</a>
            </div>
            <div className="footer-section">
                <h2>Follow Us</h2>
                <a href="https://www.instagram.com/utahpowersportpros?igsh=NWp5Ym9rMzJiNGlz" className="footer-link" onClick={()=>"openInstagram()"}>Instagram</a>
            </div>
        </div>
        <div className="footer-bottom">
            <hr></hr>
            <p>Services provided as-is; not liable for damages. Verify work complies with local codes and standards.</p>
        </div>
    </footer>
}

export default HomeFooter;