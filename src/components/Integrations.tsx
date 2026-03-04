import { Badge } from "@/components/ui/badge";

interface IntegrationCard {
  icon: React.ReactNode;
  name: string;
  badge: string;
  badgeVariant: "direct" | "coming" | "twoway";
  description: string;
}

const BadgeLabel = ({ type, label }: { type: string; label: string }) => {
  const styles =
    type === "direct"
      ? "bg-muted text-foreground border-border"
      : type === "twoway"
      ? "bg-muted text-foreground border-border"
      : "bg-primary text-primary-foreground border-primary";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles}`}>
      {label}
    </span>
  );
};

const MakeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M4 8h6l4 12 4-12h6l4 12 4-12h6" stroke="hsl(258, 60%, 50%)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const ZapierIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z" fill="hsl(24, 95%, 53%)" />
  </svg>
);

const N8nIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="10" cy="20" r="4" stroke="hsl(10, 80%, 55%)" strokeWidth="2.5" fill="none" />
    <circle cx="20" cy="20" r="4" stroke="hsl(10, 80%, 55%)" strokeWidth="2.5" fill="none" />
    <circle cx="30" cy="20" r="4" stroke="hsl(10, 80%, 55%)" strokeWidth="2.5" fill="none" />
    <line x1="14" y1="20" x2="16" y2="20" stroke="hsl(10, 80%, 55%)" strokeWidth="2" />
    <line x1="24" y1="20" x2="26" y2="20" stroke="hsl(10, 80%, 55%)" strokeWidth="2" />
  </svg>
);

const HubSpotIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 8c-2 0-4 1-5 3-2-1-4 0-5 2s0 4 2 5c-1 2 0 4 2 5s4 0 5-2c2 1 4 0 5-2s0-4-2-5c1-2 0-4-2-5s-3-1-5-1z" fill="hsl(18, 95%, 55%)" />
  </svg>
);

const SalesforceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <ellipse cx="14" cy="22" rx="8" ry="7" fill="hsl(200, 85%, 55%)" />
    <ellipse cx="26" cy="22" rx="8" ry="7" fill="hsl(200, 85%, 55%)" />
    <ellipse cx="20" cy="16" rx="7" ry="6" fill="hsl(200, 85%, 55%)" />
  </svg>
);

const PipedriveIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="10" y="8" width="20" height="24" rx="6" fill="hsl(145, 55%, 42%)" />
    <text x="20" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">p</text>
  </svg>
);

const FolkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="14" fill="hsl(0, 0%, 15%)" />
    <ellipse cx="20" cy="20" rx="8" ry="5" stroke="white" strokeWidth="2" fill="none" />
    <line x1="20" y1="15" x2="20" y2="25" stroke="white" strokeWidth="2" />
  </svg>
);

const AttioIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 28L16 12h8l8 16" stroke="hsl(0, 0%, 15%)" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M14 22h12" stroke="hsl(0, 0%, 15%)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const BreakcoldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="8" width="24" height="24" rx="6" fill="hsl(222, 84%, 53%)" />
    <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Br</text>
  </svg>
);

const GoogleSheetsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="4" width="24" height="32" rx="3" fill="hsl(145, 65%, 42%)" />
    <rect x="12" y="12" width="16" height="3" rx="1" fill="white" />
    <rect x="12" y="18" width="16" height="3" rx="1" fill="white" />
    <rect x="12" y="24" width="16" height="3" rx="1" fill="white" />
    <line x1="20" y1="12" x2="20" y2="27" stroke="hsl(145, 65%, 42%)" strokeWidth="1.5" />
  </svg>
);

const ClayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <text x="4" y="28" fontSize="22" fontWeight="bold" fill="hsl(0, 0%, 15%)">clay</text>
    <rect x="32" y="10" width="6" height="12" rx="3" fill="hsl(340, 80%, 55%)" />
    <rect x="30" y="14" width="4" height="8" rx="2" fill="hsl(40, 90%, 55%)" />
    <rect x="34" y="14" width="4" height="8" rx="2" fill="hsl(200, 80%, 55%)" />
  </svg>
);

const integrationSections = [
  {
    title: "Automation & No-code",
    cards: [
      {
        icon: <MakeIcon />,
        name: "Make",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Find the right leads based on multiple filters. Send multichannel campaigns with Scalelist.",
      },
      {
        icon: <ZapierIcon />,
        name: "Zapier",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Use Zapier to connect Scalelist to 5,000+ tools you use in your business to increase your productivity.",
      },
      {
        icon: <N8nIcon />,
        name: "n8n",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Use n8n to connect Scalelist and set up outreach automation. It's the most popular workflow automation platform.",
      },
      {
        icon: <ClayIcon />,
        name: "Clay",
        badge: "via API",
        badgeVariant: "direct" as const,
        description: "Automate data enrichment in Clay and build highly targeted, dynamic lead lists.",
      },
    ],
  },
  {
    title: "CRM",
    cards: [
      {
        icon: <HubSpotIcon />,
        name: "HubSpot",
        badge: "2-way sync",
        badgeVariant: "twoway" as const,
        description: "Sync your outbound activities, like new leads, email interactions, etc., to HubSpot. Easily transfer leads between HubSpot and Scalelist.",
      },
      {
        icon: <SalesforceIcon />,
        name: "Salesforce",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Forward outbound activities (new leads, email opens, replies, etc.) to Salesforce. Easily transfer leads between Salesforce and Scalelist.",
      },
      {
        icon: <PipedriveIcon />,
        name: "Pipedrive",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Forward outbound activities (new leads, email opens, replies, etc.) to Pipedrive. Easily transfer leads between Pipedrive and Scalelist.",
      },
      {
        icon: <FolkIcon />,
        name: "Folk",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Centralize your contacts and sync Scalelist enrichment data directly to your folk CRM.",
      },
      {
        icon: <AttioIcon />,
        name: "Attio",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Build powerful workflows by syncing Scalelist prospects into your Attio workspace.",
      },
      {
        icon: <BreakcoldIcon />,
        name: "Breakcold",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Centralize social and email interactions, then sync key insights into Scalelist.",
      },
    ],
  },
  {
    title: "Google Sheet Automation",
    cards: [
      {
        icon: <GoogleSheetsIcon />,
        name: "Google Sheets",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Send leads to your Scalelist campaigns from Google Sheets and all the Scalelist activities back to Google Sheets.",
      },
    ],
  },
];

const IntegrationCard = ({ card }: { card: IntegrationCard }) => (
  <div className="rounded-xl border border-border bg-white p-6 flex flex-col gap-3">
    <div>{card.icon}</div>
    <hr className="border-border" />
    <div className="flex items-center gap-2">
      <span className="text-base font-semibold text-foreground">{card.name}</span>
      <BadgeLabel type={card.badgeVariant} label={card.badge} />
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>
    <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard" className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:underline mt-2">
      Connect now <span aria-hidden="true">›</span>
    </a>
  </div>
);

const Integrations = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        {integrationSections.map((section) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h2 className="mb-8 text-2xl font-bold text-foreground">{section.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card) => (
                <IntegrationCard key={card.name} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
