import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Reviews from '../components/Reviews';
import Advantages from '../components/Advantages';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Quiz from '../components/Quiz';
import AnimatedDrumButton from '../components/AnimatedDrumButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Reviews />
      <Advantages />
      <AboutUs />
      <Quiz />
      <ContactForm />
      <Footer />
      <AnimatedDrumButton />
    </main>
  );
}