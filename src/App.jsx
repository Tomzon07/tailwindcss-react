import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services/>
      <About/>
      <LearnMore/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
