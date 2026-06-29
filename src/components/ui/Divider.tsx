interface DividerProps {
  variant?: "default" | "top";
}

export default function Divider({ variant = "default" }: DividerProps) {

  return (
    <div className={`flex flex-row z-0 h-10`}>
    </div>
  );
}