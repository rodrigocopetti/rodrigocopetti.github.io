import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Ícones vetorizados com precisão das marcas e tecnologias
export function ReactIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function SpringIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.9 9.8c-.8-4.2-4.1-7.5-8.3-8.3C6.3.3 1.2 4.4.4 10.1c-.8 5.7 3.3 10.9 9 11.7 5.7.8 10.9-3.3 11.7-9 .1-1-.1-2-.2-3zm-9 9.5c-4.4 0-8-3.6-8-8 0-1.8.6-3.5 1.7-4.9l11.2 11.2c-1.4 1.1-3.1 1.7-4.9 1.7z"
        fill="#6DB33F"
      />
      <path
        d="M19.9 8.2L8.7 19.4c.7.4 1.4.6 2.2.6 4.4 0 8-3.6 8-8 0-.8-.2-1.5-.6-2.2l1.6-1.6z"
        fill="#559934"
      />
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.9v-2.1c1.8-.4 3.2-1.8 3.6-3.6h2.1c-.5 3-2.7 5.2-5.7 5.7zm0-7.9V8c0-.6.4-1 1-1h1V5.1c2.2.5 3.9 2.2 4.4 4.4h-2.1c-.3-.7-.9-1.3-1.6-1.5v1.9c-.9.5-1.7 1.1-2.7 1.1z"
        fill="#6DB33F"
      />
    </svg>
  );
}

export function SpringSecurityIcon({
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        className="text-emerald-500 fill-emerald-500/20"
      />
      <path d="m9 12 2 2 4-4" stroke="#6DB33F" strokeWidth="2.5" />
    </svg>
  );
}

export function JavaIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.8 17.5c-2.4.2-4.1.8-4.1 1.5 0 .9 2.9 1.7 6.6 1.7 3.7 0 6.6-.8 6.6-1.7 0-.7-1.7-1.3-4.1-1.5"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.5 14.8c-2.2.3-3.5.9-3.5 1.5 0 .9 3.8 1.6 8.5 1.6 4.7 0 8.5-.7 8.5-1.6 0-.6-1.3-1.2-3.5-1.5"
        stroke="#5382A1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 10c1.5 1.8 1.2 3.2-.2 4.6-1.2 1.2-1.3 2.2-.2 3.4"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.5 8c2.2 2.5 1.5 4.5-.4 6.3"
        stroke="#5382A1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.5 7.5C8 9.5 8.5 11.2 10 12.8"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.5 9H6.5V11H8V18H10V11H11.5V9ZM13.8 14.2C14.2 14.8 14.8 15.2 15.7 15.2C16.5 15.2 17 14.8 17 14.2C17 13.5 16.4 13.2 15.2 12.7C13.6 12 12.5 11.2 12.5 9.7C12.5 8.2 13.7 7 15.6 7C16.9 7 17.9 7.5 18.6 8.5L17.2 9.7C16.7 9.2 16.2 8.9 15.5 8.9C14.8 8.9 14.4 9.3 14.4 9.8C14.4 10.4 14.9 10.7 16 11.1C17.7 11.8 18.9 12.6 18.9 14.1C18.9 15.8 17.6 17 15.6 17C14.1 17 12.8 16.3 12.1 15.1L13.8 14.2Z"
        fill="white"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function ReduxIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4 7.6c1.3.8 2.2 2 2.4 3.5.7.2 1.4.6 2 1.1 1.6 1.4 2.2 3.6 1.6 5.6-.6 2-2.3 3.5-4.4 3.8-1.4.2-2.8-.2-4-1.1-.4.1-.8.1-1.2.1-2.4 0-4.6-1.3-5.8-3.3-1.2-2.1-1.1-4.7.2-6.7 1.3-2 3.6-3.1 6-2.8 1.1.2 2.2.7 3.2 1.4v-1.6zm-1.8 3c-1.8-.5-3.6.4-4.2 2.1-.6 1.7.3 3.6 2 4.3 1.7.7 3.6-.2 4.3-1.9.7-1.7-.2-3.6-1.9-4.3-.1-.1-.1-.1-.2-.2z"
        fill="#764ABC"
      />
      <circle cx="12" cy="12" r="2.5" fill="#A855F7" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="black"
        stroke="#334155"
        strokeWidth="1"
      />
      <path
        d="M15.5 8H17V16H15.5V8ZM8.5 8H10.1L15.3 16H13.6L9.6 9.8V16H8.5V8Z"
        fill="white"
      />
    </svg>
  );
}

export function PostgresIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-2.8 0-4.8-1.5-5.2-3.8h2.1c.3 1.2 1.6 2 3.1 2 1.8 0 3-1.1 3-2.6 0-1.3-.9-2.1-2.4-2.5l-1.3-.3c-2.3-.6-3.5-1.8-3.5-3.6 0-2.3 1.9-3.9 4.6-3.9 2.5 0 4.3 1.4 4.7 3.4h-2.1c-.3-1-1.3-1.6-2.6-1.6-1.5 0-2.5 1-2.5 2.2 0 1.1.8 1.8 2.2 2.2l1.3.3c2.6.7 3.8 2 3.8 3.8 0 2.4-1.9 4.4-4.7 4.4z"
        fill="#336791"
      />
      <circle cx="12" cy="12" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4.2 13.8c-.8.8-2 1.2-3.4 1.2-2.8 0-4.8-1.8-4.8-4.5 0-2.7 2-4.5 4.8-4.5 1.4 0 2.6.4 3.4 1.2l-1.2 1.4c-.6-.5-1.3-.8-2.2-.8-1.7 0-2.8 1.1-2.8 2.7 0 1.6 1.1 2.7 2.8 2.7.9 0 1.6-.3 2.2-.8l1.2 1.4z"
        fill="#00758F"
      />
      <path
        d="M15.5 8.5L19 12l-3.5 3.5"
        stroke="#F29111"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DockerIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 13.5c.3 2.6 2.3 4.5 5 4.5 4.5 0 8.5-3 10-6.5.5-1.2 1.8-1.8 3-1.5-1-1.5-2.5-2.5-4.5-2.5-.5 0-1 .1-1.5.3C14 6.5 12.5 6 11 6c-2 0-3.8 1-4.8 2.5H4c-1.1 0-2 .9-2 2v2c0 .4.4.8.8.9l.2.1z"
        fill="#2496ED"
      />
      <rect x="5" y="10" width="2" height="2" rx="0.3" fill="white" />
      <rect x="8" y="10" width="2" height="2" rx="0.3" fill="white" />
      <rect x="11" y="10" width="2" height="2" rx="0.3" fill="white" />
      <rect x="8" y="7.5" width="2" height="2" rx="0.3" fill="white" />
      <rect x="11" y="7.5" width="2" height="2" rx="0.3" fill="white" />
    </svg>
  );
}

