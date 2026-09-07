import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AiApplicationsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="5" width="22" height="22" rx="6" />
      <path d="M16 11v10M11 16h10" opacity="0.9" />
      <path d="M13.2 13.2l5.6 5.6M18.8 13.2l-5.6 5.6" opacity="0.35" />
    </svg>
  );
}

export function AiAgentsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="3.4" />
      <circle cx="6.5" cy="9" r="2.2" />
      <circle cx="25.5" cy="9" r="2.2" />
      <circle cx="16" cy="26" r="2.2" />
      <path d="M13.3 14.2 8.3 10.4M18.7 14.2l5-3.8M16 19.4V23.6" opacity="0.6" />
    </svg>
  );
}

export function MobileAppsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="9.5" y="3.5" width="13" height="25" rx="3.2" />
      <path d="M13.5 24.4h5" opacity="0.7" />
      <path d="M12.5 9.5h7M12.5 13.5h7M12.5 17.5h4" opacity="0.35" />
    </svg>
  );
}

export function SaasProductsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4.5 27 10 16 15.5 5 10z" />
      <path d="M5 16l11 5.5L27 16" opacity="0.6" />
      <path d="M5 22l11 5.5L27 22" opacity="0.3" />
    </svg>
  );
}

export function CloudSoftwareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.5 22.5a5.5 5.5 0 0 1-1-10.9 6.5 6.5 0 0 1 12.4-2.4 5 5 0 0 1 5.1 5 5 5 0 0 1-4 4.9" />
      <path d="M10.5 22.5h12" />
      <path d="M13.5 26l2-3 2 2 2-3" opacity="0.55" />
    </svg>
  );
}

export function EmergingTechIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="2" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" />
      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.4"
        transform="rotate(60 16 16)"
        opacity="0.6"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11"
        ry="4.4"
        transform="rotate(120 16 16)"
        opacity="0.35"
      />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="6" />
      <path
        d="M16 3.5v4M16 24.5v4M28.5 16h-4M7.5 16h-4M24.4 7.6l-2.8 2.8M10.4 21.6l-2.8 2.8M24.4 24.4l-2.8-2.8M10.4 10.4L7.6 7.6"
        opacity="0.8"
      />
    </svg>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M24.5 20.2A10.4 10.4 0 1 1 11.8 7.5a8.4 8.4 0 0 0 12.7 12.7z" />
    </svg>
  );
}

