import { CapsuleShape, Orb } from "./CapsuleShape";
import { cn } from "@/lib/utils";

export const StellarBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Floating capsules */}
      <CapsuleShape
        variant="vertical"
        color="outline"
        size="lg"
        className="absolute left-[5%] top-[10%] opacity-60 animate-float border-2 border-white/40"
      />
      <CapsuleShape
        variant="horizontal"
        color="sand"
        size="md"
        className="absolute right-[10%] top-[20%] opacity-80 mix-blend-screen"
      />
      <CapsuleShape
        variant="vertical"
        color="mist"
        size="md"
        className="absolute right-[5%] bottom-[30%] opacity-60 mix-blend-overlay"
      />
      <CapsuleShape
        variant="horizontal"
        color="outline"
        size="lg"
        className="absolute left-[15%] bottom-[15%] opacity-50 border-2 border-white/30"
      />

      {/* Orbs */}
      <Orb color="sand" size="lg" className="absolute right-[20%] top-[15%] opacity-90 mix-blend-hard-light" animate />
      <Orb color="sand" size="xl" className="absolute left-[10%] bottom-[25%] opacity-60 mix-blend-screen" />
      <Orb color="slate" size="md" className="absolute left-[40%] top-[8%] opacity-50 mix-blend-overlay" animate />

      {/* Connecting lines */}
      <div className="absolute left-[10%] top-[30%] w-[200px] h-px bg-gradient-to-r from-white/10 via-white/30 to-transparent rotate-12" />
      <div className="absolute right-[15%] bottom-[40%] w-[150px] h-px bg-gradient-to-l from-secondary/40 via-secondary/60 to-transparent -rotate-6" />

      {/* Large decorative frame */}
      <div className="absolute -right-20 top-1/3 w-40 h-80 rounded-full border-2 border-white/10 opacity-40" />
      <div className="absolute -left-10 bottom-1/4 w-32 h-64 rounded-full border border-secondary/30 opacity-60" />
    </div>
  );
};

export const StellarGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-30", className)}>
      {/* Grid pattern with capsule shapes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stellar-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stellar-grid)" />
      </svg>
    </div>
  );
};
