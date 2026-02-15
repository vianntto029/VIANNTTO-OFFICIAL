import { cn } from "@/lib/utils";

interface CapsuleShapeProps {
  variant?: "vertical" | "horizontal" | "pill";
  color?: "slate" | "sand" | "wine" | "mist" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const CapsuleShape = ({
  variant = "vertical",
  color = "slate",
  size = "md",
  className,
  style,
  children,
}: CapsuleShapeProps) => {
  const colorClasses = {
    slate: "bg-primary",
    sand: "bg-secondary",
    wine: "bg-accent",
    mist: "bg-muted",
    outline: "border-2 border-primary/20 bg-transparent",
  };

  const sizeClasses = {
    vertical: {
      sm: "w-6 h-24",
      md: "w-10 h-40",
      lg: "w-14 h-60",
      xl: "w-20 h-80",
    },
    horizontal: {
      sm: "w-24 h-6",
      md: "w-40 h-10",
      lg: "w-60 h-14",
      xl: "w-80 h-20",
    },
    pill: {
      sm: "w-16 h-8",
      md: "w-24 h-12",
      lg: "w-32 h-16",
      xl: "w-40 h-20",
    },
  };

  return (
    <div
      className={cn(
        "rounded-full transition-all duration-500",
        colorClasses[color],
        sizeClasses[variant][size],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export const Orb = ({
  color = "sand",
  size = "md",
  className,
  animate = false,
  style,
}: {
  color?: "sand" | "wine" | "slate" | "mist";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-20 h-20",
  };

  const colorClasses = {
    sand: "orb",
    wine: "orb-wine",
    slate: "orb-slate",
    mist: "bg-muted",
  };

  return (
    <div
      className={cn(
        "rounded-full",
        sizeClasses[size],
        colorClasses[color],
        animate && "animate-float",
        className
      )}
      style={style}
    />
  );
};

export const StellarLine = ({
  direction = "horizontal",
  className,
}: {
  direction?: "horizontal" | "vertical";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        direction === "horizontal" ? "stellar-line w-full" : "stellar-line-vertical h-full",
        className
      )}
    />
  );
};

export const FloatingFrame = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border-2 border-primary/10 p-1",
        className
      )}
    >
      <div className="rounded-[1.5rem] border border-primary/5 h-full w-full">
        {children}
      </div>
    </div>
  );
};
