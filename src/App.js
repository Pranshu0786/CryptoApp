import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinDetails from "./Components/CoinDetails";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
