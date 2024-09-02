import "/src/index.css";

function ServicesBody () {
    return <>
        <body>
            <div className="animated-element">
                {/* <!-- Header Section --> */}
                <header className="services-header">
                    <h1>Reliable Handy Repair Services</h1>
                    <p>Your trusted partner for all home repair needs.</p>
                </header>
                {/* <!-- Services Section --> */}
                <section className="services">
                    <h2>Our Services</h2>
                    <div className="service-list">
                        <div className="service-item">
                            <h3>Plumbing</h3>
                            <p>From leaky faucets to full pipe replacements, our expert plumbers handle all your plumbing needs.</p>
                        </div>
                        <div className="service-item">
                            <h3>Electrical Repairs</h3>
                            <p>Safe and reliable electrical repair services, including outlet fixes, wiring, and lighting installations.</p>
                        </div>
                        <div className="service-item">
                            <h3>Painting & Decorating</h3>
                            <p>Professional painting services to give your home a fresh look, including interior and exterior painting.</p>
                        </div>
                        <div className="service-item">
                            <h3>Carpentry</h3>
                            <p>Custom carpentry solutions for furniture repairs, shelving installations, and more.</p>
                        </div>
                        <div className="service-item">
                            <h3>General Repairs</h3>
                            <p>We fix doors, windows, drywall, and other general repairs to keep your home in top shape.</p>
                        </div>
                    </div>
                </section>
                {/* <!-- Testimonials Section --> */}
                <section className="testimonials">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonial-item">
                        <p>"Great service! They fixed my leaking sink quickly and professionally. Highly recommend!"</p>
                        <span>- John Doe</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"Reliable and efficient. Their carpentry work transformed my living room."</p>
                        <span>- Jane Smith</span>
                    </div>
                </section>
                {/* <!-- Call to Action Section --> */}
                <section className="cta">
                    <h2>Ready to Get Started?</h2>
                    <p>Contact us today for a free quote on your next home repair project.</p>
                    <a href="#contact" className="cta-button">Get a Quote</a>
                </section>
              
                <script src="script.js"></script>
            </div>
        </body>
    </>
}

export default ServicesBody;