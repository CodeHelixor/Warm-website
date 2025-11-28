import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Clock, DollarSign } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const TalkNow = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Choose How You'd Like to Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you prefer texting or talking, we're here to listen. 
            Select the option that feels most comfortable for you.
          </p>
        </div>

        {/* Communication Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Chat Option */}
          <Card className="p-8 hover:shadow-soft transition-all border-2 border-border hover:border-primary/30">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-6 shadow-glow">
                <MessageCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Live Chat
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect instantly through text chat with a caring volunteer
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">15 Minutes</p>
                  <p className="text-sm text-muted-foreground">Focused conversation time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">$2.99 Donation</p>
                  <p className="text-sm text-muted-foreground">One-time contribution</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-warm shadow-soft hover:shadow-glow transition-all">
              Start Chat Now
            </Button>
          </Card>

          {/* Phone Option */}
          <Card className="p-8 hover:shadow-soft transition-all border-2 border-border hover:border-accent/30">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Phone className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Phone Call
              </h2>
              <p className="text-muted-foreground mb-6">
                Schedule a 15-minute phone conversation at your convenience
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">15 Minutes</p>
                  <p className="text-sm text-muted-foreground">Scheduled at your time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">$2.99 Donation</p>
                  <p className="text-sm text-muted-foreground">One-time contribution</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-accent shadow-soft hover:shadow-glow transition-all">
              Schedule Call
            </Button>
          </Card>
        </div>

        {/* What to Expect */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-soft border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Warm Welcome</h3>
                <p className="text-muted-foreground">
                  Your volunteer will greet you warmly and create a comfortable space for conversation
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">👂</div>
                <h3 className="text-xl font-semibold mb-3">Active Listening</h3>
                <p className="text-muted-foreground">
                  Share what's on your mind. Your volunteer is here to listen without judgment
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-semibold mb-3">Supportive Close</h3>
                <p className="text-muted-foreground">
                  End feeling heard and valued. Connect again anytime you need support
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Important Notes */}
        <section>
          <Card className="p-8 border-border bg-secondary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Before You Begin
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  This service is for support and listening, not crisis intervention. 
                  If you're in crisis, please contact emergency services or a crisis hotline.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  All conversations are confidential and will not be recorded or shared.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Our volunteers are trained listeners, not licensed therapists or counselors.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  The $2.99 donation helps us maintain our service and support our volunteers.
                </span>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TalkNow;
