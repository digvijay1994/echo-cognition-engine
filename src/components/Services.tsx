import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Database, Cpu, Settings, Rocket } from 'lucide-react';
import foundryImage from '@/assets/foundry-interface.jpg';
import enterpriseImage from '@/assets/enterprise-tech.jpg';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
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

  const services = [
    {
      icon: Database,
      title: "Foundry-First Deployment",
      description: "As official partners, we accelerate implementation and orchestration of Palantir Foundry stack for real-world outcomes",
      image: foundryImage,
      features: ["Rapid Implementation", "Custom Orchestration", "Real-world Outcomes"]
    },
    {
      icon: Cpu,
      title: "Deep Tech Integration",
      description: "Architect and implement scalable, secure intelligence platforms leveraging engines and technologies of tomorrow not limited to AI and Quantum",
      image: enterpriseImage,
      features: ["AI Integration", "Quantum Computing", "Scalable Architecture"]
    },
    {
      icon: Settings,
      title: "Enterprise OS Design",
      description: "Build cognitive operating layers tailored to business-critical functions",
      image: enterpriseImage,
      features: ["Custom OS Layers", "Business Integration", "Cognitive Systems"]
    },
    {
      icon: Rocket,
      title: "Build Zero-to-One AI Systems",
      description: "From vision to production—we build what others only prototype",
      image: foundryImage,
      features: ["Vision to Production", "Prototype to Scale", "End-to-end Development"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute inset-0 gradient-data opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold animate-on-scroll">
            What we{' '}
            <span className="glow-text gradient-hero bg-clip-text text-transparent">
              do
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
            The Engines of Tomorrow, Working for You Today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="neural-border hover-lift animate-on-scroll group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/20 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 text-center space-y-8 animate-on-scroll">
          <div className="gradient-neural p-8 rounded-3xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              We believe the next enterprise advantage isn't automation—it's{' '}
              <span className="glow-text text-primary">cognition</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              With Echos, you get a thinking system that works for enterprises—built to deliver 
              clarity, speed, and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;