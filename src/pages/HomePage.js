import Hero from '../components/Hero';
import ImageGrid from '../components/ImageGrid';
import About from '../components/About';
import Courses from '../components/Courses';
import Learn from '../components/Learn';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

function HomePage() {
  return (
    <>
      <Hero />
      <ImageGrid />
      <About />
      <Courses />
      <Learn />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
}

export default HomePage;
