import Link from "next/link";
import { getTrail } from "@/data/trails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function StoriesPage({ params }: Props) {
  const { id } = await params;
  const trail = getTrail(id);

  if (!trail) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href={`/trail/${trail.id}`} className="text-sm text-[var(--muted)]">
        ← Back to start
      </Link>

      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          Stories from this trail
        </p>
        <h1 className="text-2xl font-semibold">{trail.name}</h1>
        <p className="text-sm text-[var(--muted)]">
          Previous walkers leave short, useful notes so the next person can prepare better.
        </p>
      </header>

      {/* Placeholder stories for the first draft */}
      <div className="space-y-4">
        <article className="card space-y-2">
          <p className="text-xs text-[var(--muted)]">Example story</p>
          <p className="font-medium">“The path was muddier than the photos showed”</p>
          <p className="text-sm text-[var(--muted)]">
            Wear proper walking boots. The chalk gets slippery after rain.
            Took us about 3.5 hours with a slow pace. Beautiful open views once you reach the ridge.
          </p>
        </article>

        <article className="card space-y-2">
          <p className="text-xs text-[var(--muted)]">Example story</p>
          <p className="font-medium">“Not as flat as I expected”</p>
          <p className="text-sm text-[var(--muted)]">
            There are a few steady climbs. I was fine in trainers on a dry day,
            but I saw people struggling a bit with the last rise. Take water.
          </p>
        </article>

        <div className="card text-center text-sm text-[var(--muted)] py-8">
          Real stories from hikers will appear here in the next version.
        </div>
      </div>

      <Link
        href={`/trail/${trail.id}/hike`}
        className="btn w-full block text-center"
      >
        Start my own walk
      </Link>
    </div>
  );
}
