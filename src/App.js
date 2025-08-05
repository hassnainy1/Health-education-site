import Header from './components/Header';
import Hero from './components/Hero';
import ImageGrid from './components/ImageGrid';
import About from './components/About';
import Courses from './components/Courses';
import Learn from './components/Learn';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ImageGrid />
      <About />
      <Courses />
      <Learn />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
