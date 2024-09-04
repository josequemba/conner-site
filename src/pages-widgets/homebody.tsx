import StepperProgress from "../components/stepper-progress";

function HomeBody () {
    return <>
        <body>
            <div className="animated-element" >
                <div className="body-container">
                    <div className="body-content">
                
                        <div className="text-section">
                            <h1>UTV, ATV, Mechanical, and Home Repair Services</h1>
                            <p>Get fast, reliable, and affordable ATV and UTV repairs you can trust. Our expert mobile on-site services bring tune-ups and repairs right to your location, keeping your off-road vehicles running smoothly without disrupting your adventures.</p>
                            <button className="book-button" onClick={()=>"handleBookNow()"}>Book Now</button>
                        </div>
                        <div className="car-image">
                            <img src="../utv.webp" alt="Car Image"/>
                        </div>
                
                    </div>
                </div>
            </div>
            <StepperProgress />
        </body>
    
    </>
}

export default HomeBody;