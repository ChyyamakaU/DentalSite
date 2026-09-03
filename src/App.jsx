import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./src/pages/Main";
import Booking from "./src/pages/Booking";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Router>
          <Route path="/" element= {<Main />}></Route>
          

          <Route path="/booking" element={<Booking />}></Route>
        </Router>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
