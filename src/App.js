import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        {/* main content */}
        <HomeCarousel />
        <About />
        <Services />
        <Works />
        <Blog />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
