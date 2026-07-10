interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fill?: boolean;
}

export function Icon({ name, size = 20, className = "", fill = false }: IconProps) {
  return (
    <span
      className={`material-symbols-rounded select-none shrink-0 leading-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
