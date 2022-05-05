import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import Interest from "./components/Interest/Interest";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <FeaturedServices />
        <Interest />
        <Faq />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
