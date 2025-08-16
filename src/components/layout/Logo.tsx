import Link from 'next/link';
import { Feather } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" prefetch={false}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
        <Feather className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="font-headline text-xl font-bold text-primary">
          Bruveau Notaire
        </span>
        <span className="text-xs text-muted-foreground">Cabinet Notarial</span>
      </div>
    </Link>
  );
}