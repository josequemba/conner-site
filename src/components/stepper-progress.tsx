import "/src/index.css";

function StepperProgress () {
    return <>
        <span className="stepper-main">
            <div className="stepper-banner">
                <div className="stepper-title">Here is How it Works</div>
                <div className="stepper-description">
                    Provide the details of the issue, along with your location and preferred time for the repair. Once submitted, kindly confirm the information. It’s that simple.
                </div>
                <div className="stepper">
                    <div className="step active" data-step="0" onClick={()=>""}>
                        <div className="step-icon">❗</div>
                        <div className="step-title">Issue</div>
                    </div>
                    <div className="step" data-step="1" onClick={()=>""}>
                        <div className="step-icon">ℹ️</div>
                        <div className="step-title">Details</div>
                    </div>
                    <div className="step" data-step="2" onClick={()=>""}>
                        <div className="step-icon">👤</div>
                        <div className="step-title">Customer</div>
                    </div>
                    <div className="step" data-step="3" onClick={()=>""}>
                        <div className="step-icon">📅</div>
                        <div className="step-title">Schedule</div>
                    </div>
                    <div className="step" data-step="4" onClick={()=>""}>
                        <div className="step-icon">✔️</div>
                        <div className="step-title">Confirm</div>
                    </div>
                </div>
            </div>
        </span>
    </>
}

export default StepperProgress;