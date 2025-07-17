import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Network, Target } from 'lucide-react';

const WhyEchos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [headingAnimated, setHeadingAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
            // Trigger heading animation
            setHeadingAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Brain,
      title: "Cognitive Engineering",
      description: "We don't just plug in tools—we engineer cognition into your core systems.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Network,
      title: "Integrated Intelligence",
      description: "Get systems that understand, adapt, and drive impact across every function, every day.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Zap,
      title: "Real-World Outcomes",
      description: "Transform fragmented data and slow decision-making into unified, intelligent action.",
      gradient: "from-primary to-purple-500"
    },
    {
      icon: Target,
      title: "Enterprise-Grade",
      description: "Built for the complexity of enterprise landscapes with proven scalability.",
      gradient: "from-purple-500 to-primary"
    }
  ];

  return (
    <section id="why-echos" ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold animate-on-scroll px-4">
            Why enterprises{' '}
            <span className={`slide-in-text glow-text ${headingAnimated ? 'animate' : ''}`}>
              choose us
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-on-scroll px-4">
            The enterprise landscape is complex. Data is fragmented. Decision-making is slow. 
            We don't just plug in tools—we engineer cognition into your core systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index} 
                className="neural-border hover-lift animate-on-scroll group cursor-pointer"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-glow`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-20 text-center animate-on-scroll px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gradient-neural px-4 sm:px-8 py-4 rounded-full max-w-4xl mx-auto">
            <span className="text-sm sm:text-lg font-medium text-center">With Echos, you get more than transformation.</span>
            <div className="data-flow h-px w-8 sm:w-16 hidden sm:block" />
            <span className="text-sm sm:text-lg font-medium glow-text text-center">You get systems that think.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEchos;