import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Prestations from "./components/Prestations";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
        <Projects />
        <About />
        <Prestations />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
