import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navbar/Navbar";
import Porfolio from "./components/Porfolio/Porfolio";
import Contributions from "./components/Contributions/Contributions";
import MyStack from "./components/MyStack/MyStack";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, [hash]);

  return (
    <div className="app">
      <NavBar />
      <FrontPage />
      <MyStack />
      <Porfolio />
      <Contributions />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
