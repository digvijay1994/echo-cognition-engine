import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyEchos from '@/components/WhyEchos';
import Services from '@/components/Services';
import About from '@/components/About';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <FloatingElements />
      <Hero />
      <WhyEchos />
      <Services />
      <About />
    </div>
  );
};

export default Index;
