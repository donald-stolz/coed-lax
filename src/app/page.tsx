import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-6 bg-white px-6 py-32 text-center sm:px-16 dark:bg-black">
        <h1 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight text-black dark:text-zinc-50">
          Coed Pickup Lacrosse in Austin, TX
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          No team, no tryouts — just drop in and play. All skill levels welcome.
        </p>
        <Link
          href="/faq"
          className="bg-foreground text-background flex h-12 items-center justify-center gap-2 rounded-full px-6 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Read the FAQ
        </Link>
      </main>
    </div>
  );
}
