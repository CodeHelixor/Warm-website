import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Users, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100, 250];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation helps us provide compassionate listening services to those who need it most. 
            Every contribution makes a real difference in someone's life.
          </p>
        </div>

        {/* Donation Form */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Make a Donation
            </h2>

            {/* Preset Amounts */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-4">
                Choose an amount:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                      selectedAmount === amount
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Or enter a custom amount:
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="pl-8 h-12 text-lg"
                />
              </div>
            </div>

            <Button 
              className="w-full h-12 text-lg bg-gradient-warm shadow-soft hover:shadow-glow transition-all"
              disabled={!selectedAmount && !customAmount}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Your donation is secure and tax-deductible
            </p>
          </Card>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-soft transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">$25</h3>
              <p className="text-muted-foreground">
                Provides 8 people with a listening session when they need it most
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">$100</h3>
              <p className="text-muted-foreground">
                Sponsors volunteer training to ensure quality compassionate care
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-soft transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">$250</h3>
              <p className="text-muted-foreground">
                Helps expand our reach to serve more communities in need
              </p>
            </Card>
          </div>
        </section>

        {/* Why Donate */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-soft border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Your Support Matters
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                A Listening Heart operates on the principle that everyone deserves access to 
                compassionate support, regardless of their ability to pay. While we charge a 
                small fee for our services, many people still can't afford it.
              </p>
              <p className="text-lg">
                Your donations help us:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Provide free or subsidized sessions to those in financial need</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Train and support our growing community of volunteers</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Maintain and improve our technology platform</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Expand our services to reach more communities</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Other Ways to Help */}
        <section>
          <Card className="p-8 md:p-12 border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Other Ways to Help
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Not ready to donate? There are other meaningful ways to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                Become a Volunteer
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                Share Our Story
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Donate;
