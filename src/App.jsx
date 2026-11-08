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
        <nav>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/elections">Elections</NavLink> |
          <NavLink to="/results">Results</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/results" element={<Results />} />
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;