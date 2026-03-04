import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent-bg.png";


const integrationLogos = [
  { name: "salesforce", label: "salesforce", bg: "bg-sky-400", text: "text-white", angle: -60 },
  { name: "clay", label: "clay 🌈", bg: "bg-white", text: "text-foreground", angle: -150 },
  { name: "zapier", label: "zapier", bg: "bg-orange-500", text: "text-white", angle: 0 },
  { name: "hubspot", label: "⚙", bg: "bg-white", text: "text-orange-500", angle: -210 },
  { name: "mixpanel", label: "●", bg: "bg-white", text: "text-violet-600", angle: -30 },
  { name: "csv", label: "CSV", bg: "bg-white", text: "text-green-600", angle: -270 },
];

const OrbitDiagram = () => {
  return (
    <div className="relative h-[500px] w-full max-w-[550px]">
      {/* Dashed orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[460px] w-[460px] rounded-full border border-dashed border-primary/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[320px] w-[320px] rounded-full border border-dashed border-primary/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[180px] w-[180px] rounded-full border border-dashed border-primary/20" />
      </div>

      {/* Center Scalelist logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-lg">
          <img src={logo} alt="Scalelist" className="h-16 w-16 brightness-0 invert" />
        </div>
      </div>

      {/* Orbiting logos */}
      {integrationLogos.map((item) => {
        const radius = 210;
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <div
            key={item.name}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bg} ${item.text} border border-border shadow-md text-xs font-bold`}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left side - Text */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Integrations
              </span>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground">
                Connect your{" "}
                <span className="text-primary">Sales stack</span>
              </h1>
              <p className="mb-8 max-w-md text-lg text-muted-foreground">
                Push enriched contacts straight into your CRM and outreach tools. Start sequences instantly.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8 text-base" asChild>
                  <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">Try for free <ArrowRight className="h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
                  <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com">Talk to sales</a>
                </Button>
              </div>
            </div>

            {/* Right side - Orbit diagram */}
            <div className="flex justify-center">
              <OrbitDiagram />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
