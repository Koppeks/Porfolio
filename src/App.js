import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navbar/Navbar";
import Porfolio from "./components/Porfolio/Porfolio";
import Contributions from "./components/Contributions/Contributions";
import MyStack from "./components/MyStack/MyStack";
import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="app">
      <NavBar/>
      <FrontPage/>
      <MyStack/>
      <Porfolio/>
      <Contributions/>
      <AboutMe/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
