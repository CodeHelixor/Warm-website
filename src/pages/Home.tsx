import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Phone, Users } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-comfort.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Sometimes You Just Need
            <span className="block text-primary mt-2">Someone to Listen</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Connect with caring volunteers for a 15-minute conversation. 
            Whether you need to talk things through or just want someone to listen, we're here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" className="bg-gradient-warm shadow-glow hover:shadow-xl transition-all">
              <NavLink to="/talk-now">
                <Heart className="mr-2 h-5 w-5" />
                Talk to Someone Now
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <NavLink to="/who-we-are">
                Learn More
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Simple, safe, and supportive. Connect with a volunteer in just a few steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-soft transition-all bg-card border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Method</h3>
              <p className="text-muted-foreground">
                Select between a live chat or schedule a 15-minute phone call at your convenience.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-all bg-card border-border">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Contribution</h3>
              <p className="text-muted-foreground">
                Make a $2.99 donation to connect with a caring volunteer who's ready to listen.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-all bg-card border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Talking</h3>
              <p className="text-muted-foreground">
                Connect immediately or at your scheduled time. Your conversation is private and supportive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            A Safe Space to Be Heard
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our trained volunteers offer non-judgmental support. Sometimes talking to someone 
            who listens without bias is exactly what you need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Always Available</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Confidential</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15min</div>
              <p className="text-muted-foreground">Focused Time</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">$2.99</div>
              <p className="text-muted-foreground">Small Donation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-warm text-primary-foreground border-0 shadow-glow">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Talk?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step. Connect with someone who cares, right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <NavLink to="/talk-now">
                  <Phone className="mr-2 h-5 w-5" />
                  Start a Conversation
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <NavLink to="/donate">
                  Support Our Mission
                </NavLink>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
