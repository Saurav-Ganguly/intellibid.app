type GlowProps = {
  className?: string;
  size?: number;
  opacity?: number;
};

export function Glow({ className = "", size = 720, opacity = 1 }: GlowProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute glow-amber ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    />
  );
}
