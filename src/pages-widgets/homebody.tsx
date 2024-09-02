import StepperProgress from "../components/stepper-progress";

function HomeBody () {
    return <>
    <body>
        <div className="body-container">
            <div className="body-content">
            
                <div className="text-section">
                    <h1>Expert Car & AC Repair Services</h1>
                    <p>Fast, reliable, and affordable car and air conditioning repairs you can trust. Keep your vehicle running smoothly with our expert service.</p>
                    <button className="book-button" onClick={()=>"handleBookNow()"}>Book Now</button>
                </div>

                <div className="car-image">
                    <img src="../car_d.png" alt="Car Image"/> 
                </div>
                
            </div>
        </div>
    </body>
    <StepperProgress />
    </>
}

export default HomeBody;