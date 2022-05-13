import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Accommodations from "./Components/Accomodations";
import Footer from "./Components/Footer";
import Listing from "./Components/Listing";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accommodations />}/>
          <Route path="/about" element={<About />} />
          <Route path="/listing" element={<Listing />} >
            <Route path=":postSlug" element={<Listing />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
