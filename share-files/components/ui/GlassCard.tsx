import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(37,99,235,.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}