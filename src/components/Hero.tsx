import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Brain, Zap, Network } from 'lucide-react';
import heroImage from '@/assets/hero-digital-brain.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textAnimated, setTextAnimated] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Trigger text animation after component mounts
    const timer = setTimeout(() => {
      setTextAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const FloatingParticle = ({ delay, size }: { delay: number; size: number }) => (
    <div
      className={`particle opacity-30`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">{/* Added pt-16 for nav space */}
      {/* Neural grid background */}
      <div className="absolute inset-0 neural-grid" />
      
      {/* Animated background particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} size={4 + Math.random() * 8} />
      ))}

      {/* Dynamic gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-8 w-8 text-primary animate-float-gentle" />
              <span className="text-lg font-medium tracking-wider text-primary">ECHOS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              We build the{' '}
              <span 
                ref={textRef}
                className={`slide-in-text glow-text ${textAnimated ? 'animate' : ''}`}
              >
                digital brain
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              thinking system for the enterprise
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Echos is a deep tech services and solutions company on a mission to rewire how 
              enterprises think, decide, and scale. We are official partners of Palantir and 
              trusted builders who've designed and scaled AI products from zero to one across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="gradient-hero text-black font-semibold hover:shadow-glow transition-all duration-300">
                Let's Build Your Digital Brain
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="neural-border hover-lift">
                Learn More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Official Palantir Partners</span>
              </div>
              <div className="data-flow h-px w-20" />
              <span className="text-sm text-muted-foreground">US & India</span>
            </div>
          </div>

          <div className="relative floating-element">
            <div className="absolute inset-0 gradient-neural rounded-3xl blur-xl opacity-50" />
            <img
              src={heroImage}
              alt="Digital Brain Visualization"
              className="relative z-10 rounded-3xl shadow-neural w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;