import { Star, ArrowRight, Mail, Phone, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const RatingBadge = ({ rating, platform }: { rating: string; platform: string }) => (
  <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <span className="font-medium text-foreground">{rating} on {platform}</span>
  </div>
);

const BrowserMockup = () => (
  <div className="w-full max-w-md rounded-xl border border-border bg-white shadow-xl overflow-hidden">
    {/* Browser chrome */}
    <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="ml-4 flex-1 rounded-md bg-gray-200 px-3 py-1 text-xs text-muted-foreground">
        linkedin.com/in/daniel-scott
      </div>
    </div>
    {/* Extension panel */}
    <div className="p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
          DS
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Daniel Scott</h4>
          <p className="text-sm text-muted-foreground">Product Manager at Zapier</p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 rounded-lg bg-background p-3">
          <Mail className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Email (Verified ✓)</p>
            <p className="text-sm font-medium text-foreground">d.scott@zapier.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-background p-3">
          <Phone className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Mobile (Verified ✓)</p>
            <p className="text-sm font-medium text-foreground">+1 (555) 234-5678</p>
          </div>
        </div>
      </div>
      <Button className="w-full gap-2 rounded-lg">
        <Plus className="h-4 w-4" /> Add to list
      </Button>
    </div>
  </div>
);

const TrustBar = () => {
  const logos = ["ElevenLabs", "CLOUDERA", "stripe", "J.P.Morgan", "ORACLE NetSuite", "BD"];
  return (
    <div className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-wide text-muted-foreground/60">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-8">
        <div className="mx-auto max-w-6xl px-6">
          {/* Rating badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <RatingBadge rating="4.8/5" platform="Google" />
            <RatingBadge rating="4.9/5" platform="Capterra" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground lg:text-6xl">
                Get the best emails and mobile numbers,{" "}
                <span className="text-primary">Anywhere</span>
              </h1>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                Access verified professional email addresses and phone numbers from any website or social profile. Build targeted lead lists in seconds.
              </p>
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8 text-base">
                  Try for free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                  Talk to Sales
                </Button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                7000+ companies save time using Scalelist
              </p>
            </div>

            {/* Right - Browser mockup */}
            <div className="flex justify-center lg:justify-end">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero;
