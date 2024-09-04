
function ContactUsBody () {
    return <>
        <body>
            <div className="animated-element">
                {/* <!-- Header Section --> */}
                <header className="contactus-header">
                    <h1>Contact Utah PowerSport Pros</h1>
                    <p>We’re here to help with all your repair needs. Get in touch today!</p>
                </header>
                {/* <!-- Contact Form Section --> */}
                <section className="contact-form-section">
                    <h2>Get in Touch</h2>
                    <form action="#" method="POST" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
                {/* <!-- Contact Details Section --> */}
                <section className="contact-details">
                    <h2>Contact Information</h2>
                    <div className="contact-info">
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Email:</strong> info@utahpowersportpros.com</p>
                        <p><strong>Address:</strong> 123 Main Street, Hometown, USA</p>
                        <p><strong>Working Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                    </div>
                </section>
                {/* <!-- Map Section --> */}
                <section className="map">
                    <h2>Our Location</h2>
                    <div className="map-container">
                        {/* <!-- Replace the src URL with your actual Google Maps embed link --> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131584453!3d-37.817327442011444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c4b6f1b7%3A0x5045675218ce6e0!2sVictoria%20Street%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625048457067!5m2!1sen!2sus" width="100%" height="400" style={{border:0}} loading="lazy"></iframe>
                    </div>
                </section>
            </div>
        </body>
    </>
}

export default ContactUsBody;