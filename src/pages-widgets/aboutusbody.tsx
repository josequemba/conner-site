
function AboutUsBody () {
    return <>
        <body>
            <div className="animated-element">
                {/* <!-- Header Section --> */}
                <header className="aboutus-header">
                    <h1>About Handy Repair Services</h1>
                    <p>Your trusted team for reliable and professional home repairs.</p>
                </header>
                
                           {/*  <!-- Company Overview Section --> */}
                <section className="company-overview">
                    <h2>Who We Are</h2>
                    <p>Handy Repair Services is a locally owned and operated company dedicated to providing top-notch repair and maintenance services for homes and businesses. With years of experience, our skilled team is committed to delivering quality workmanship and excellent customer service on every job.</p>
                </section>
                {/* <!-- Mission Statement Section --> */}
                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>Our mission is to make home maintenance stress-free by offering reliable, efficient, and affordable repair solutions. We strive to be the go-to experts for all your repair needs, treating every project with care, respect, and attention to detail.</p>
                </section>
                {/* <!-- Team Section --> */}
                <section className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="team1.jpg" alt="John Doe profile pic" className="team-photo"/>
                            <h3>John Doe</h3>
                            <p>Founder & Lead Technician</p>
                            <p>John brings over 15 years of experience in the repair industry, specializing in plumbing and electrical work. His dedication to quality and customer satisfaction is at the core of our business.</p>
                        </div>
                        <div className="team-member">
                            <img src="team2.jpg" alt="Jane Smith profile pic" className="team-photo"/>
                            <h3>Jane Smith</h3>
                            <p>Project Manager</p>
                            <p>Jane ensures that every job runs smoothly, coordinating our team to deliver timely and efficient service. Her organizational skills and commitment to excellence keep us on track.</p>
                        </div>
                        <div className="team-member">
                            <img src="team3.jpg" alt="Mike Johnson profile pic" className="team-photo"/>
                            <h3>Mike Johnson</h3>
                            <p>Senior Technician</p>
                            <p>Mike is our go-to expert for all things carpentry and general repairs. His eye for detail and hands-on approach ensures that every project meets the highest standards.</p>
                        </div>
                    </div>
                </section>
                {/* <!-- Core Values Section --> */}
                <section className="values">
                    <h2>Our Core Values</h2>
                    <ul className="values-list">
                        <li><strong>Integrity:</strong> We believe in honest, transparent communication and delivering on our promises.</li>
                        <li><strong>Quality:</strong> Our work reflects our commitment to excellence and attention to detail.</li>
                        <li><strong>Customer Satisfaction:</strong> Your satisfaction is our priority. We listen, we care, and we deliver.</li>
                        <li><strong>Teamwork:</strong> Collaboration and respect are at the heart of our company culture, ensuring great results every time.</li>
                    </ul>
                </section>
            </div>
        </body>
    </>
}

export default AboutUsBody;