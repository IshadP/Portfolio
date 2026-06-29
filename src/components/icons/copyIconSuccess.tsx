import { SVGProps } from "react";

interface copyIconSuccessProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  iconColor?: string;  /* Overrides the main green area */
  checkColor?: string; /* Overrides the white checkmark */
}

export default function copyIconSuccess({
  className = "",
  size = 18,
  iconColor = "#21AF55", // Default SVG green
  checkColor = "currentColor", // Defaults to inherit or fallback to white
  ...props
}: copyIconSuccessProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_success_copy)">
        {/* Outer overlapping squares layout */}
        <path
          d="M15 3.75V17.25C15 17.4489 14.921 17.6397 14.7803 17.7803C14.6397 17.921 14.4489 18 14.25 18H0.75C0.551088 18 0.360322 17.921 0.21967 17.7803C0.0790178 17.6397 0 17.4489 0 17.25V3.75C0 3.55109 0.0790178 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75ZM17.25 0H3.75C3.55109 0 3.36032 0.0790178 3.21967 0.21967C3.07902 0.360322 3 0.551088 3 0.75C3 0.948912 3.07902 1.13968 3.21967 1.28033C3.36032 1.42098 3.55109 1.5 3.75 1.5H16.5V14.25C16.5 14.4489 16.579 14.6397 16.7197 14.7803C16.8603 14.921 17.0511 15 17.25 15C17.4489 15 17.6397 14.921 17.7803 14.7803C17.921 14.6397 18 14.4489 18 14.25V0.75C18 0.551088 17.921 0.360322 17.7803 0.21967C17.6397 0.0790178 17.4489 0 17.25 0Z"
          fill={iconColor}
        />
        {/* Inner checkmark path */}
        <path
          d="M10.8572 8.7672L10.1329 8.12686C10.0424 8.04562 9.91984 8 9.79206 8C9.66428 8 9.54171 8.04562 9.45121 8.12686L6.65405 10.6151L5.54683 9.64753C5.45614 9.56655 5.33352 9.52123 5.20581 9.52148C5.07811 9.52174 4.95571 9.56755 4.86542 9.64889L4.14116 10.3012C4.05077 10.3827 4 10.4932 4 10.6084C4 10.7237 4.05077 10.8342 4.14116 10.9157L6.30248 12.8726C6.34731 12.913 6.40055 12.945 6.45914 12.9669C6.51772 12.9887 6.58052 13 6.64394 13C6.70735 13 6.77015 12.9887 6.82874 12.9669C6.88733 12.945 6.94056 12.913 6.9854 12.8726L10.8587 9.38335C10.9036 9.34286 10.9392 9.29477 10.9635 9.24186C10.9877 9.18894 11.0001 9.13224 11 9.07499C10.9999 9.01775 10.9872 8.96109 10.9627 8.90827C10.9382 8.85545 10.9023 8.80751 10.8572 8.7672Z"
          fill={checkColor}
          className={checkColor === "currentColor" ? "text-white" : ""}
        />
      </g>
      <defs>
        {/* Renamed clipPath id to avoid collisions if multiple SVGs are on one page */}
        <clipPath id="clip0_success_copy">
          <rect width="18" height="18" fill="transparent" />
        </clipPath>
      </defs>
    </svg>
  );
}