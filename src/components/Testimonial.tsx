import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-2xl bg-card p-10 lg:grid-cols-2">
          <div>
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              "I can access the contact data I need instantly"
            </h3>
            <p className="mb-6 text-muted-foreground">
              "The Scalelist Chrome extension is a game-changer. I can be on any LinkedIn profile or company website and instantly pull up verified emails and direct phone numbers. It's cut my prospecting time in half and the data quality is consistently better than anything else I've used."
            </p>
            <div>
              <p className="font-semibold text-foreground">Joseph Aboutariya</p>
              <p className="text-sm text-muted-foreground">
                Director, Sales Development at FlashIntel
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-64 w-full overflow-hidden rounded-xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
                alt="Professional workspace"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
