import Image from "next/image";
import { SITE } from "@/lib/site";

type BrandMarkProps = {
  compact?: boolean;
  invert?: boolean;
  priority?: boolean;
};

export function BrandMark({
  compact = false,
  invert = false,
  priority = false,
}: BrandMarkProps) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span
        className={`relative shrink-0 overflow-hidden ${
          compact ? "h-9 w-9" : "h-11 w-11"
        } ${invert ? "brightness-0 invert" : ""}`}
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="44px"
          className="object-contain"
          priority={priority}
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-extrabold tracking-tight ${
            invert ? "text-white" : "text-navy"
          } ${compact ? "text-[14px] sm:text-[15px]" : "text-base md:text-lg"}`}
        >
          {SITE.name}
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${
            invert ? "text-gold-bright" : "text-gold"
          }`}
        >
          Limited
        </span>
      </span>
    </span>
  );
}
