import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import IdealClients from './components/IdealClients';
import Investment from './components/Investment';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="positioning">
          <Positioning />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="clients">
          <IdealClients />
        </section>
        <section id="investment">
          <Investment />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
