import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main.jsx';
import CheckPage from './pages/check.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <Router> {/* ✅ Router가 최상위에서 감싸야 함 */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage selected={selected} setSelected={setSelected} />} />
        <Route path="/check" element={<CheckPage selected={selected} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
