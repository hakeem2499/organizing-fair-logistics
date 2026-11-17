export const SERVICES = [
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    summary:
      "Air, ocean, road, and rail forwarding with end-to-end documentation and cargo control.",
    details:
      "We move cargo across modes and borders, coordinating booking, tracking, and delivery for business shipments.",
  },
  {
    slug: "customs-clearing",
    title: "Customs Clearing",
    summary:
      "Import and export clearance, duty guidance, and compliant release of cargo at port and airport.",
    details:
      "Our brokers prepare entries, manage inspections, and keep your goods moving through Nigerian Customs.",
  },
  {
    slug: "container-haulage",
    title: "Container Haulage",
    summary:
      "Port-to-door and inland container trucking for 20ft and 40ft units across major corridors.",
    details:
      "Reliable haulage from terminals and ICDs to warehouses, factories, and project sites.",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICES.some((service) => service.slug === value);
}

export function serviceLabel(slug: string) {
  return SERVICES.find((service) => service.slug === slug)?.title ?? slug;
}
