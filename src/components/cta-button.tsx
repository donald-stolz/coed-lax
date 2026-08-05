import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
};

const baseClasses =
  'relative flex h-[3.45rem] w-full max-w-[18rem] items-center justify-center rounded-full px-7 font-semibold shadow-lg transition-colors';

const variantClasses: Record<NonNullable<CtaButtonProps['variant']>, string> = {
  primary: 'bg-ink text-paper hover:bg-ink/85',
  secondary: 'border-ink text-ink hover:bg-ink hover:text-paper border-2',
};

export function CtaButton({
  href,
  icon,
  children,
  variant = 'primary',
  external = false,
}: CtaButtonProps) {
  const className = `${baseClasses} ${variantClasses[variant]}`;
  const content = (
    <>
      <span
        aria-hidden="true"
        className="bg-paper absolute left-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full leading-none"
      >
        <span className="flex translate-y-px items-center justify-center">
          {icon}
        </span>
      </span>
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
