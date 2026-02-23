import { Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const G2Badge = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
      <Award className="h-8 w-8 text-primary" />
    </div>
    <p className="text-center text-xs font-medium text-muted-foreground">{label}</p>
  </div>
);

const WeeklyData = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-medium">4.8 Rating</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="font-medium">GDPR Compliant</span>
          </div>
        </div>

        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground">
          Weekly refreshed data
        </h2>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 text-base">
            Get started for free
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
            View all reviews
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <G2Badge label="Most Used 2025" />
          <G2Badge label="Tier 1 Accuracy" />
          <G2Badge label="High Performer" />
          <G2Badge label="Top 50" />
        </div>
      </div>
    </section>
  );
};

export default WeeklyData;
