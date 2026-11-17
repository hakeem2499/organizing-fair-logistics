import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const yPadding = {
  none: "py-0",
  sm: "py-8 sm:py-10 lg:py-12",
  md: "py-10 sm:py-14 lg:py-16",
  lg: "py-12 sm:py-16 lg:py-20",
} as const;

type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  y?: keyof typeof yPadding;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Bounded<T extends ElementType = "section">({
  as,
  y = "md",
  className,
  innerClassName,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Comp = (as ?? "section") as ElementType;

  return (
    <Comp
      className={cn(
        "w-full min-w-0 overflow-x-clip px-4 sm:px-6 lg:px-8",
        yPadding[y],
        className,
      )}
      {...restProps}
    >
      <div className={cn("mx-auto w-full min-w-0 max-w-6xl", innerClassName)}>
        {children}
      </div>
    </Comp>
  );
}
