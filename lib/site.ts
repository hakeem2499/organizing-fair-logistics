export const SITE = {
  name: "Organizingfair Logistics",
  legalName: "Organizingfair Logistics Limited",
  tagline: "We make every move a success",
  description:
    "Freight forwarding, customs clearing, and container logistics from Tin Can Island and Apapa Port, Nigeria.",
  location: "Tin Can Island / Apapa Port, Lagos, Nigeria",
  address: "Tin Can Island Port Complex, Apapa, Lagos, Nigeria",
  phoneDisplay: "+234 808 928 2112",
  phoneHref: "tel:+2348089282112",
  email: "info@organizingfairlogistics.com",
  hours: "Monday–Friday, 8:00–17:00 WAT",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/quotation", label: "Get a Quotation" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_TYPES = [
  { value: "import-clearing", label: "Import Clearing" },
  { value: "export-forwarding", label: "Export Forwarding" },
  { value: "container-coordination", label: "Container Coordination" },
  { value: "other", label: "Other" },
] as const;

export const CONTAINER_SIZES = [
  { value: "20ft", label: "20ft" },
  { value: "40ft", label: "40ft" },
  { value: "40ft-hc", label: "40ft High Cube" },
  { value: "45ft", label: "45ft" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type ServiceTypeValue = (typeof SERVICE_TYPES)[number]["value"];

export function isServiceType(value: string): value is ServiceTypeValue {
  return SERVICE_TYPES.some((item) => item.value === value);
}

export function serviceTypeLabel(value: string) {
  return SERVICE_TYPES.find((item) => item.value === value)?.label ?? value;
}
