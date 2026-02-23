import { Star, Quote } from "lucide-react";

const BarChart = () => {
  const competitors = [
    { name: "Comp 1", value: 55 },
    { name: "Comp 2", value: 62 },
    { name: "Comp 3", value: 48 },
    { name: "Comp 4", value: 70 },
    { name: "Comp 5", value: 58 },
    { name: "Scalelist", value: 95, highlight: true },
  ];

  return (
    <div className="space-y-3">
      {competitors.map((c) => (
        <div key={c.name} className="flex items-center gap-3">
          <span className="w-20 text-right text-sm text-gray-400">{c.name}</span>
          <div className="flex-1">
            <div
              className={`h-7 rounded-md ${c.highlight ? "bg-primary" : "bg-gray-600"}`}
              style={{ width: `${c.value}%` }}
            />
          </div>
          <span className={`w-12 text-sm font-semibold ${c.highlight ? "text-primary" : "text-gray-400"}`}>
            {c.value}%
          </span>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) => (
  <div className="rounded-xl bg-white/5 p-6">
    <div className="mb-3 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="mb-4 text-sm text-gray-300">"{quote}"</p>
    <div>
      <p className="font-semibold text-white">{name}</p>
      <p className="text-xs text-gray-400">{role}</p>
    </div>
  </div>
);

const Accuracy = () => {
  return (
    <section className="bg-brand-dark-section py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Join 7,000+ companies using Scalelist
        </p>
        <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight text-white">
          The most accurate data
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Data coverage */}
          <div className="rounded-2xl bg-white/5 p-8">
            <h3 className="mb-2 text-lg font-semibold text-white">Data coverage</h3>
            <p className="mb-8 text-4xl font-extrabold text-primary">up to 95%</p>
            <BarChart />
          </div>

          {/* Right - Testimonials */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Sales Teams Winning with Scalelist's Data
            </h3>
            <div className="space-y-4">
              <TestimonialCard
                quote="Scalelist has transformed our outbound. The email accuracy alone saved us 20 hours a week on bounced messages."
                name="Sarah Chen"
                role="VP of Sales, TechCorp"
              />
              <TestimonialCard
                quote="We replaced 3 tools with Scalelist. The phone number accuracy is unmatched in the market."
                name="Marcus Johnson"
                role="Sales Director, GrowthCo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accuracy;
