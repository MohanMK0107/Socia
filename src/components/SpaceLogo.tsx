interface SpaceLogoProps {
  color?: string;
  width?: number;
}

export default function SpaceLogo({
  color = "currentColor",
  width = 150,
}: SpaceLogoProps) {
  return (
    <div
      style={{
        width,
        aspectRatio: "2 / 1",
        backgroundColor: color,
        maskImage: "url('/images/space-logo.svg')",
        WebkitMaskImage: "url('/images/space-logo.svg')",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}