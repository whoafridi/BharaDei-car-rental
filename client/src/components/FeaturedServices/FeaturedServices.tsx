import { Button, Card } from "react-bootstrap";

const FeaturedServices = () => {
  return (
    <div className="container">
      <div className=" row">
        <div className="col-md-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://s.yimg.com/ny/api/res/1.2/V0j23eHwbSaRuDbPQYtVPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNQ--/https://s.yimg.com/uu/api/res/1.2/gIyTnWza517bCWfrdM.wPw--~B/aD00OTg7dz03NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/c19079d6005411ab14b7b6962c1b4455"
            />
            <Card.Body>
              <Card.Title>Need a Car in Dhaka?</Card.Title>
              <img src="http://garivara.com.bd/assets/upload/page_home/reg_online.png" />
              <Card.Text>
                Renting/Booking a Car is just few clicks away!
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="http://garivara.com.bd/assets/upload/page_home/pic-2.jpg"
            />
            <Card.Body>
              <Card.Title>Offers & Packages</Card.Title>
              <img src="http://garivara.com.bd/assets/upload/page_home/offer.png" />
              <Card.Text>
                Our Car Rental packages that will cover you well!
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://5.imimg.com/data5/WU/PN/GLADMIN-2/luxury-car-rental-500x500.jpg"
            />
            <Card.Body>
              <Card.Title>Make Money From Your Car</Card.Title>
              <img src="http://garivara.com.bd/assets/upload/page_home/106923296.png" />
              <Card.Text>RENT YOUR CAR WITH US</Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