export function AwsIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.8 11.2c-.3 0-.6.1-.8.3-.3.2-.4.5-.4.9 0 .4.1.7.4.9.2.2.5.3.9.3.5 0 .9-.2 1.2-.5.3-.3.5-.8.5-1.3v-.6h-1.8zm4.3 4.1h-1.8v-.9c-.4.4-.8.7-1.3.9-.5.2-1 .3-1.6.3-.9 0-1.7-.3-2.2-.8-.6-.6-.9-1.3-.9-2.3 0-1 .3-1.8 1-2.4.7-.6 1.6-.9 2.8-.9h1.7v-.4c0-.5-.1-.9-.4-1.2-.3-.3-.7-.4-1.3-.4-.4 0-.8.1-1.2.3-.4.2-.7.4-.8.7l-1.3-1c.4-.5.9-.8 1.5-1.1.7-.3 1.4-.4 2.2-.4 1.2 0 2.2.3 2.8.9.7.6 1 1.5 1 2.7v5.6zm4.7-.2l-2-6.5h2l1.2 4.6 1.2-4.6h1.9l-2.1 6.5h-2.2zm7.1-.6c-.5.4-1.1.7-1.8.7-.7 0-1.3-.2-1.7-.5-.4-.4-.6-.9-.6-1.5 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2.1-.7l1.2-.2v-.3c0-.4-.1-.7-.3-.9-.2-.2-.6-.3-1.1-.3-.6 0-1.2.2-1.6.7l-1.2-1.1c.7-.8 1.7-1.2 2.9-1.2 1.1 0 2 .3 2.5.8.6.5.9 1.3.9 2.4v4.5h-1.8v-.8h-.3z"
        fill="#FF9900"
      />
      <path
        d="M4.5 18c4.5 2.5 10.5 2.5 15 0"
        stroke="#FF9900"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VueIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 15L2 3h4.5l5.5 8 5.5-8H22L12 15z" fill="#42B883" />
      <path d="M12 15L6.5 6.5H9.5L12 10.5l2.5-4h3L12 15z" fill="#35495E" />
    </svg>
  );
}

export function GithubActionsIcon({
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="6"
        cy="18"
        r="3"
        stroke="#2088FF"
        strokeWidth="2"
        fill="#2088FF"
        fillOpacity="0.2"
      />
      <circle
        cx="18"
        cy="6"
        r="3"
        stroke="#2088FF"
        strokeWidth="2"
        fill="#2088FF"
        fillOpacity="0.2"
      />
      <circle
        cx="18"
        cy="18"
        r="3"
        stroke="#2088FF"
        strokeWidth="2"
        fill="#2088FF"
        fillOpacity="0.2"
      />
      <path
        d="M6 15V9a3 3 0 0 1 3-3h6M9 18h6"
        stroke="#2088FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RestApiIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="6"
        rx="2"
        className="text-teal-400 stroke-teal-400"
      />
      <rect
        x="2"
        y="14"
        width="20"
        height="6"
        rx="2"
        className="text-teal-400 stroke-teal-400"
      />
      <line x1="6" y1="7" x2="6.01" y2="7" stroke="currentColor" />
      <line x1="10" y1="7" x2="14" y2="7" stroke="currentColor" />
      <line x1="6" y1="17" x2="6.01" y2="17" stroke="currentColor" />
      <line x1="10" y1="17" x2="14" y2="17" stroke="currentColor" />
    </svg>
  );
}

export function MicroservicesIcon({
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        className="text-emerald-400 fill-emerald-400/20 stroke-emerald-400"
      />
      <circle
        cx="19"
        cy="5"
        r="2.5"
        className="text-teal-400 stroke-teal-400"
      />
      <circle cx="5" cy="5" r="2.5" className="text-cyan-400 stroke-cyan-400" />
      <circle
        cx="5"
        cy="19"
        r="2.5"
        className="text-emerald-400 stroke-emerald-400"
      />
      <circle cx="19" cy="19" r="2.5" className="text-sky-400 stroke-sky-400" />
      <path
        d="M7 6.5l3.2 3.8M17 6.5l-3.2 3.8M7 17.5l3.2-3.8M17 17.5l-3.2-3.8"
        stroke="#34D399"
      />
    </svg>
  );
}

export function JpaHibernateIcon({
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse
        cx="12"
        cy="5"
        rx="8"
        ry="3"
        className="text-teal-400 stroke-teal-400 fill-teal-400/10"
      />
      <path
        d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
        className="text-teal-400 stroke-teal-400"
      />
      <path
        d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
        className="text-teal-400 stroke-teal-400"
      />
      <path
        d="M12 9v6M9 12h6"
        stroke="#14B8A6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GithubIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
