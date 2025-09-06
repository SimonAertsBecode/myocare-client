import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Landing from "./pages/landing/Landing";
import "./styles/global.css";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
