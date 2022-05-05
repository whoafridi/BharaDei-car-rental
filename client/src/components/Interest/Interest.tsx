import { Button } from "react-bootstrap";
import "./Interest.css";

const Interest = () => {
  return (
    <div className="container mt-4 mb-4">
      <h4 className="h1 text-center text-color">Why BharaDei?</h4>
      <div className="row">
        <div className="col text-center">
          <Button
            className="text-color mt-4 rounded-pill header-btn text-white"
            variant="warning"
          >
            Contact us <i className="bx bx-right-arrow-alt"></i>
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-1.png" alt="none"/>
          <span className="ms-2">online booking</span>
        </div>
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-2.png" alt="none"/>
          <span className="ms-2">Accepts Bkash and Nagad</span>
        </div>
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-3.png" alt="none"/>
          <span className="ms-2">Affordable Prices</span>
          <hr></hr>
        </div>
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-4.png" alt="none"/>
          <span className="ms-2">Safe and Reliable</span>
        </div>
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-5.png" alt="none"/>
          <span className="ms-2">Customer Support</span>
        </div>
        <div className="col-md-4">
          <img src="http://garivara.com.bd/assets/images/icons/why-6.png" alt="none"/>
          <span className="ms-2"> Quality Cars & Drivers</span>
        </div>
      </div>
    </div>
  );
};

export default Interest;
