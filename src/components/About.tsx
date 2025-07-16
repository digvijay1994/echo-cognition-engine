import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Globe, Users, Mail } from 'lucide-react';

const About = () => {
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
              }, index * 200);
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

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background neural network effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-float"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why Echos Section */}
          <Card className="neural-border overflow-hidden animate-on-scroll">
            <CardContent className="p-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-glow">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Why{' '}
                    <span className="glow-text gradient-hero bg-clip-text text-transparent">
                      "Echos"?
                    </span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Our name reflects our belief that the most powerful systems don't just store data—they{' '}
                      <span className="text-primary font-semibold">amplify intelligence</span>.
                    </p>
                    <p>
                      They listen. They learn. They echo back what matters,{' '}
                      <span className="glow-text text-accent">louder and clearer</span>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Presence */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="neural-border hover-lift animate-on-scroll">
              <CardContent className="p-8 text-center space-y-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-purple-500 shadow-glow">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Global Reach</h3>
                <p className="text-muted-foreground">
                  Ready-to-deploy lighthouse squad of Forward Deployed Engineers across US and India
                </p>
                <div className="flex justify-center space-x-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">United States</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">India</span>
                </div>
              </CardContent>
            </Card>

            <Card className="neural-border hover-lift animate-on-scroll">
              <CardContent className="p-8 text-center space-y-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent to-purple-500 shadow-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Join Our Mission</h3>
                <p className="text-muted-foreground">
                  Building thinking systems for enterprises that push technical boundaries while delivering exponential value
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">hr@echo-s.ai</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="neural-border overflow-hidden animate-on-scroll">
            <div className="gradient-hero p-px rounded-2xl">
              <CardContent className="bg-background rounded-2xl p-12 text-center space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Let's build your{' '}
                  <span className="glow-text gradient-hero bg-clip-text text-transparent">
                    digital brain
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Partner with Echos to build systems that not only scale—but think.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-3 gradient-neural p-4 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">hello@echo-s.ai</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 gradient-neural p-4 rounded-xl">
                    <Globe className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Website</div>
                      <div className="font-medium">www.echo-s.ai</div>
                    </div>
                  </div>
                </div>

                <div className="data-flow h-px w-32 mx-auto opacity-50" />
                
                <p className="text-muted-foreground italic">
                  "The most powerful systems don't just store data—they amplify intelligence."
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;