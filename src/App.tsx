import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { DocumentMetaUpdater } from "./components/DocumentMetaUpdater";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Landing from "./pages/landing/Landing";
import Diagnostic from "./pages/diagnostic/Diagnostic";
import "./styles/global.css";

const App = () => {
  return (
    <LanguageProvider>
      <DocumentMetaUpdater />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
