import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" prefetch={false}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m14 12-4.15 4.15a2 2 0 0 1-2.82 0L5.7 14.82a2 2 0 0 1 0-2.82L10 7.85a2 2 0 0 1 2.83 0L14 9.17" />
          <path d="m12 12 2-2" />
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-4.5" />
          <path d="M12 22a7 7 0 0 1-7-7c0-2 1-4 3-4.5" />
        </svg>
      </div>
      <span className="hidden font-headline text-xl font-bold text-primary sm:inline-block">
        Bruveau Notaire
      </span>
    </Link>
  );
}
