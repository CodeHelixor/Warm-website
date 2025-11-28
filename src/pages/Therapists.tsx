import { Card } from "@/components/ui/card";
import { Clock, Heart } from "lucide-react";

const Therapists = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Professional Therapist Listings
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with licensed mental health professionals for ongoing support and therapy.
          </p>
        </div>

        {/* Coming Soon Section */}
        <section className="mb-16">
          <Card className="p-12 md:p-16 text-center border-2 border-dashed border-border bg-gradient-soft">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Coming Soon
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                We're currently building a comprehensive directory of licensed therapists 
                and mental health professionals who align with our values of compassionate, 
                accessible care.
              </p>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Carefully vetted licensed therapists and counselors</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Various specialties including anxiety, depression, trauma, and more</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Options for in-person and online therapy sessions</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Transparent pricing and insurance information</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Easy scheduling and booking system</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Important Note */}
        <section>
          <Card className="p-8 border-border bg-secondary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need Professional Help Now?
            </h3>
            <p className="text-muted-foreground mb-4">
              While our volunteer listening service provides valuable support, licensed therapy 
              offers specialized treatment for mental health conditions. If you're dealing with 
              ongoing mental health challenges, we encourage you to seek professional help.
            </p>
            <p className="text-muted-foreground">
              In the meantime, consider reaching out to:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground ml-6">
              <li>• Your primary care physician for referrals</li>
              <li>• Your insurance provider's mental health directory</li>
              <li>• Local community mental health centers</li>
              <li>• Online therapy platforms like BetterHelp or Talkspace</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Therapists;
