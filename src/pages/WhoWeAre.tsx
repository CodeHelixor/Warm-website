import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Shield } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About A Listening Heart
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe everyone deserves to be heard. Our mission is to create a warm, 
            supportive space where people can talk freely and find comfort in knowing 
            someone truly cares.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-soft border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-4">
                A Listening Heart was born from a simple truth: sometimes, the most healing 
                thing in the world is having someone who will simply listen without judgment, 
                without trying to fix, without rushing to give advice.
              </p>
              <p className="mb-4">
                In our fast-paced world, genuine human connection can feel rare. We created 
                this space to bring back the power of listening—the kind that makes you feel 
                seen, heard, and valued for exactly who you are.
              </p>
              <p>
                Our volunteers range from 18 to 70 years old, each bringing their own unique 
                perspective and compassion. They're everyday people who understand that 
                sometimes the best gift you can give someone is your full attention.
              </p>
            </div>
          </Card>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Compassion First</h3>
              <p className="text-muted-foreground">
                Every conversation is rooted in genuine care and empathy. We meet you 
                exactly where you are, with warmth and understanding.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Safe & Confidential</h3>
              <p className="text-muted-foreground">
                Your privacy is sacred. Everything you share remains completely confidential. 
                This is your safe space to be yourself.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Inclusive Community</h3>
              <p className="text-muted-foreground">
                Everyone is welcome here, regardless of age, background, or circumstance. 
                We celebrate diversity and create space for all voices.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Always Accessible</h3>
              <p className="text-muted-foreground">
                Support shouldn't have barriers. We keep our service simple, affordable, 
                and available whenever you need it.
              </p>
            </Card>
          </div>
        </section>

        {/* Meet Our Volunteers */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-secondary/30 border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Volunteers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our volunteers are the heart of what we do. They come from all walks of life, 
              bringing diverse experiences and perspectives. What unites them is a genuine 
              desire to help others feel heard and supported.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">18-70</div>
                <p className="text-muted-foreground">Age Range</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Trained Listeners</p>
              </div>
            </div>
          </Card>
        </section>

        {/* What We're Not */}
        <section>
          <Card className="p-8 md:p-12 border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Important to Know
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While we provide a supportive listening service, we are not a crisis hotline 
              or a replacement for professional therapy. Our volunteers are trained listeners, 
              not licensed therapists.
            </p>
            <p className="text-lg text-muted-foreground">
              If you're experiencing a mental health crisis, please contact a crisis hotline 
              or emergency services. We're here for the everyday moments when you just need 
              someone to listen and understand.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;
