import NextImage from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

export function ImageFrame({ src, alt, size, className = "" }: ImageFrameProps) {
  const desktopPx = size * 40;

  return (
    <div
      className={`border border-outline p-2 bg-bg-default rounded-2xl inline-flex items-center justify-center ${className}`}
      style={
        {
        
          "--img-size": `${desktopPx}px`,
        } as React.CSSProperties
      }
    >
      <NextImage
        src={src}
        alt={alt}
        width={desktopPx}
        height={desktopPx}
        className="w-[var(--img-size)] h-[var(--img-size)] rounded-lg object-cover"
      />
    </div>
  );
}
