import VoterList from "./components/VoterList";
import ElectionList from "./components/ElectionList";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return <h2>Welcome to Election Voting System</h2>;
}

function Elections() {
  return <h2>Active Elections</h2>;
}

function Results() {
  return <h2>Election Results</h2>;
}

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/elections" element={<ElectionList />} />
            <Route path="/voters" element={<VoterList />} />
          <Route path="/results" element={<Results />} />
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;