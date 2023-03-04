import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Main />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
